import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { Links } from "@/types/links";
import { navItems } from "@/constants/header";


const Header: React.FC = () => {
  const t = useTranslations();

  const Drawer: React.FC<{ data: Links[] }> = ({ data }) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
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
            <Link href="/signin">
              <Button size="sm" className="font-poppins" variant="outline">
                {t("signIn")}
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="font-poppins">
                {t("register")}
              </Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 flex h-16 justify-between items-center gap-4 bg-white z-10 px-4 md:px-12 max-w-screen-2xl mx-auto">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Image src="/images/logo.svg" width={120} height={30} alt="logo" />
      </Link>
      <nav className="hidden flex-col gap-6 text-xs font-medium lg:flex md:flex-row md:w-2/3 md:justify-end md:items-center md:gap-5 md:text-sm lg:gap-6">
        {navItems.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-muted-foreground hover:text-foreground"
          >
            {t(link.text)}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex items-end md:ml-auto md:gap-2 lg:gap-4">
        <Link href="/signin">
          <Button size="xs" className="font-poppins" variant="outline">
            {t("signIn")}
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="xs" className="font-poppins">
            {t("register")}
          </Button>
        </Link>
      </div>
      <Drawer data={navItems} />
    </header>
  );
};

export default Header;
