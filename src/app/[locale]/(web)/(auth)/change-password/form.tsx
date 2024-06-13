'use client';
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react"
import { redirect, useSearchParams } from "next/navigation";
import { useResetPassword } from "@/hooks/reset-password";

interface FormData {
  password: string;
  confirmPassword: string;
}


export default function Form() {
  const t = useTranslations("page.auth.common");
  const commonTrans = useTranslations("common.toast");
  const Params = useSearchParams();
  const hash = Params.get("hash");

  const { isPending, isSuccess, mutate, isError, error } = useResetPassword();

  const schema = useMemo(() =>
    z.object({
      password: z.string().regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, t("strongPasswordError")).min(4, t('passwordMin', { min: 4 })),
      confirmPassword: z.string()
    }).refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: t("matchPassword"),
        path: ["confirmPassword"],
      }
    )
    , [t]);


  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>();

  const submitHandler = async (data: FormData) => {
    try {
      await schema.parse(data);
      mutate({ ...data, hash: hash });
      if (isSuccess) {
        toast.success(commonTrans('success', { name: t('changePassword') }), { position: "top-right" });
        redirect("/signin");
      } else if (isError) {
        error?.message
          ? toast.error(error?.message, { position: "top-right" })
          : toast.error(commonTrans('error', { name: t('changePassword') }), { position: "top-right" });
      }
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
      }
    }
  };


  return (
    <form className="grid gap-4" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid gap-2">
        <Label htmlFor="password">{t("password")}</Label>
        <Input id="password" type="password" required  {...register('password', { required: t('requiredError', { name: t('password') }) })} />
        {errors.password && <p className="text-red-500 pt-1 text-xs">{errors.password.message}</p>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="confirmPassword">{t('confirmPassword')}</Label>
        <Input id="confirmPassword" type="password" required  {...register('confirmPassword', { required: t('requiredError', { name: t('confirmPassword') }) })} />
        {errors.confirmPassword && <p className="text-red-500 pt-1 text-xs">{errors.confirmPassword.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {
          isPending && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )
        }
        {t("changePassword")}
      </Button>
    </form>
  )
}
