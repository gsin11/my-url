import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

import Layout from "../components/Layout";

export default function History() {
  const [myList, setMyList] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const baseURL = process.env.baseUrl;

  async function getMyList(sessionId) {
    const results = await fetch(`/api/list/${sessionId}`);
    return results.json();
  }

  useEffect(() => {
    const existingVal = window.localStorage.getItem("uri:session_id");
    if (existingVal !== null) {
      setIsWaiting(true);
      const promise = getMyList(existingVal);
      promise.then((data) => {
        setMyList(data);
        setIsWaiting(false);
      });
    }
  }, []);

  return (
    <Layout>
      <h1 className="mb-5 dark:text-white text-black text-2xl">
        Welcome to MyShortURL
      </h1>
      <ul className="mb-5">
        <Link href="/">
          <a className="text-blue-600 dark:text-white">Home</a>
        </Link>
      </ul>
      {isWaiting && <p>Loading...</p>}
      {myList && (
        <ul>
          {myList.map((obj) => (
            <li key={obj._id}>
              <a
                className="text-blue-600"
                href={`${baseURL}${obj.short_uri}`}
                rel="noreferrer"
                target="_blank"
              >{`${baseURL}${obj.short_uri}`}</a>
            </li>
          ))}
        </ul>
      )}
      {myList.length === 0 && !isWaiting && <p>No results found!</p>}
    </Layout>
  );
}
