import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexGen Book Publishers — Premium Ghostwriting & Publishing House",
  description:
    "NexGen Book Publishers turns your ideas into beautifully published books. Ghostwriting, editing, cover design, publishing, and book marketing — handled end to end by industry veterans.",
  keywords: [
    "book publishing",
    "ghostwriting",
    "book editing",
    "cover design",
    "book marketing",
    "NexGen Book Publishers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
