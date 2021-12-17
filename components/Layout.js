import React from "react";
import Head from "next/head";
import Icon from "./Icon";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>My Short URL - {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My Short URL" key="title" />
        <meta
          name="description"
          content="my-url.vercel.app is the original URL shortener that works with your long unmanageable URLs."
        />
        <meta
          name="keywords"
          content="shorten shorturl tinyurl url save share analyze"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className="flex justify-center place-items-center h-screen bg-slate-50 dark:bg-slate-600 flex-col px-5">
        {children}
        <a
          href="https://github.com/gsin11/my-url"
          target="_blank"
          rel="noreferrer"
          className="mt-3 "
          title="Source Code"
        >
          <Icon type="github" />
        </a>
      </div>
    </>
  );
}
