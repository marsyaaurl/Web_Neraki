import { SearchProvider } from "@/components/SearchContext";
import "./globals.css";
import { Poppins, Rubik_Maps } from "next/font/google";

export const metadata = {
  title: "Neraki",
};

const rubikMaps = Rubik_Maps({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-bug2n2BVFgWcQPC1t1MQU+6cBA+wN8O+3kYb+xPTX6sYBiEJk0GZtN+Y9hB8Z8DciE9mMBrXW/V4WJGcS5yNAA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={poppins.className}>
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  );
}
