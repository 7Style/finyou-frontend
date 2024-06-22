import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("page.auth.common");
  const transHome = useTranslations('page.home');

  return (
    <div className="w-full flex min-h-screen">
      <div className="hidden lg:block w-[61%] bg-[#C3E6EB] pl-32 pr-4 py-10">
        <div className="grid gap-12">
          <Image
            src="/images/hero.png"
            alt="Image"
            width="588"
            height="538"
            className="block"
          />
          <div className="grid">
            <Image src="/images/finyou-findet.svg" alt="finyou-findet" width={255} height={65} />
            <h1 className="text-teal-950 text-[52px] font-semibold leading-[109.12px]">{transHome("funding")}</h1>
            <h3 className="text-gray-800 text-[32px] font-medium leading-[44.80px]">{transHome("supportedFundingAssistant")}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center pl-32 pr-16 py-16">{children}</div>
    </div>
  );
}
