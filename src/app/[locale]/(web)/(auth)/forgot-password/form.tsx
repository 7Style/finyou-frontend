'use client';
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { redirect } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForgotPassword } from "@/hooks/forgot-password";

interface FormData {
    email: string;
}

export default function Form() {
    const t = useTranslations("page.auth.common");
    const commonTrans = useTranslations("common.toast");

    const [loading, setLoading] = useState(false);
    const schema = useMemo(() =>
        z.object({
            email: z.string().email(t('invalidFormat', { name: t('email') })).min(1),
        }), [t]);

    const { isSuccess, mutate, isError, error } = useForgotPassword();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<FormData>();

    const submitHandler = async (data: FormData) => {
        try {
            setLoading(true);
            await schema.parse(data);
            mutate(data);

            if (isSuccess) {
                toast.success(commonTrans('verfication'), {
                  position: "top-right",
                });
                redirect("/signin");
            } else if (isError) {
            error?.message
                ? toast.error(error?.message, { position: "top-right" })
                : toast.error(commonTrans('error', {name: t('resetPassword')}), { position: "top-right" });
            }
            setLoading(false);
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Set Zod errors to the form state
                error.errors.forEach((err) => {
                    if (err.path) {
                        setError(err.path[0] as keyof FormData, {
                            type: "manual",
                            message: err.message,
                        });
                    }
                });
                
                setLoading(false);
            }
        }
    };


    return (
        <form className="grid gap-4" onSubmit={handleSubmit(submitHandler)}>
       <div className="grid gap-2">
                <Label htmlFor="email">{t('workEmail')}</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...register('email', { required: t('requiredError', {name: t('workEmail')}) })}
                />
                {errors.email && <p className="text-red-500 pt-1 text-xs">{errors.email.message}</p>}
            </div>
            
        <Button type="submit" className="w-full" disabled={loading}>
            {
                loading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )
            }
            {t("resetPassword")}
        </Button>
    </form>
    )
}
