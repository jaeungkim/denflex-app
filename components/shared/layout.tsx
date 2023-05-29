import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fragment } from "react";

export const siteTitle = "DenFlex Website";

export default function Layout({
  children,
  maxWidth,
}: {
  children: React.ReactNode;
  blog?: boolean;
  home?: boolean;
  maxWidth?: boolean;
}) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Denflex website" />
        <meta property="og:image" content="https://www.deflex.com/api/og" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className="relative">
        <main
          className={`mx-auto ${
            maxWidth ? "mt-9 sm:px-8 max-w-7xl lg:px-8" : ""
          } `}
        >
          <div
            className={`relative ${
              maxWidth ? "px-4 sm:px-8 lg:px-12 max-w-4xl lg:max-w-6xl" : ""
            } mx-auto`}
          >
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}
