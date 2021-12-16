import React from "react";
import Icon from "./Icon";

export default function Input({
  type,
  id,
  placeholder,
  name,
  isRequired,
  value,
  onChange,
  isError,
  errorMessage,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        className={`bg-gray-50 border ${
          isError ? `border-red-600` : `border-gray-300`
        } text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
        autoComplete="off"
      />
      {isError && (
        <p className="text-red-600 mt-1">
          <Icon type="ban" w="w-6" h="h-6" /> {errorMessage}
        </p>
      )}
    </>
  );
}
