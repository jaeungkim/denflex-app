import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fragment } from "react";

export const siteTitle = "DenFlex Website";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  blog?: boolean;
  home?: boolean;
}) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Denflex website" />
        {/* <meta property="og:image" content="https://www.jaeungkim.com/api/og" /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className="relative">
        <main className="sm:px-8 mt-9 mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12 max-w-2xl lg:max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}
