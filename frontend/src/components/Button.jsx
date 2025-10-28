"use client";

export default function Button({
  label,
  variant = "blue",
  className = "",
  ...props
}) {
  const variants = {
    blue: "bg-blue text-white hover:bg-blueHover hover:text-blue transition-colors duration-150",
    yellow:
      "bg-yellow text-black hover:bg-yellowHover hover:text-white transition-colors duration-150",
    red: "bg-red text-white hover:bg-redHover hover:text-red transition-colors duration-150",
  };

  const variantClass = variants[variant] || variants.blue;

  return (
    <button
      className={`text-lg font-semibold rounded-full items-center ${variantClass} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

