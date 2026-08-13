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

import { orgSchema, localSchema, siteName } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nextgenbookpublishers.com"),
  title: {
    default: `${siteName} | Premium Ghostwriting & Publishing House`,
    template: `%s | ${siteName}`,
  },
  description:
    "A premium publishing house for authors who expect more. Ghostwriting, editing, design, publishing, and marketing under one roof. You keep 100% rights & royalties.",
  keywords: [
    "book publishers",
    "ghostwriting services",
    "self publishing",
    "book editing",
    "cover design",
    "audiobook production",
    "book marketing",
    "ISBN registration",
    "Columbia SC publishers",
    "publish my book",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nextgenbookpublishers.com",
    siteName,
    title: `${siteName} | Premium Ghostwriting & Publishing House`,
    description:
      "From first draft to global distribution. You keep every right and every royalty.",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Premium ghostwriting & publishing house. You keep 100% rights & royalties.",
  },
verification: {
  google: "U8umgHsbByMjxcJOCrT2vA9LZMwqe1syXf_Eyz7-OIo",
},
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
                <JsonLd data={[orgSchema, localSchema]} />

        {children}</body>
    </html>
  );
}
