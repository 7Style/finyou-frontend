import { useState } from "react";
import Link from "next/link"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react"
import { useForgotPassword } from "@/hooks/forgot-password";
import { redirect } from "next/navigation";
import Form from "./form";
import { useTranslations } from "next-intl";



export default function ForgotPassword() {
    const t = useTranslations('page.auth.forgotPassword');
    const buttonTrans = useTranslations('common.button');
    return (
        <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">{t("title")}</h1>
                <p className="text-balance text-muted-foreground">
                    {t("description")}
                </p>
            </div>
            <Form />
            <div className="mt-4 text-center text-sm">
                {t("link")}{" "}
                <Link href="/signin" className="underline">
                    {buttonTrans("signIn")}
                </Link>
            </div>
        </div>
    )
}
