import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { footerNav } from "@/constants/footer";

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-10 px-4 md:px-12">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base max-w-screen-2xl mx-auto">
        <Image src="/images/logo.svg" width={120} height={30} alt="logo" />
      </Link>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex flex-wrap gap-4 items-start justify-between py-5 max-w-screen-2xl mx-auto">
        {footerNav.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            {section.heading ? (
              <p className="text-xs font-bold pt-3">{t(section.heading)}</p>
            ) : (
              <p>&nbsp;</p>
            )}
            {section.links.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-sm hover:text-foreground">
                {t(link.text)}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <p>&nbsp;</p>
          <Button size="lg">{t("register")}</Button>
          <Button size="lg" variant="outline">
            {t("signIn")}
          </Button>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 py-3 max-w-screen-2xl mx-auto">
        <p className="text-xs">
          © Finyou {currentYear}. {t("copyright")}
        </p>
        <div className="flex text-xs items-center gap-3">
          <p>{t("followUs")}:</p>
          <SocialLink href={"https://www.facebook.com"} icon={<Facebook className="h-4 w-auto" />} />
          <SocialLink href={"https://instagram.com"} icon={<Instagram className="h-4 w-auto" />} />
          <SocialLink href={"https://twitter.com"} icon={<Twitter className="h-4 w-auto" />} />
          <SocialLink href={"https://linkedin.com"} icon={<Linkedin className="h-4 w-auto" />} />
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link href={href} target="_blank">
    {icon}
  </Link>
);

export default Footer;
