"use client";

import { Search } from "lucide-react";

export default function Searchbar({ variant, size, ...props }) {
  const variants = {
    blue: "border-blue",
  };

  const sizes = {
    sm: "w-full lg:w-2/6",
    md: "w-full lg:w-3/6",
  };

  const variantClass = variants[variant];
  const sizeClass = sizes[size];

  return (
    <form
      className={`flex items-center gap-3 border-2 rounded-full px-4 py-3 bg-white ${variantClass} ${sizeClass}`}
      {...props}
    >
      <Search size={24} color="#374F86" />
      <input
        type="text"
        placeholder="Search"
        className="  outline-none bg-transparent placeholder-blue text-lg w-full"
      />
    </form>
  );
}
