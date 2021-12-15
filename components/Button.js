import React from "react";

export default function Button({
  type,
  className,
  isDisabled,
  children,
  onClick,
  ariaLabel,
}) {
  return (
    <button
      type={isDisabled ? "button" : type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
