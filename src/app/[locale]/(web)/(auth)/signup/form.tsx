"use client";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { redirect } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/register";
import { Loader2 } from "lucide-react";

interface IFormData {
  readonly fullName: string;
  readonly email: string;
  readonly companyName?: string;
  readonly password: string;
  readonly confirmPassword: string;
}

export default function Form() {
  const t = useTranslations("page.auth.common");
  const commonTrans = useTranslations("common");
  const { isPending, isSuccess, mutate, error, isError } = useRegister();

  const schema = useMemo(
    () =>
      z
        .object({
          fullName: z.string(),
          companyName: z.string().optional(),
          email: z
            .string()
            .email(t("invalidFormat", { name: t("workEmail") }))
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    getValues,
  } = useForm<IFormData>();

    const submitHandler = async (data: IFormData) => {
    try {
      await schema.parseAsync(data);

      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value)
      );

      mutate(filteredData as IFormData);

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
        error.errors.forEach((err) => {
          if (err.path) {
            setError(err.path[0] as keyof IFormData, {
              type: "manual",
              message: err.message,
            });
          }
        });
      }
    }
  };


  return (
    <form className="grid gap-6" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid gap-2">
          <Label htmlFor="fullName">
            {t("fullName")}
          </Label>
          <Input
            id="fullName"
            placeholder="maxrobinson"
            required
            {...register("fullName", {
              required: t("requiredError", { name: t("fullName") }),
            })}
          />
          {errors.fullName && (
            <p className="text-neutral-500 text-xs pt-1">
              {errors.fullName.message}
            </p>
          )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">
          {t("workEmail")}
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
          {...register("email", {
            required: t("requiredError", { name: t("workEmail") }),
          })}
        />
        {errors.email && (
          <p className="text-neutral-500 text-xs pt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">
          {t("password")}
        </Label>
        <Input
          id="password"
          type="password"
          required
          {...register("password", {
            required: t("requiredError", { name: t("password") }),
          })}
        />
        {errors.password && (
          <p className="text-neutral-500 text-xs pt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="confirmPassword">
          {t("confirmPassword")}
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          required
          {...register("confirmPassword", {
            required: t("requiredError", { name: t("confirmPassword") }),
          })}
        />
        {errors.confirmPassword && (
          <p className="text-neutral-500 text-xs pt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

   
      <Button variant={"secondary"} type="submit" className="mt-8 w-full bg-cyan-100 rounded-md text-white text-base font-medium border-0 hover:bg-teal-600" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t("createAccount")}
      </Button>
    </form>
  );
}
