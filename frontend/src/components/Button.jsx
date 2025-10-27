"use client";

export default function Button({
  label,
  variant,
  size,
  className = "",
  ...props
}) {
  const variants = {
    blue: " bg-blue text-white hover:bg-blueHover hover:text-blue transition-color duration-150",
    yellow: " bg-yellow text-black hover:bg-yellowHover hover:text-white",
    red: " bg-red text-white transition-color duration-150 hover:bg-redHover hover:text-red",
  };

  const sizes = {};

  const variantClass = variants[variant];
  const sizeClass = sizes[size];

  return (
    <button
      className={` text-lg font-semibold items-center rounded-full ${variantClass} ${className}`}
    >
      {label}
    </button>
  );
}
