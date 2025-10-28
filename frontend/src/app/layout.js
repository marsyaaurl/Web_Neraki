import "./globals.css";
import { Poppins } from "next/font/google";
import { Rubik_Maps } from "next/font/google";

export const metadata = {
  title: "Neraki",
};

export const rubikMaps = Rubik_Maps({
  weight: '400',
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">{children}</body>
    </html>
  );
}
