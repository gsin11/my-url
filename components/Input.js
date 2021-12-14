import React from "react";

export default function Input({
  type,
  id,
  placeholder,
  name,
  isRequired,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      placeholder={placeholder}
      required={isRequired}
      onChange={onChange}
    />
  );
}
