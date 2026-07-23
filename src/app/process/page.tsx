"use client";

import { Search, PenTool, FileEdit, Palette, BookOpen, BarChart3, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { pageHeaders } from "@/lib/data";
import Contact from "@/components/sections/Contact";

/* ─────────── Types ─────────── */
interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

/* ─────────── Data ─────────── */
const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We start with a deep-dive consultation to understand your vision, target audience, and goals. Our team researches your genre, analyzes market trends, and crafts a custom publishing roadmap tailored to your success.",
    duration: "1–2 Weeks",
    deliverables: [
      "Genre & market analysis report",
      "Custom publishing roadmap",
      "Target audience profile",
      "Competitive positioning strategy",
    ],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Ghostwriting & Drafting",
    description:
      "Your matched ghostwriter conducts in-depth interviews and begins crafting your manuscript. We maintain open communication with weekly drafts and revisions until your voice shines through every page.",
    duration: "2–6 Months",
    deliverables: [
      "Complete first draft manuscript",
      "Weekly progress updates",
      "Unlimited revision rounds",
      "Full copyright transfer",
    ],
  },
  {
    number: "03",
    icon: FileEdit,
    title: "Professional Editing",
    description:
      "Our editorial team polishes your manuscript to perfection. From structural improvements to final proofreading, every word is refined to meet the highest publishing standards.",
    duration: "3–5 Weeks",
    deliverables: [
      "Developmentally edited manuscript",
      "Copy-edited final draft",
      "Proofread print-ready file",
      "Editorial feedback report",
    ],
  },
  {
    number: "04",
    icon: Palette,
    title: "Cover & Interior Design",
    description:
      "Our award-winning designers create a stunning cover that captures your book's essence. Interior formatting ensures a professional reading experience across all formats.",
    duration: "2–4 Weeks",
    deliverables: [
      "Custom cover design (print + digital)",
      "Professional interior layout",
      "3D mockups & promotional graphics",
      "Print-ready PDF files",
    ],
  },
  {
    number: "05",
    icon: BookOpen,
    title: "Publishing & Distribution",
    description:
      "We handle ISBN registration, metadata optimization, and global distribution setup. Your book becomes available on Amazon, Barnes & Noble, Apple Books, and 40,000+ retailers worldwide.",
    duration: "2–3 Weeks",
    deliverables: [
      "ISBN & barcode assignment",
      "Global distribution activation",
      "Amazon KDP & Ingram setup",
      "Author dashboard access",
    ],
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Marketing & Launch",
    description:
      "Our marketing team executes a strategic launch campaign including Amazon ads, social media promotion, email marketing, and PR outreach to maximize your book's visibility and sales.",
    duration: "Ongoing",
    deliverables: [
      "Amazon Advertising campaign",
      "Social media launch kit",
      "Email marketing sequence",
      "Monthly performance reports",
    ],
  },
];

/* ─────────── Schema: HowTo (Google shows step-by-step rich snippets) ─────────── */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Publish a Book with NexGen Book Publishers",
  description:
    "Our proven 6-step process takes your book from idea to global distribution. Discover how we help authors publish professional books that sell.",
  totalTime: "P4M", // 4 months typical
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "5000-25000",
  },
  supply: [
    { "@type": "HowToSupply", name: "Manuscript or Book Idea" },
    { "@type": "HowToSupply", name: "Author Bio & Photos" },
  ],
  tool: [
    { "@type": "HowToTool", name: "Ghostwriting Services" },
    { "@type": "HowToTool", name: "Professional Editing" },
    { "@type": "HowToTool", name: "Cover Design" },
    { "@type": "HowToTool", name: "ISBN & Distribution" },
  ],
  step: processSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
    url: `https://nexgenpublishers.com/process#step-${step.number}`,
    image: {
      "@type": "ImageObject",
      url: `https://nexgenpublishers.com/images/process/step-${step.number}.jpg`,
    },
  })),
};

/* ─────────── Schema: Service (for the overall publishing service) ─────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Book Publishing Process",
  provider: {
    "@type": "LocalBusiness",
    name: "NexGen Book Publishers",
    telephone: "+1-555-123-4567",
    email: "hello@nexgenpublishers.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Publishing Ave",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
  },
  serviceType: "Book Publishing",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Publishing Process Steps",
    itemListElement: processSteps.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: step.title,
          description: step.description,
        },
      },
    })),
  },
  url: "https://nexgenpublishers.com/process",
};

/* ─────────── Components ─────────── */

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={index * 0.1}>
      <div
        id={`step-${step.number}`}
        className="relative grid items-start gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-12"
      >
        {/* Left Content */}
        <div className={`${!isEven ? "lg:order-3 lg:text-right" : ""}`}>
          <div className={`inline-flex items-center gap-3 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/20 bg-gold-500/5">
              <Icon size={24} className="text-gold-400" />
            </div>
            <span className="font-display text-5xl font-bold text-gold-500/20">
              {step.number}
            </span>
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold text-cream sm:text-3xl text-gold-shimmer cursor-default">
            {step.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {step.description}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-500/15 bg-gold-500/5 px-4 py-1.5 text-xs font-medium text-gold-400">
            <ClockIcon size={12} />
            {step.duration}
          </div>
        </div>

        {/* Center Timeline */}
        <div className="hidden lg:flex lg:flex-col lg:items-center">
          <div className="h-full w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-transparent" />
          <div className="my-4 h-4 w-4 rounded-full border-2 border-gold-500/40 bg-ink-950" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-gold-500/20 to-gold-500/40" />
        </div>

        {/* Right Content - Deliverables */}
        <div className={`${!isEven ? "lg:order-1" : ""}`}>
          <div className="rounded-xl border border-gold-500/10 bg-ink-800/50 p-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              What You Get
            </h4>
            <ul className="mt-4 space-y-3">
              {step.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-cream/80">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ClockIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ─────────── Page ─────────── */
export default function ProcessPage() {
  const header = pageHeaders.process || {
    kicker: "Our Process",
    title: "From Idea to",
    highlight: "Published Book",
    description:
      "A proven 6-step journey that transforms your manuscript into a professionally published book available worldwide.",
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-ink-900 pb-20 pt-36 lg:pb-28 lg:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gold-500/3 blur-[120px]" />
            <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold-500/2 blur-[100px]" />
          </div>

          <div className="container-site relative">
            <PageHeader
              kicker={header.kicker}
              title={header.title}
              highlight={header.highlight}
              description={header.description}
            />

            {/* Stats bar */}
            <Reveal delay={0.2}>
              <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 lg:grid-cols-4">
                {[
                  { value: "6", label: "Steps to Publish" },
                  { value: "200+", label: "Books Published" },
                  { value: "4-6", label: "Months Average" },
                  { value: "100%", label: "Author Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-gold-shimmer">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Process Steps ── */}
        <section className="bg-ink-950 py-20 lg:py-28">
          <div className="container-site">
            <div className="space-y-20 lg:space-y-28">
              {processSteps.map((step, index) => (
                <ProcessStepCard key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
       <Contact />
      </main>
      <Footer />
    </>
  );
}