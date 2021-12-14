import React from "react";
import Icon from "./Icon";

export default function Label({ iconType, text, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-base font-medium text-gray-900 dark:text-white block mb-2"
    >
      {iconType && <Icon type={iconType} />} {text}
    </label>
  );
}
