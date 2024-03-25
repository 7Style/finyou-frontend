import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function WebLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className={`${poppins.className} w-full px-8`}>
        {children}
      </div>
    )
  }