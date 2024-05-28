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
import { companyNameSuggestions } from "@/constants/sign-up";

interface IFormData {
  readonly fullname: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly confirmPassword: string;
  readonly companyName?: string;
  readonly corporateEmail?: string;
  readonly position?: string;
}

export default function Form() {
  const t = useTranslations("page.auth.common");
  const authTrans = useTranslations("page.auth");
  const commonTrans = useTranslations("common");

  const { isPending, isSuccess, mutate, error, isError } = useRegister();

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
          companyName: z.string().optional(),
          corporateEmail: z.string().optional(),
          position: z.string().optional(),
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
    <form className="grid gap-4" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="full-name">
            {t("fullName")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="full-name"
            placeholder="Max Robinson"
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
          <Label htmlFor="user-name">
            {t("username")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="username"
            placeholder="maxrobinson"
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
        <Label htmlFor="email">
          {t("email")} <span className="text-red-500">*</span>
        </Label>
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
        <Label htmlFor="password">
          {t("password")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="password"
          type="password"
          placeholder={"**********"}
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
        <Label htmlFor="confirmPassword">
          {t("confirmPassword")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder={"**********"}
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

      <div className="grid gap-2">
        <Label htmlFor="companyName">{authTrans("signUp.companyName")}</Label>
        <Input
          id="companyName"
          placeholder={authTrans("signUp.companyName")}
          {...register("companyName")}
          onInput={(e) => {
            setValue("companyName", e.currentTarget.value);
          }}
          list="company-suggestions"
        />
        <datalist id="company-suggestions">
          {companyNameSuggestions.map((suggestion) => (
            <option key={suggestion.id} value={suggestion.name} />
          ))}
        </datalist>
        {errors.companyName && (
          <p className="text-red-500 pt-1 text-xs">
            {errors.companyName.message}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="corporateEmail">{t("corporateEmail")}</Label>
        <Input
          id="corporateEmail"
          type="email"
          placeholder={t("corporateEmail")}
          {...register("corporateEmail")}
        />
        {errors.corporateEmail && (
          <p className="text-red-500 pt-1 text-xs">
            {errors.corporateEmail.message}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="position">{authTrans("signUp.position")}</Label>
        <Input
          id="position"
          placeholder={authTrans("signUp.position")}
          {...register("position")}
        />
        {errors.position && (
          <p className="text-red-500 pt-1 text-xs">{errors.position.message}</p>
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
