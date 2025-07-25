import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full z-0 bg-[#f5f5f5] p-8 sm:p-8 md:p-12 lg:p-16 xl:p-24 2xl:p-32 dark:bg-[#1b1b1b] ${className}`}
    >
      {children}
    </div>
  );
};
export async function getStaticProps() {
  return {
    props: {}, // no dynamic props yet
  };
}
export default Layout;