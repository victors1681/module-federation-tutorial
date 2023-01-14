import { Pacifico } from '@next/font/google';

//allow to init the MUI theme using the google font
export const nextFont = Pacifico({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
  });