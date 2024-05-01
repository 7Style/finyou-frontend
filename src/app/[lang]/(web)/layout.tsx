import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from '@/layouts/web/header';
import Footer from '@/layouts/web/footer';


export default async function WebLayout({
    children,
    params: { lang },
  }: {
    children: React.ReactNode,
    params: { lang: Locale };
  }) {
    const { footer } = await getDictionary(lang);
    return (
      <>
        <Header />
        <main>
          {children}
        </main>
        <Footer footer={footer} />
      </>
    )
  }