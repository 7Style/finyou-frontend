import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();

  return (
    <div className="flex lg:min-h-screen">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-col justify-center items-center w-7/12 bg-[#C3E6EB]  pl-32 pr-8 py-10">
        <div className="mr-auto mb-8">
          <Image src="/images/hero.png" alt="Image" width={588} height={538} className="block" />
        </div>
        <div className="text-start">
          <Image src="/images/finyou-findet.svg" alt="finyou-findet" width={255} height={65} />
          <h1 className="text-teal-950 text-5xl font-semibold leading-[6rem] my-4">{t("funding")}</h1>
          <h3 className="text-gray-800 text-3xl font-semibold leading-[2.8rem] mb-8">{t("supportedFundingAssistant")}</h3>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col justify-between items-center w-full lg:w-[39%] px-10 py-16 lg:pl-32 lg:pr-16 lg:py-16">
        {children}
      </div>
    </div>
  );
}
