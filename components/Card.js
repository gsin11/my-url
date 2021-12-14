import React, { useState } from "react";
import Image from "next/image";

import Input from "./Input";
import Button from "./Button";
import Label from "./Label";
import Icon from "./Icon";

function validateUrl(url) {
  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);
  return !url.match(regex);
}

export default function Card({ onSubmit, qrCodeUrl, encryptedUrl }) {
  const [givenUrl, setGivenUrl] = useState("");
  const [invalidUrl, setInvalidUrl] = useState(false);

  function onSubmitLocal(e) {
    e.preventDefault();
    const result = validateUrl(givenUrl);

    if (result) {
      setInvalidUrl(true);
    } else {
      setInvalidUrl(false);
      onSubmit(givenUrl);
    }
  }

  return (
    <div className="w-96 mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={onSubmitLocal}>
          <div>
            <Label
              iconType="link"
              htmlFor="url"
              text="Enter a long URL to make a Small"
            />
            <Input
              type="text"
              name="url"
              id="url"
              placeholder="https://somewebsite.com"
              value={givenUrl}
              onChange={(e) => setGivenUrl(e.target.value)}
              isRequired
            />
            <p className="mt-5 text-center">
              <span
                className={`${
                  invalidUrl
                    ? `text-red-600 dark:text-red-500`
                    : `text-blue-600 dark:text-blue-500`
                }`}
              >
                {invalidUrl && "Invalid URL"}
                {encryptedUrl}
              </span>{" "}
              {encryptedUrl && (
                <Button
                  type="button"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  <Icon type="copy" w="w-6" h="h-6" />
                </Button>
              )}
            </p>
          </div>
          <Button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Make Small!
          </Button>
        </form>
        {qrCodeUrl && (
          <p className="mt-5 text-center">
            <Image src={qrCodeUrl} alt="QR code" width={148} height={148} />
          </p>
        )}
      </div>
      <ul className="mt-5 ml-5 text-white text-lg">
        <li className="mb-2">
          <Icon type="check" w="w-6" h="h-6" /> Free to use
        </li>
        <li className="mb-2">
          <Icon type="check" w="w-6" h="h-6" /> Easy Link Shortening
        </li>
        <li className="mb-2">
          <Icon type="check" w="w-6" h="h-6" /> Full Link History
        </li>
        <li className="mb-2">
          <Icon type="check" w="w-6" h="h-6" /> Auto delete in 30 days
        </li>
      </ul>
    </div>
  );
}
