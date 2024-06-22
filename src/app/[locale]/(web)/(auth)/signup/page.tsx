import Link from "next/link"
import { useTranslations } from "next-intl";
import Form from "./form";

export default function Signup() {
    const t = useTranslations('page.auth.signUp');
    const buttonTrans = useTranslations('common.button');
 
    return (
        <>
      <div className="grid gap-16">
        <div>
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p className="text-black text-base">{t("description")}</p>
        </div>
        <Form />
      </div>
      <div className="text-neutral-500 text-base font-medium">
        {t("link")}{" "}
        <Link href="/signup" className="text-teal-600 text-base font-medium">
          &nbsp; {t("login")}
        </Link>
      </div>
    </>
    )
}
