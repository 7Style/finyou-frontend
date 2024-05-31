import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";

interface LinkData {
  text: string;
  href: string;
}

function Drawer({ data }: { data: LinkData[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Image src="/images/logo.svg" width={120} height={30} alt="logo" />
          </Link>
          {data.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.text}
            </Link>
          ))}
          <div className="flex flex-col gap-3">
            <Button size={"sm"} variant={"outline"}>
              Anmelden
            </Button>
            <Button size={"sm"}>Registrieren</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function Header() {
  const navigationTrans = useTranslations("navigation");
  const buttonTrans = useTranslations("common.button");

  const linksData: LinkData[] = [
    { text: navigationTrans("funding"), href: "#" },
    { text: navigationTrans("search"), href: "#" },
    { text: navigationTrans("application"), href: "#" },
    { text: navigationTrans("mixFinancing"), href: "#" },
    { text: navigationTrans("network"), href: "#" },
    { text: navigationTrans("prices"), href: "#" },
  ];
  return (
    <header className="sticky top-0 flex h-16 justify-between items-center gap-4 bg-white z-10 px-4 md:px-12 max-w-screen-2xl mx-auto">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image src="/images/logo.svg" width={120} height={30} alt="logo" />
      </Link>
      <nav className="hidden flex-col gap-6 text-xs font-medium lg:flex md:flex-row md:w-2/3 md:justify-end md:items-center md:gap-5 md:text-sm lg:gap-6">
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="after:content-[''] after:transition-opacity after:opacity-0 after:block after:h-0.5 after:rounded after:w-1/2 after:absolute after:bg-cyan-500 after:left-1/2 after:-translate-x-1/2 relative text-muted-foreground transition-colors hover:text-foreground hover:after:opacity-100"
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-end md:ml-auto md:gap-2 lg:gap-4">
        <Button size={"sm"} variant={"outline"}>
          <Link href="/signin">{buttonTrans("signIn")}</Link>
        </Button>
        <Button size={"sm"}>
          <Link href="/signup">{buttonTrans("register")}</Link>
        </Button>
      </div>

      <Drawer data={linksData} />
    </header>
  );
}
