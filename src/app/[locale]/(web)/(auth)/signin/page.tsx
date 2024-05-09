import Link from "next/link"
import { useTranslations } from "next-intl";
import Form from "./form"

export default function Signin() {
    const t = useTranslations('page.auth');
    const buttonTrans = useTranslations('common.button');
    
    return (
        <div className="mx-auto grid md:w-[350px] gap-6">
            <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">{t("signIn.title")}</h1>
                <p className="text-balance text-muted-foreground">
                    {t("signIn.description")}
                </p>
            </div>
            
            <Form />
            <div className="mt-4 text-center text-sm">
                {t("signIn.noAccount")}{" "}
                <Link href="/signup" className="underline">
                    {buttonTrans("signIn")}
                </Link>
            </div>
        </div>
    )
}
