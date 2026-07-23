/**
 * NexGen Book Publishers  central content store.
 * Edit this single file to update copy across every section and future pages.
 */

export const site = {
  name: "NexGen Book Publishers",
  shortName: "NexGen",
  tagline: "Where great stories become published legacies.",
  phone: "+1 (843) 410-9324",
  phoneHref: "tel:+18885550142",
  email: "hello@nexgenbookpublishers.com",
  address: "244 Fifth Avenue, Suite 1200, New York, NY 10001",
  hours: "Mon – Fri, 9:00 AM – 6:00 PM EST",
};

const navLinks = [
  { label: "Home", href: "/home" },        // ← Changed from "/"
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
export const heroStats = [
  { value: "500+", label: "Books Published" },
  { value: "120+", label: "Bestselling Titles" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12 yrs", label: "Of Publishing Craft" },
];

export const services = [
  {
    icon: "PenLine",
    title: "Ghostwriting",
    description:
      "Award-winning writers who capture your voice and turn your ideas, notes, or interviews into a manuscript worth signing.",
    points: ["Fiction & non-fiction", "Memoir & biography", "Full confidentiality"],
  },
  {
    icon: "BookOpenCheck",
    title: "Editing & Proofreading",
    description:
      "Developmental, line, and copy editing by career editors who refine structure, pacing, and prose without losing your style.",
    points: ["Developmental editing", "Line & copy editing", "Final proofread"],
  },
  {
    icon: "Palette",
    title: "Cover Design & Typesetting",
    description:
      "Bespoke covers and interior layouts engineered to stand out on a shelf  and in a thumbnail.",
    points: ["Custom cover art", "Interior typesetting", "eBook formatting"],
  },
  {
    icon: "Library",
    title: "Publishing & Distribution",
    description:
      "We publish under your name with ISBN registration and distribution to Amazon, Barnes & Noble, and 40,000+ retailers.",
    points: ["ISBN & copyright", "Print-on-demand", "Global distribution"],
  },
  {
    icon: "Megaphone",
    title: "Book Marketing & PR",
    description:
      "Launch campaigns, press outreach, and platform building that put your book in front of readers who will love it.",
    points: ["Launch strategy", "Media & press kits", "Amazon optimization"],
  },
  {
    icon: "Headphones",
    title: "Audiobook Production",
    description:
      "Studio-grade narration, engineering, and distribution to Audible, Apple Books, and Spotify.",
    points: ["Pro narrators", "Studio mastering", "ACX-ready delivery"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "A dedicated publishing consultant maps your goals, audience, and market position  then builds a roadmap for your book.",
  },
  {
    step: "02",
    title: "Writing & Development",
    description:
      "Your ghostwriter drafts chapter by chapter with your feedback at every milestone, until the manuscript is unmistakably yours.",
  },
  {
    step: "03",
    title: "Editing & Design",
    description:
      "Career editors polish the manuscript while our design studio crafts a cover and interior that command attention.",
  },
  {
    step: "04",
    title: "Publishing & Launch",
    description:
      "We handle ISBNs, distribution, and launch marketing  you keep 100% of your rights and royalties.",
  },
];

export const books = [
  {
    cover: "/images/book-gilded-hour.jpg",
    title: "The Gilded Hour",
    author: "Eleanor Vance",
    genre: "Historical Fiction",
    badge: "Bestseller",
  },
  {
    cover: "/images/book-silent-witness.jpg",
    title: "Silent Witness",
    author: "J.R. Calloway",
    genre: "Thriller",
    badge: "Editor's Pick",
  },
  {
    cover: "/images/book-last-letter.jpg",
    title: "The Last Letter",
    author: "Clara Bennett",
    genre: "Romance",
    badge: "New Release",
  },
  {
    cover: "/images/book-empire-mind.jpg",
    title: "Empire of Mind",
    author: "Marcus Reid",
    genre: "Business",
    badge: "Bestseller",
  },
  {
    cover: "/images/book-echoes.jpg",
    title: "Echoes of Tomorrow",
    author: "A.D. Sinclair",
    genre: "Science Fiction",
    badge: "Award Finalist",
  },
  {
    cover: "/images/book-silver-skies.jpg",
    title: "Beneath Silver Skies",
    author: "Amelia Hart",
    genre: "Memoir",
    badge: "New Release",
  },
];

export const whyUsPoints = [
  {
    title: "You keep 100% of rights & royalties",
    description: "Your name on the cover, your copyright, every dollar of royalty  always.",
  },
  {
    title: "Vetted, bestselling talent",
    description: "Writers and editors with credits at Big-5 houses and national bestseller lists.",
  },
  {
    title: "One dedicated project manager",
    description: "A single point of contact from first call to launch day. No hand-offs, no black box.",
  },
  {
    title: "On-time, milestone-driven delivery",
    description: "Every engagement runs on a signed timeline with review gates you control.",
  },
];

export const testimonials = [
  {
    quote:
      "I came in with 400 pages of scattered notes and left with a memoir I'm proud to sign. The team treated my story like their own.",
    name: "Dr. Helen Marsh",
    role: "Memoir Author",
    initials: "HM",
  },
  {
    quote:
      "My thriller hit three category bestseller lists in launch week. Their marketing plan was as strong as their editing.",
    name: "J.R. Calloway",
    role: "Author, Silent Witness",
    initials: "JC",
  },
  {
    quote:
      "As a CEO, I had no time to write  but I had a book in me. NexGen extracted it in interviews and wrote in my exact voice.",
    name: "Marcus Reid",
    role: "Author, Empire of Mind",
    initials: "MR",
  },
  {
    quote:
      "From cover design to distribution, everything felt like a five-star house. I never once chased them for an update.",
    name: "Amelia Hart",
    role: "Author, Beneath Silver Skies",
    initials: "AH",
  },
];

export const pricingPlans = [
  {
    name: "Manuscript Essentials",
    tagline: "For authors with a finished draft",
    price: "$1,495",
    period: "starting at",
    featured: false,
    features: [
      "Professional copy edit & proofread",
      "Custom cover design",
      "Interior typesetting & eBook format",
      "ISBN registration",
      "Amazon & Kindle publication",
      "2 revision rounds",
    ],
    cta: "Get a Quote",
  },
  {
    name: "Signature Publication",
    tagline: "Our most popular end-to-end package",
    price: "$4,995",
    period: "starting at",
    featured: true,
    features: [
      "Everything in Essentials",
      "Developmental editing",
      "Premium illustrated cover",
      "40,000+ retailer distribution",
      "Launch marketing campaign",
      "Press kit & author website copy",
      "Dedicated project manager",
    ],
    cta: "Start Your Book",
  },
  {
    name: "Legacy & Bestseller",
    tagline: "Ghostwritten, published & promoted",
    price: "Custom",
    period: "tailored engagement",
    featured: false,
    features: [
      "Everything in Signature",
      "Full ghostwriting by senior writer",
      "Audiobook production",
      "PR & media outreach",
      "Bestseller launch strategy",
      "12-month marketing support",
    ],
    cta: "Book a Consultation",
  },
];

export const faqs = [
  {
    question: "Who owns the rights to my book?",
    answer:
      "You do  completely. Every contract assigns 100% of copyright, royalties, and creative control to you. We work for hire; your name is the only one on the cover.",
  },
  {
    question: "How long does it take to publish a book?",
    answer:
      "Editing-to-publication typically runs 6–10 weeks. A full ghostwritten book usually takes 4–6 months depending on length and review speed. You'll receive a milestone timeline before we begin.",
  },
  {
    question: "Will anyone know I used a ghostwriter?",
    answer:
      "Never. Every engagement is protected by a mutual NDA. Ghostwriting is a standard practice throughout the publishing industry  your confidentiality is absolute.",
  },
  {
    question: "Where will my book be sold?",
    answer:
      "We distribute to Amazon, Barnes & Noble, Apple Books, Kobo, IngramSpark, and through Ingram's network of 40,000+ bookstores and libraries worldwide  in print, eBook, and audio.",
  },
  {
    question: "Can I be involved in the writing process?",
    answer:
      "As much as you want to be. Some clients review every chapter; others check in at milestones. Your project manager adapts the workflow to your schedule and style.",
  },
  {
    question: "What does it cost to publish with NexGen?",
    answer:
      "Editing-and-publishing packages start at $1,495; full ghostwriting engagements are quoted per project after a free consultation. Payment plans are available on every package.",
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Ghostwriting", href: "#services" },
      { label: "Editing & Proofreading", href: "#services" },
      { label: "Cover Design", href: "#services" },
      { label: "Publishing & Distribution", href: "#services" },
      { label: "Book Marketing", href: "#services" },
      { label: "Audiobook Production", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Process", href: "#process" },
      { label: "Published Books", href: "#books" },
      { label: "Why NexGen", href: "#why-us" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];
// export const pageHeaders = {
//   home: {
//     kicker: "Premium Publishing House",
//     title: "Where Stories Become",
//     highlight: "Timeless Books",
//     description: "From first draft to global distribution...",
//   },
//   services: {
//     kicker: "What We Do",
//     title: "Services Built for",
//     highlight: "Serious Authors",
//     description: "From the first word to the final sale...",
//   },
//   contact: {
//     kicker: "Get in Touch",
//     title: "Let's Start Your",
//     highlight: "Book Journey",
//     description: "Have a manuscript in mind?...",
//   },
//   about: {
//     kicker: "Who We Are",
//     title: "Crafting Literary",
//     highlight: "Excellence",
//     description: "Two decades of publishing expertise...",
//   },
//   portfolio: {
//     kicker: "Our Work",
//     title: "Books That",
//     highlight: "Inspire Readers",
//     description: "Explore our portfolio...",
//   },
//   pricing: {
//     kicker: "Investment",
//     title: "Publishing Plans for",
//     highlight: "Every Author",
//     description: "Transparent pricing...",
//   },
// } as const;

// Add this to your existing lib/data.ts file

/** Page header data for each route */
export const pageHeaders = {
  home: {
    kicker: "Premium Publishing House",
    title: "Where Stories Become",
    highlight: "Timeless Books",
    description:
      "From first draft to global distribution, we transform manuscripts into masterpieces that captivate readers worldwide.",
  },
  services: {
    kicker: "What We Do",
    title: "Services Built for",
    highlight: "Serious Authors",
    description:
      "From the first word to the final sale, we provide everything you need to publish a professional book that stands out in the market.",
  },
  process: {
    kicker: "Our Process",
    title: "From Idea to",
    highlight: "Published Book",
    description:
      "A proven 6-step journey that transforms your manuscript into a professionally published book available worldwide.",
  },
  portfolio: {
    kicker: "Our Work",
    title: "Books That",
    highlight: "Inspire Readers",
    description:
      "Explore our portfolio of published works  from memoirs to thrillers, each book crafted with precision and passion.",
  },
  pricing: {
    kicker: "Investment",
    title: "Publishing Plans for",
    highlight: "Every Author",
    description:
      "Transparent pricing with no hidden fees. Choose the package that fits your vision and budget.",
  },
  faq: {
    kicker: "Common Questions",
    title: "Everything You Need to",
    highlight: "Know",
    description:
      "Find answers to frequently asked questions about our publishing process, pricing, and services.",
  },
  contact: {
    kicker: "Get in Touch",
    title: "Let's Start Your",
    highlight: "Book Journey",
    description:
      "Have a manuscript in mind? Fill out the form below and our team will get back to you within 24 hours.",
  },
  about: {
    kicker: "Who We Are",
    title: "Crafting Literary",
    highlight: "Excellence",
    description:
      "Two decades of publishing expertise, hundreds of bestsellers, and a passion for bringing extraordinary stories to life.",
  },
} as const;