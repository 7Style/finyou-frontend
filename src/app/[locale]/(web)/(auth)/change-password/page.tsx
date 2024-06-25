"use client";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { redirect, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useResetPassword } from "@/hooks/reset-password";
import { InnerLayout } from "@/components/auth";
import { FormSchema } from "@/types/auth";
import Form from "@/components/auth/form";

export default function ResetPassword() {
  const t = useTranslations();
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

  const Params = useSearchParams();
  const hash = Params.get("hash");

  const submitHandler = async (data: FormSchema) => {
    try {
      await schema.parse(data);
      mutate({ ...data, hash: hash });
      if (isSuccess) {
        toast.success(t('success', { name: t('changePassword') }), { position: "top-right" });
        redirect("/signin");
      } else if (isError) {
        error?.message
          ? toast.error(error?.message, { position: "top-right" })
          : toast.error(t('error', { name: t('changePassword') }), { position: "top-right" });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Set Zod errors to the form state
        // error.errors.forEach((err) => {
        //   if (err.path) {
        //     setError(err.path[0] as keyof FormData, {
        //       type: "manual",
        //       message: err.message,
        //     });
        //   }
        // });
        console.log(error);
      }
    }
  };

  return (
    <InnerLayout
      title={t("changeTitle")}
      description={t("changeDescription")}
      linkText={t("changeLink")}
      cta={t("signIn")}
    >
      <Form
        submitHandler={submitHandler}
        password={t("password")}
        confirmPassword={t("confirmPassword")}
        isSubmitting={isPending}
        btnText={t("changePassword")}
      />
    </InnerLayout>
  );
}
