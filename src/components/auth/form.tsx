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
import Link from 'next/link';
import Checkbox from '../common/checkbox';

const Form: React.FC<FormProps> = ({
  submitHandler,
  name,
  username,
  surname,
  email,
  password,
  confirmPassword,
  isSubmitting,
  signedIn,
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
      {name && (
        <div className="grid gap-2">
          <Label htmlFor="name">{name}</Label>
          <Input
            id="name"
            placeholder="maxrobinson"
            required
            {...register("name", {
              required: t("requiredError", { name: name }),
            })}
          />
          {errors.name && (
            <p className="text-neutral-500 text-xs pt-1">{errors.name.message}</p>
          )}
        </div>
      )}
      {username && (
        <div className="grid gap-2">
          <Label htmlFor="username">{username}</Label>
          <Input
            id="username"
            placeholder="maxrobinson"
            required
            {...register("username", {
              required: t("requiredError", { name: username }),
            })}
          />
          {errors.username && (
            <p className="text-neutral-500 text-xs pt-1">{errors.username.message}</p>
          )}
        </div>
      )}

      {surname && (
        <div className="grid gap-2">
          <Label htmlFor="surname">{surname}</Label>
          <Input
            id="surname"
            placeholder="maxrobinson"
            required
            {...register("surname", {
              required: t("requiredError", { name: surname }),
            })}
          />
          {errors.surname && (
            <p className="text-neutral-500 text-xs pt-1">{errors.surname.message}</p>
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

      {
        signedIn && (
          <div className="flex justify-between items-center pt-4">
            <Checkbox label={t("keepSignedIn")} />
            <Link
              href="/forgot-password"
              className="text-neutral-500 text-sm font-medium"
            >
              {t("forgotTitle")}?
            </Link>
          </div>
        )
      }


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