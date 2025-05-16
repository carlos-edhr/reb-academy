import type { Metadata } from "next";
import localFont from "next/font/local";
import { Asap } from "next/font/google";
import "./globals.css";

const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "REB Academy ",
  description: "Rosarito Elite Basketball Academy's website.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${asap.className} antialiased`}>{children}</body>
    </html>
  );
}
