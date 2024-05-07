import Header from '@/layouts/web/header';
import Footer from '@/layouts/web/footer';

export default function WebLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </>
    )
  }