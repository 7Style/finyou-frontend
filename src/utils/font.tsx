
import { Poppins, Montserrat } from 'next/font/google'

export const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable:"--font-poppins",
    fallback: ['Arial', 'sans-serif'],
});


export const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable:"--font-montserrat",
    fallback: ['Arial', 'sans-serif'],
});
