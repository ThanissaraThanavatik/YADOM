import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "YaDOM - ยาดมสมุนไพร สดชื่น หายใจสะดวก",
  description: "ผลิตภัณฑ์ยาดมสมุนไพรคุณภาพสูง ที่คนไทยไว้วางใจ ผสมผสานสมุนไพรไทยแท้ 8 ชนิด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
