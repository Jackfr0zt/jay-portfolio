import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg font-montserrat dark:text-[#f5f5f5] dark:border-[#f5f5f5]">
      <Layout className="py-6 flex flex-col md:flex-row items-center justify-between text-center gap-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        
        <div>
          Built with
          <span className="text-[#B63E96] text-2xl dark:text-[#58E6D9] px-1">&#9825;</span>
          by&nbsp;
          <Link href="/" className="underline underline-offset-2" target="_blank">
            Jay
          </Link>
        </div>
        
        <Link href="/" target="_blank" className="underline underline-offset-2">
          Say Hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;