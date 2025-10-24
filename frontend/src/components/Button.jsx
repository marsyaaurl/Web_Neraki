"use client";

export default function Button({ label, variant, size, ...props }) {
  const variants = {
    blue: " bg-blue text-white hover:bg-blueHover hover:text-blue ",
    yellow: " bg-yellow text-black hover:bg-yellowHover hover:text-white",
    red: " bg-red text-white hover:bg-redHover hover:text-black",
  };

  const sizes = {
    sm: "w-full lg:w-1/12",
    md: "w-full lg:w-4/12",
    lg: "",
    xl: "",
  };

  const variantClass = variants[variant];
  const sizeClass = sizes[size];

  return (
    <button
      className={` text-lg font-semibold items-center py-2 rounded-full ${variantClass} ${sizeClass}`}
    >
      {label}
    </button>
  );
}
