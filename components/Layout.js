import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Short URL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My Short URL" key="title" />
      </Head>
      <div className="flex justify-center place-items-center h-screen bg-slate-50 dark:bg-slate-600 flex-col px-5">
        {children}
      </div>
    </>
  );
}
