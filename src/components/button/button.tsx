import React from "react";

export default function Button() {
  const variant = {
    primary: "bg-zinc-900 text-white",
    secondary: "bg-white text-zinc-950",
    tertiary: "bg-transparent text-zinc-950 border border-zinc-950",
  };
  const size = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-6 text-base",
    large: "py-4 px-8 text-lg",
  };
  const universal = "rounded-md font-semibold";
  return (
    <button
      onClick={(e) => console.log("fires")}
      className={`${variant.primary} ${size.medium} ${universal}`}
    >
      Your Text
    </button>
  );
}
