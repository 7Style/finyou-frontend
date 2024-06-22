import Link from "next/link";
import { useTranslations } from "next-intl";
import Form from "./form";

export default function Signin() {
  const t = useTranslations("page.auth.signIn");

  return (
    <>
      <div className="grid gap-16">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <Form />
      </div>
      <div className="text-neutral-500 text-base font-medium">
        {t("link")}{" "}
        <Link href="/signup" className="text-teal-600 text-base font-medium">
          &nbsp; {t("registerNow")}
        </Link>
      </div>
    </>
  );
}
