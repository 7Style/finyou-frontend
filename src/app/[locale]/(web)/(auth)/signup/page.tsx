import Link from "next/link"
import { useTranslations } from "next-intl";
import Form from "./form";

export default function Signup() {
    const t = useTranslations('page.auth.signUp');
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
