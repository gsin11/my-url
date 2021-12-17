import { useEffect, useState } from "react";
import Link from "next/link";
import { v4 } from "uuid";
import QRCode from "qrcode";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Icon from "../components/Icon";

const APP_BASE_URL = process.env.baseUrl;

export default function Home() {
  const [qrCode, setQrCode] = useState(null);
  const [encryptedUrl, setEncryptedUrl] = useState(null);

  useEffect(() => {
    const existingVal = window.localStorage.getItem("uri:session_id");
    if (existingVal === null) {
      window.localStorage.setItem("uri:session_id", v4());
    }
  }, []);

  function onSubmit(givenUrl) {
    try {
      fetch("/api/uri", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uri: givenUrl,
          session_id: window.localStorage.getItem("uri:session_id"),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const { short_uri } = data;
          const finalURL = APP_BASE_URL + short_uri;
          setEncryptedUrl(finalURL);

          QRCode.toDataURL(
            finalURL,
            { errorCorrectionLevel: "H", type: "image/webp", quality: 1 },
            (error, url) => {
              if (error) console.error(error);
              setQrCode(url);
            }
          );
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <h1 className="mb-5 dark:text-white text-black text-2xl">
        Welcome to MyShortURL
      </h1>
      <ul className="mb-3">
        <Link href="/history">
          <a className="text-blue-600 dark:text-white">History</a>
        </Link>
      </ul>
      <Card
        qrCodeUrl={qrCode}
        onSubmit={onSubmit}
        encryptedUrl={encryptedUrl}
      />
      <a
        href="https://github.com/gsin11/my-url"
        target="_blank"
        rel="noreferrer"
        className="mt-3"
        title="Source Code"
      >
        <Icon type="github" />
      </a>
    </Layout>
  );
}
