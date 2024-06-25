"use client";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { toast } from "react-toastify";
import { InnerLayout } from "@/components/auth";
import { FormSchema } from "@/types/auth";
import Form from "@/components/auth/form";

export default function Signin() {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        username: z.string(),
        password: z.string(),
      }),
    []
  );

  const submitHandler = async (data: FormSchema) => {
    try {
      setLoading(true);
      await schema.parse(data);
      await signIn("credentials", {
        ...data,
        redirect: false,
        callbackUrl: "/dashboard",
      }).then((res) => {
        if (res?.ok) {
          console.log(res, "res.....");
          toast.success(
            t("success", {
              name: t("signIn"),
            }),
            { position: "top-right" }
          );
          window.location.href = "/dashboard";
        } else {
          toast.error(
            t("error", { name: t("signIn") }),
            { position: "top-right" }
          );
        }
        setLoading(false);
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        if (error instanceof z.ZodError) {
          error.errors.forEach((err) => {
            if (err.path) {
              console.log(err.message);
            }
          });
          setLoading(false);
        }
      }
    }
  };

  return (
    <InnerLayout 
      title={t("loginTitle")} 
      linkText={t("loginLink")} 
      cta={t("loginRegisterNow")}
    >
      <Form
        submitHandler={submitHandler}
        username={t("username")}
        password={t("password")}
        isSubmitting={loading}
        signedIn={true}
        btnText={t("signIn")}
      />
    </InnerLayout>
  );
}
