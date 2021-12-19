import React from "react";
import Icon from "./Icon";

function Li({ text }) {
  return (
    <li className="mb-2">
      <Icon type="check" w="w-6" h="h-6" /> {text}
    </li>
  );
}

export default function List({ items }) {
  return (
    <ul className="mt-5 ml-5 dark:text-white text-lg">
      {items.map((obj, index) => (
        <Li key={index} text={obj} />
      ))}
    </ul>
  );
}
