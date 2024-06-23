"use client";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { z } from "zod";
import { toast } from "react-toastify";
import { InnerLayout } from "@/components/auth";
import { FormSchema } from "@/types/auth";
import { useRegister } from "@/hooks/register";
import Form from "@/components/auth/form";

export default function Signup() {
  const t = useTranslations();
  const { isPending, isSuccess, mutate, error, isError } = useRegister();

  const schema = useMemo(
    () =>
      z
        .object({
          name: z.string(),
          username: z.string(),
          surname: z.string(),
          email: z
            .string()
            .email(t("invalidFormat", { name: t("email") }))
            .min(1),
          password: z
            .string()
            .regex(
              /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              t("strongPasswordError")
            )
            .min(4, t("passwordMin", { min: 4 })),
          confirmPassword: z.string(),
        })
        .refine((values) => values.password === values.confirmPassword, {
          message: t("matchPassword"),
          path: ["confirmPassword"],
        }),
    [t]
  );

  const submitHandler = async (data: FormSchema) => {
    try {
      await schema.parseAsync(data);

      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value)
      );

      mutate(filteredData as FormSchema);

      if (isSuccess) {
        toast.success(
          t("success", {
            name: t("register"),
          }),
          { position: "top-right" }
        );
        redirect("/signin");
      } else {
        error?.message
          ? toast.error(error?.message, { position: "top-right" })
          : toast.error(
              t("error", {
                name: t("register"),
              }),
              { position: "top-right" }
            );
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error);
        // error.errors.forEach((err) => {
        //   if (err.path) {
        //     setError(err.path[0] as keyof FormSchema, {
        //       type: "manual",
        //       message: err.message,
        //     });
        //   }
        // });
      }
    }
  };

  return (
    <InnerLayout 
      title={t("registerTitle")} 
      description={t("registerDescription")} 
      linkText={t("registerLink")} 
      cta={t("registerLogin")}
    >
      <Form
        submitHandler={submitHandler}
        name={t("name")}
        username={t("username")}
        surname={t("surname")}
        email={t("email")}
        password={t("password")}
        confirmPassword={t("confirmPassword")}
        isSubmitting={isPending}
        btnText={t("createAccount")}
      />
    </InnerLayout>
  );
}
