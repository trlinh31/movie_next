import type { Metadata } from "next";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phim 1080",
  description: "Xem Phim Online Chất Lượng Cao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
