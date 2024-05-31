"use client";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { redirect } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/register";
import { ButtonGroup } from "@/components/common/button-group";
import { providers } from "@/constants/common";

interface FormData {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Form() {
  const t = useTranslations("page.auth.common");
  const commonTrans = useTranslations("common");

  const { isPending, isSuccess, mutate, isError, error } = useRegister();
  const schema = useMemo(
    () =>
      z
        .object({
          fullname: z.string(),
          username: z.string(),
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
            .min(8, t("passwordMin", { min: 8 })),
          confirmPassword: z.string(),
        })
        .refine(
          (values) => {
            return values.password === values.confirmPassword;
          },
          {
            message: t("matchPassword"),
            path: ["confirmPassword"],
          }
        ),
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
      await schema.parse(data);
      mutate({
        email: data.email,
        password: data.password,
        fullname: data.fullname,
        role: 2,
        username: data.username,
        phoneNumber: "92334444",
        university: {
          id: 1,
        },
      });
      if (isSuccess) {
        toast.success(
          commonTrans("toast.success", {
            name: commonTrans("button.register"),
          }),
          { position: "top-right" }
        );
        redirect("/signin");
      } else {
        error?.message
          ? toast.error(error?.message, { position: "top-right" })
          : toast.error(
              commonTrans("toast.error", {
                name: commonTrans("button.register"),
              }),
              { position: "top-right" }
            );
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
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="full-name">{t("fullName")}</Label>
          <Input
            id="full-name"
            placeholder="Max"
            required
            {...register("fullname", {
              required: t("requiredError", { name: t("fullName") }),
            })}
          />
          {errors.fullname && (
            <p className="text-red-500 pt-1 text-xs">
              {errors.fullname.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="user-name">{t("username")}</Label>
          <Input
            id="username"
            placeholder="Robinson"
            required
            {...register("username", {
              required: t("requiredError", { name: t("username") }),
            })}
          />
          {errors.username && (
            <p className="text-red-500 pt-1 text-xs">
              {errors.username.message}
            </p>
          )}
        </div>
      </div>
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
        <Label htmlFor="password">{t("password")}</Label>
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

      <div className="grid gap-2">
        <Label htmlFor="confirmPassword">{t("confirmPassword")}</Label>
        <Input
          id="confirmPassword"
          type="password"
          required
          {...register("confirmPassword", {
            required: t("requiredError", { name: t("confirmPassword") }),
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 pt-1 text-xs">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t("createAccount")}
      </Button>

      <ButtonGroup
        array={providers}
        variant="outline"
        className="w-full"
        disabled={isPending}
      />
    </form>
  );
}
