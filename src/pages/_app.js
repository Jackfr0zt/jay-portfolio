import '@/styles/globals.css'
import Head from 'next/head'
import { Montserrat } from "next/font/google"
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps}) {
  const router = useRouter();
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-montserrat bg-white dark:bg-[#1b1b1b] w-full max-h-full`}> {/* Apply Montserrat font globally */}  
        <NavBar />
        <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
   );
}
