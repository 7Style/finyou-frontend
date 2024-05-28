"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { ButtonGroup } from "@/components/common/button-group";
import { providers } from "@/constants/common";

interface FormData {
  email: string;
  password: string;
}

export default function Form() {
  const t = useTranslations("page.auth.common");
  const authTrans = useTranslations("page.auth");
  const commonTrans = useTranslations("common");

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        email: z
          .string()
          .email(t("invalidFormat", { name: t("email") }))
          .min(1),
        password: z.string().min(8, t("passwordMin", { min: 8 })),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const submitHandler = async (data: FormData) => {
    try {
      setLoading(true);
      await schema.parse(data);
      await signIn("credentials", {
        ...data,
        redirect: false,
        callbackUrl: "/dashboard",
      }).then((res) => {
        if (res?.ok) {
          toast.success(
            commonTrans("toast.success", {
              name: commonTrans("button.signIn"),
            }),
            { position: "top-right" }
          );
          router.push("/dashboard", { scroll: false });
        } else {
          toast.error(
            commonTrans("toast.error", { name: commonTrans("button.signIn") }),
            { position: "top-right" }
          );
        }
        setLoading(false);
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
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
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
          {...register("email", {
            required: t("requiredError", { name: t("email") }),
          })}
        />
        {errors.email && (
          <p className="text-red-500 pt-1 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">{t("password")}</Label>
          <Link
            href="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            {authTrans("forgotPassword.link")}
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          required
          {...register("password", {
            required: t("requiredError", { name: t("password") }),
          })}
        />
        {errors.password && (
          <p className="text-red-500 pt-1 text-xs">{errors.password.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {commonTrans("button.signIn")}
      </Button>

      <ButtonGroup
        array={providers}
        variant="outline"
        className="w-full"
        disabled={loading}
      />
    </form>
  );
}
