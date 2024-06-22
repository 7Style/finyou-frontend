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
          .email(t("invalidFormat", { name: t("workEmail") }))
          .min(1),
        password: z.string(),
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
    <form className="grid gap-6" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid gap-2">
        <Label htmlFor="email">{t("workEmail")}</Label>
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
          <p className="text-neutral-500 text-xs pt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="flex justify-between items-center pt-4 pb-6">
        <div className="inline-flex items-center">
          <label className="relative flex items-center rounded-sm cursor-pointer" htmlFor="check">
            <input type="checkbox"
              className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-600 checked:bg-teal-600 checked:before:bg-teal-600"
              id="check" />
            <span
              className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" strokeWidth="1">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </label>
          <label className="px-2 text-neutral-900 text-sm font-medium cursor-pointer select-none" htmlFor="check">
            {t("keepSignIn")}
          </label>
        </div> 
        <Link
            href="/forgot-password"
            className="text-neutral-500 text-sm font-medium"
          >
            {authTrans("forgotPassword.title")}?
          </Link>
      </div>
      <Button variant={"secondary"} type="submit" className="w-full bg-cyan-100 rounded-md text-white text-base font-medium border-0 hover:bg-teal-600" disabled={loading}>
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
