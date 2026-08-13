import { Metadata } from "next";

export const siteUrl = "https://www.nextgenbookpublishers.com";
export const siteName = "NexGen Book Publishers";
export const ogImage = `${siteUrl}/images/og-image.jpg`;

/* ─── Your real contact info ─── */
export const sitePhone = "+1-843-410-9324";        // Schema format (dashes)
export const sitePhoneDisplay = "+1 (843) 410-9324"; // Human format
export const siteEmail = "hello@nextgenbookpublishers.com";
export const siteAddress = {
  street: "1320 Main St, Suite 300",
  city: "Columbia",
  state: "SC",
  zip: "29201",
  country: "US",
};

type MetaPreset = {
  title: string;
  description: string;
  path: string;
};

export function makeMetadata({ title, description, path }: MetaPreset): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title: `${title} | ${siteName}`,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage],
    },
    other: {
      // Click-to-call support for mobile browsers
      "business:contact_data:phone_number": sitePhoneDisplay,
      "business:contact_data:email": siteEmail,
      "business:contact_data:street_address": siteAddress.street,
      "business:contact_data:locality": siteAddress.city,
      "business:contact_data:region": siteAddress.state,
      "business:contact_data:postal_code": siteAddress.zip,
      "business:contact_data:country_name": "USA",
    },
  };
}

/* ─── Page Presets ─── */
export const meta = {
  home: makeMetadata({
    title: "Premium Ghostwriting & Publishing House",
    description:
      "From first draft to global distribution. Ghostwriting, editing, design, publishing, and marketing — you keep 100% rights & royalties.",
    path: "/home",
  }),
  services: makeMetadata({
    title: "Publishing Services",
    description:
      "Six disciplines, one team. Ghostwriting, editing, cover design, publishing, marketing & audiobook production for serious authors.",
    path: "/services",
  }),
  ghostwriting: makeMetadata({
    title: "Ghostwriting Services",
    description:
      "Work one-on-one with award-winning ghostwriters. Fiction, memoir & business books written in your voice. 100% confidential.",
    path: "/services/ghostwriting",
  }),
  editing: makeMetadata({
    title: "Book Editing & Proofreading",
    description:
      "Developmental, line, and copy editing by career editors. Polish your manuscript to publishing perfection.",
    path: "/services/editing-proofreading",
  }),
  design: makeMetadata({
    title: "Cover Design & Typesetting",
    description:
      "Bespoke covers and interior layouts that stand out on shelves and in thumbnails. Custom artwork, no templates.",
    path: "/services/cover-design-typesetting",
  }),
  publishing: makeMetadata({
    title: "Publishing & Distribution",
    description:
      "ISBN registration, print-on-demand, and global distribution to 40,000+ retailers. Publish under your name.",
    path: "/services/publishing-distribution",
  }),
  marketing: makeMetadata({
    title: "Book Marketing & PR",
    description:
      "Launch campaigns, Amazon ads, press outreach, and platform building. Put your book in front of readers who will love it.",
    path: "/services/book-marketing-pr",
  }),
  audiobook: makeMetadata({
    title: "Audiobook Production",
    description:
      "Studio-grade narration and mastering for Audible, Apple Books & Spotify. Pro narrators matched to your genre.",
    path: "/services/audiobook-production",
  }),
  process: makeMetadata({
    title: "Our Publishing Process",
    description:
      "A proven 4-step journey from idea to published book. Transparent, milestone-driven, and built around your schedule.",
    path: "/process",
  }),
  portfolio: makeMetadata({
    title: "Published Books Portfolio",
    description:
      "Explore 500+ titles ghostwritten, designed, published, and launched by NexGen. From memoirs to thrillers.",
    path: "/portfolio",
  }),
  pricing: makeMetadata({
    title: "Publishing Packages & Pricing",
    description:
      "Transparent pricing from $1,495. Ghostwriting, editing, and publishing packages for every author budget.",
    path: "/pricing",
  }),
  faq: makeMetadata({
    title: "Frequently Asked Questions",
    description:
      "Answers about rights, timelines, ghostwriting confidentiality, distribution, and publishing costs.",
    path: "/faq",
  }),
  contact: makeMetadata({
    title: "Contact Us",
    description:
      "Book a free 30-minute consultation. Call, email, or fill out our form — we respond within one business day.",
    path: "/contact",
  }),
  whyUs: makeMetadata({
    title: "Why Choose NexGen",
    description:
      "Big-5 caliber team, 100% rights & royalties, dedicated project managers, and milestone-driven delivery.",
    path: "/why-us",
  }),
  privacy: makeMetadata({
    title: "Privacy Policy",
    description:
      "How NexGen Book Publishers collects, uses, and protects your personal and creative information.",
    path: "/privacy",
  }),
  terms: makeMetadata({
    title: "Terms of Service",
    description:
      "The rules of engagement for authors who choose NexGen. Payments, rights, confidentiality, and liability.",
    path: "/terms",
  }),
  cookies: makeMetadata({
    title: "Cookie Policy",
    description:
      "Transparency about cookies and tracking on the NexGen Book Publishers website.",
    path: "/cookies",
  }),
} as const;

/* ─── JSON-LD Schemas ─── */
export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/images/Nextgen.png`,
  sameAs: [
    "https://facebook.com/nexgenpublishers",
    "https://instagram.com/nexgenpublishers",
    "https://twitter.com/nexgenpublishers",
    "https://linkedin.com/company/nexgenpublishers",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: sitePhone,
    email: siteEmail,
    contactType: "sales",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  image: `${siteUrl}/images/Nextgen.png`,
  url: siteUrl,
  telephone: sitePhone,
  email: siteEmail,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteAddress.street,
    addressLocality: siteAddress.city,
    addressRegion: siteAddress.state,
    postalCode: siteAddress.zip,
    addressCountry: siteAddress.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0007,
    longitude: -81.0348,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$$",
};