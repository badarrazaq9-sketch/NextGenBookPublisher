"use client";

import { Check, ArrowRight, PenTool, FileText, Palette, BookOpen, BarChart3, Sparkles, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { pageHeaders } from "@/lib/data";
import Contact from "@/components/sections/Contact";
import Image from "next/image";        // ← ADD THIS
import Link from "next/link";   

/* ─────────── Types ─────────── */
interface ServiceDetail {
  id: string;
    href: string;           // ← ADD THIS
  image: string;  
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

/* ─────────── Data ─────────── */
const services: ServiceDetail[] = [
  {
    id: "ghostwriting",
    icon: PenTool,
    title: "Ghostwriting",
     href: "/services/ghostwriting",   // ← ADD
    image: "/services/ghostwriting.png", // ← ADD
    shortDesc: "Your voice, our words  professionally written manuscripts that sound exactly like you.",
    fullDesc:
      "Our elite ghostwriting team transforms your ideas, expertise, and stories into compelling manuscripts. Whether it's a memoir, business book, or fiction novel, we capture your unique voice while delivering publishable quality prose. Every project includes unlimited revisions and full confidentiality.",
    features: [
      "Dedicated ghostwriter matched to your genre",
      "In-depth interviews & research",
      "Unlimited revisions until satisfied",
      "Full copyright transfer to you",
      "Manuscript ready for publishing",
    ],
  },
  {
    id: "editing",
    icon: FileText,
    title: "Book Editing",
     href: "/services/editing-proofreading",
    image: "/services/editing.png",
    shortDesc: "From developmental editing to proofreading  polish your manuscript to perfection.",
    fullDesc:
      "Our editorial team includes former acquisitions editors from major publishing houses. We offer three tiers: developmental editing (structure & story), copy editing (grammar & style), and proofreading (final polish). Each tier ensures your book meets industry standards.",
    features: [
      "Developmental, copy, and line editing",
      "Chicago Manual of Style compliance",
      "Track-changes with editor notes",
      "Two-pass review system",
      "Publication-ready formatting",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "Cover Design",
     href: "/services/cover-design-typesetting",
    image: "/services/design.png",
    shortDesc: "Stunning covers that sell  designed by award-winning cover artists.",
    fullDesc:
      "Your book cover is your #1 marketing tool. Our designers have created covers for New York Times bestsellers. We deliver print-ready files, eBook covers, 3D mockups, and social media banners  all designed to make readers stop scrolling and start buying.",
    features: [
      "Custom original artwork  no templates",
      "Print + eBook + audiobook covers",
      "3D mockups & promotional graphics",
      "Unlimited concept revisions",
      "Industry-standard file formats",
    ],
  },
  {
    id: "publishing",
    icon: BookOpen,
    title: "Publishing",
     href: "/services/publishing-distribution",
    image: "/services/publishing.png",
    shortDesc: "End-to-end publishing  from ISBN to global distribution on every major platform.",
    fullDesc:
      "We handle the entire publishing process: ISBN assignment, interior formatting, print-on-demand setup, and global distribution to Amazon, Barnes & Noble, Apple Books, Kobo, and 40,000+ retailers worldwide. You retain 100% of your royalties.",
    features: [
      "ISBN & barcode registration",
      "Professional interior formatting",
      "Print-on-demand & offset printing",
      "Global distribution (40,000+ retailers)",
      "100% royalty retention",
    ],
  },
  {
    id: "marketing",
    icon: BarChart3,
    title: "Book Marketing",
     href: "/services/book-marketing-pr",
    image: "/services/marketing.png",
    shortDesc: "Launch strategies that drive sales  from Amazon ads to PR campaigns.",
    fullDesc:
      "Writing the book is only half the battle. Our marketing team builds custom launch strategies including Amazon advertising, social media campaigns, email marketing, book reviews, and media outreach. We help your book find its audience and maximize sales.",
    features: [
      "Amazon Advertising (AMS) management",
      "Social media launch campaigns",
      "Email list building & newsletters",
      "Book review outreach (50+ reviewers)",
      "Press release & media pitching",
    ],
  },
  {
    id: "branding",
    icon: Sparkles,
    title: "Author Branding",
     href: "/services/audiobook-production", // or create /services/branding
    image: "/services/branding.png",
    shortDesc: "Build a brand that readers remember  websites, logos, and social presence.",
    fullDesc:
      "Successful authors are brands. We create cohesive author branding including custom websites, logos, social media kits, email signatures, and brand guidelines. Stand out in a crowded market with a professional presence that converts browsers into buyers.",
    features: [
      "Custom author website design",
      "Logo & visual identity system",
      "Social media branding kit",
      "Email signature & stationery",
      "Brand guidelines document",
    ],
  },
];

/* ─────────── Components ─────────── */

function ServiceCard({ service, index }: { service: ServiceDetail; index: number }) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <Reveal delay={index * 0.1}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image / Icon Placeholder */}
        <div className={`relative overflow-hidden rounded-2xl border border-gold-500/10 ${!isEven ? "lg:order-2" : ""}`}>
  <Link href={service.href} className="block relative aspect-[4/3]">
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-700 hover:scale-105"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
  </Link>
</div>

        {/* Content */}
        <div className={`${!isEven ? "lg:order-1" : ""}`}>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/20 bg-gold-500/5">
            <Icon size={22} className="text-gold-400" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl text-gold-shimmer cursor-default">
            {service.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {service.fullDesc}
          </p>

          <ul className="mt-6 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-cream/80">
                <Check size={16} className="mt-0.5 shrink-0 text-gold-400" />
                {feature}
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className="btn-gold mt-8 inline-flex items-center gap-2 !px-7 !py-3"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function ServiceQuickCard({ service }: { service: ServiceDetail }) {
  const Icon = service.icon;
  return (
    <a
      href={`#${service.id}`}
      className="group relative overflow-hidden rounded-xl border border-gold-500/10 bg-ink-800/50 p-6 transition-all duration-500 hover:border-gold-500/30 hover:bg-ink-800"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold-500/15 bg-gold-500/5 transition-all duration-300 group-hover:border-gold-500/30 group-hover:bg-gold-500/10">
        <Icon size={20} className="text-gold-400" />
      </div>
      <h4 className="font-display text-lg font-semibold text-cream text-gold-shimmer cursor-default">
        {service.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.shortDesc}
      </p>
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-gold-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
        Learn more <ArrowRight size={12} />
      </div>
    </a>
  );
}

/* ─────────── Page ─────────── */
export default function ServicesPage() {
  const header = pageHeaders.services;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-ink-900 pb-20 pt-36 lg:pb-28 lg:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gold-500/3 blur-[120px]" />
            <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold-500/2 blur-[100px]" />
          </div>

          <div className="container-site relative">
            {/* REUSABLE PAGE HEADER */}
            <PageHeader
              kicker={header.kicker}
              title={header.title}
              highlight={header.highlight}
              description={header.description}
            />


          </div>
        </section>

        {/* ── Detailed Services ── */}
        <section className="bg-ink-950 py-20 lg:py-28">
          <div className="container-site">
            <SectionHeading
              kicker="Our Expertise"
              title="Every Step of the Publishing"
              highlight="Journey"
              description="Each service is delivered by industry veterans who understand what it takes to create a book that sells."
            />

            <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        {/* <section className="relative overflow-hidden bg-ink-900 py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/4 blur-[150px]" />
          </div>
          <div className="container-site relative text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl text-gold-shimmer cursor-default">
                Ready to Bring Your Book to{" "}
                <span className="italic">Life?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">
                Schedule a free consultation and discover how we can transform your manuscript
                into a published masterpiece.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="/contact" className="btn-gold !px-8 !py-3.5 text-sm">
                  Book Free Consultation
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cream/75 transition-colors hover:text-gold-300"
                >
                  <Phone size={16} className="text-gold-400" />
                  Or call us directly
                </a>
              </div>
            </Reveal>
          </div>
        </section> */}
        <Contact/>
      </main>
      <Footer />
    </>
  );
}