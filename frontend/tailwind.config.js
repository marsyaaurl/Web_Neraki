/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFEB88",
        yellowHover: "#e6d47a",
        yellowActive: "FFF9DA",
        yellowLightHover: "#fffced",
        blue: "#374F86",
        blueHover: "#c7d1e7",
        blueLight: "#edf0f7",
        red: "#8c2b02",
        redHover: "#eac2b1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubikmaps: ["Rubik Maps", "display"],
      },
      backgroundImage: {
        bamboo: "url('/assets/images/bamboo.webp')",
      },
      scrollBehavior: ["responsive"],
    },
  },
  plugins: [],
};
