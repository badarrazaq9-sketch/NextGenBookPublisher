"use client";

import Script from "next/script";

type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: Props) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}