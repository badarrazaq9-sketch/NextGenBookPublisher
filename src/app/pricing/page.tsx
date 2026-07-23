"use client";

import { Check, X, ArrowRight, Phone, Sparkles, Zap, Crown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { pageHeaders } from "@/lib/data";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";

/* ─────────── Types ─────────── */
interface PricingPlan {
  id: string;
  name: string;
  icon: React.ElementType;
  price: string;
  priceNote: string;
  description: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

/* ─────────── Data ─────────── */
const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    icon: Sparkles,
    price: "$2,499",
    priceNote: "One-time payment",
    description: "Perfect for authors with a completed manuscript ready for professional publishing.",
    features: [
      { text: "Professional copy editing", included: true },
      { text: "Custom cover design", included: true },
      { text: "ISBN & barcode registration", included: true },
      { text: "Print-on-demand setup", included: true },
      { text: "Amazon KDP publishing", included: true },
      { text: "eBook formatting", included: true },
      { text: "Ghostwriting services", included: false },
      { text: "Marketing campaign", included: false },
      { text: "Author website", included: false },
      { text: "PR & media outreach", included: false },
    ],
    cta: "Get Started",
    ctaLink: "/contact?plan=starter",
  },
  {
    id: "professional",
    name: "Professional",
    icon: Zap,
    price: "$5,999",
    priceNote: "One-time payment",
    description: "Our most popular choice. Complete publishing with marketing to launch your book successfully.",
    popular: true,
    features: [
      { text: "Everything in Starter, plus:", included: true },
      { text: "Developmental editing", included: true },
      { text: "Advanced cover design + 3D mockups", included: true },
      { text: "Global distribution (40,000+ retailers)", included: true },
      { text: "Amazon Advertising setup", included: true },
      { text: "Social media launch kit", included: true },
      { text: "Book review outreach (25 reviewers)", included: true },
      { text: "Press release distribution", included: true },
      { text: "Ghostwriting services", included: false },
      { text: "Author branding & website", included: false },
    ],
    cta: "Most Popular  Choose Plan",
    ctaLink: "/contact?plan=professional",
  },
  {
    id: "elite",
    name: "Elite",
    icon: Crown,
    price: "$12,499",
    priceNote: "One-time payment",
    description: "The complete author transformation. From idea to bestseller with full-service support.",
    features: [
      { text: "Everything in Professional, plus:", included: true },
      { text: "Full ghostwriting (up to 80,000 words)", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "Author branding & custom website", included: true },
      { text: "Advanced marketing campaign (3 months)", included: true },
      { text: "Book review outreach (50+ reviewers)", included: true },
      { text: "Media pitching & interviews", included: true },
      { text: "Book trailer video", included: true },
      { text: "Audiobook production guidance", included: true },
      { text: "Dedicated publishing manager", included: true },
    ],
    cta: "Go Elite",
    ctaLink: "/contact?plan=elite",
  },
];

const addOns = [
  { name: "Additional 10,000 words", price: "$499" },
  { name: "Audiobook production", price: "$1,299" },
  { name: "Author website (5 pages)", price: "$1,999" },
  { name: "Extended marketing (3 months)", price: "$2,499" },
  { name: "Book trailer video", price: "$899" },
  { name: "Extra cover concept designs", price: "$299" },
];

/* ─────────── Schema: Product + Offer + PriceSpecification ─────────── */
const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Book Publishing Packages",
  description:
    "Professional book publishing packages from $2,499. Ghostwriting, editing, design, publishing & marketing  all in one.",
  brand: {
    "@type": "Brand",
    name: "NexGen Book Publishers",
  },
  offers: pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.description,
    url: `https://nexgenpublishers.com/contact?plan=${plan.id}`,
    price: plan.price.replace(/[$,]/g, ""),
    priceCurrency: "USD",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "LocalBusiness",
      name: "NexGen Book Publishers",
      telephone: "+1-555-123-4567",
    },
    itemOffered: {
      "@type": "Service",
      name: `${plan.name} Publishing Package`,
      description: plan.description,
    },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2847",
    bestRating: "5",
  },
};

/* ─────────── Schema: PriceSpecification for each plan ─────────── */
const priceSpecSchema = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  priceRange: "$2,499 - $12,499",
  minPrice: "2499",
  maxPrice: "12499",
  priceCurrency: "USD",
  eligibleRegion: {
    "@type": "Country",
    name: "United States",
  },
};

/* ─────────── Components ─────────── */

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const Icon = plan.icon;

  return (
    <Reveal delay={index * 0.15}>
      <div
        className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-500 ${
          plan.popular
            ? "border-gold-500/30 bg-ink-800/80 shadow-[0_0_60px_-15px_rgba(212,175,55,0.15)]"
            : "border-gold-500/10 bg-ink-800/50 hover:border-gold-500/20"
        }`}
      >
        {plan.popular && (
          <div className="absolute -right-12 top-6 rotate-45 bg-gold-500 px-12 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900">
            Best Value
          </div>
        )}

        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/5">
          <Icon size={22} className="text-gold-400" />
        </div>

        <h3 className="font-display text-2xl font-semibold text-cream text-gold-shimmer cursor-default">
          {plan.name}
        </h3>
        <p className="mt-2 text-sm text-muted">{plan.description}</p>

        <div className="mt-6">
          <span className="font-display text-4xl font-bold text-gold-shimmer">{plan.price}</span>
          <span className="ml-2 text-xs text-muted">{plan.priceNote}</span>
        </div>

        <ul className="mt-8 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-start gap-3 text-sm">
              {feature.included ? (
                <Check size={16} className="mt-0.5 shrink-0 text-gold-400" />
              ) : (
                <X size={16} className="mt-0.5 shrink-0 text-cream/20" />
              )}
              <span className={feature.included ? "text-cream/80" : "text-cream/30"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={plan.ctaLink}
          className={`btn-gold mt-8 w-full text-center ${
            plan.popular ? "!bg-gold-500 !text-ink-900" : ""
          }`}
        >
          {plan.cta}
          <ArrowRight size={14} />
        </a>
      </div>
    </Reveal>
  );
}

/* ─────────── Page ─────────── */
export default function PricingPage() {
  const header = pageHeaders.pricing || {
    kicker: "Investment",
    title: "Publishing Plans for",
    highlight: "Every Author",
    description:
      "Transparent pricing with no hidden fees. Choose the package that fits your vision and budget.",
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSpecSchema) }}
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

            {/* Trust badges */}
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-gold-400" /> No hidden fees
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-gold-400" /> 100% royalty retention
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-gold-400" /> Payment plans available
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-gold-400" /> 30-day money-back guarantee
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Pricing Cards ── */}
        <section className="bg-ink-950 py-20 lg:py-28">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={plan.id} plan={plan} index={index} />
              ))}
            </div>

            {/* Add-ons */}
            <Reveal delay={0.3}>
              <div className="mt-20 rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 lg:p-10">
                <h3 className="text-center font-display text-xl font-semibold text-cream text-gold-shimmer">
                  Popular Add-Ons
                </h3>
                <p className="mt-2 text-center text-sm text-muted">
                  Customize any package with these additional services
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {addOns.map((addon) => (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between rounded-xl border border-gold-500/10 bg-ink-900/50 px-5 py-4"
                    >
                      <span className="text-sm text-cream/80">{addon.name}</span>
                      <span className="font-display text-sm font-semibold text-gold-400">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA Banner ── */}
       <WhyUs />
       <Contact />
      </main>
      <Footer />
    </>
  );
}