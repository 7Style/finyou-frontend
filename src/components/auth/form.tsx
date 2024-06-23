"use client";
import React from 'react';
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { FormProps, FormSchema } from "@/types/auth";
import { providers } from "@/constants/common";
import ButtonGroup from "@/components/common/button-group";

const Form: React.FC<FormProps> = ({
  submitHandler,
  fullName,
  email,
  password,
  confirmPassword,
  isSubmitting,
  btnText
}) => {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchema>();

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(submitHandler)}>
      {fullName && (
        <div className="grid gap-2">
          <Label htmlFor="fullName">{fullName}</Label>
          <Input
            id="fullName"
            placeholder="maxrobinson"
            required
            {...register("fullName", {
              required: t("requiredError", { name: fullName }),
            })}
          />
          {errors.fullName && (
            <p className="text-neutral-500 text-xs pt-1">{errors.fullName.message}</p>
          )}
        </div>
      )}

      {email && (
        <div className="grid gap-2">
          <Label htmlFor="email">{email}</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            {...register("email", {
              required: t("requiredError", { name: email }),
            })}
          />
          {errors.email && (
            <p className="text-neutral-500 text-xs pt-1">{errors.email.message}</p>
          )}
        </div>
      )}

      {password && (
        <div className="grid gap-2">
          <Label htmlFor="password">{password}</Label>
          <Input
            id="password"
            type="password"
            required
            {...register("password", {
              required: t("requiredError", { name: password }),
            })}
          />
          {errors.password && (
            <p className="text-neutral-500 text-xs pt-1">{errors.password.message}</p>
          )}
        </div>
      )}

      {confirmPassword && (
        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">{confirmPassword}</Label>
          <Input
            id="confirmPassword"
            type="password"
            required
            {...register("confirmPassword", {
              required: t("requiredError", { name: confirmPassword }),
            })}
          />
          {errors.confirmPassword && (
            <p className="text-neutral-500 text-xs pt-1">{errors.confirmPassword.message}</p>
          )}
        </div>
      )}

      <Button
        variant={"secondary"}
        type="submit"
        className="mt-8 w-full bg-cyan-100 rounded-md text-white text-base font-medium border-0 hover:bg-teal-600"
        disabled={isSubmitting}
      >
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {btnText}
      </Button>

      <ButtonGroup
        array={providers}
        variant="outline"
        className="w-full"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default Form;