"use client";

import { useState } from "react";
import { ChevronDown, Phone, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { pageHeaders } from "@/lib/data";
import Contact from "@/components/sections/Contact";

/* ─────────── Types ─────────── */
interface FAQ {
  question: string;
  answer: string;
  category: string;
}

/* ─────────── Data ─────────── */
const faqs: FAQ[] = [
  {
    category: "Getting Started",
    question: "How do I get started with NexGen Book Publishers?",
    answer:
      "Getting started is simple. Fill out our contact form or call us directly to schedule a free 30-minute consultation. We'll discuss your book idea, timeline, and goals. After the call, we'll send you a custom proposal within 48 hours with recommended services and pricing.",
  },
  {
    category: "Getting Started",
    question: "Do I need a completed manuscript to work with you?",
    answer:
      "Not at all! We work with authors at every stage. Whether you have a rough idea, a partial draft, or a completed manuscript, we have services tailored to your needs. Our ghostwriting team can start from scratch, or our editors can polish your existing work.",
  },
  {
    category: "Getting Started",
    question: "What genres do you specialize in?",
    answer:
      "We publish across all major genres including fiction (thriller, romance, sci-fi, fantasy, literary), non-fiction (memoir, business, self-help, history), and children's books. Our team includes specialists in every genre to ensure authentic, high-quality work.",
  },
  {
    category: "Pricing & Payment",
    question: "How much does it cost to publish a book with NexGen?",
    answer:
      "Our publishing packages start at $2,499 for the Starter plan, which includes editing, cover design, and publishing. The Professional plan at $5,999 adds marketing and distribution. For full-service ghostwriting and marketing, our Elite plan is $12,499. We also offer custom quotes for specific needs.",
  },
  {
    category: "Pricing & Payment",
    question: "Do you offer payment plans?",
    answer:
      "Yes! We understand publishing is an investment. We offer flexible payment plans: 50% upfront and 50% upon completion, or monthly installments over 3-6 months with 0% interest. Contact us to discuss a plan that works for your budget.",
  },
  {
    category: "Pricing & Payment",
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all packages. If you're not satisfied with our work within the first 30 days, we'll refund your payment in full, no questions asked. After 30 days, refunds are prorated based on work completed.",
  },
  {
    category: "Ghostwriting",
    question: "How does the ghostwriting process work?",
    answer:
      "Our ghostwriting process begins with in-depth interviews (typically 6-10 sessions) to capture your voice, story, and vision. Your matched ghostwriter then creates a detailed outline for your approval. We deliver chapters weekly for your review and feedback. You have unlimited revisions until you're 100% satisfied. The entire process typically takes 2-6 months depending on length.",
  },
  {
    category: "Ghostwriting",
    question: "Will I own the copyright to my book?",
    answer:
      "Absolutely. You retain 100% copyright ownership of your book. Upon final payment, we transfer all rights to you. Your name appears as the sole author. We sign comprehensive NDA and copyright transfer agreements to protect your intellectual property completely.",
  },
  {
    category: "Ghostwriting",
    question: "How do you match me with a ghostwriter?",
    answer:
      "We match you based on genre expertise, writing style, and personality fit. Our team includes former journalists, published authors, and industry specialists. You'll review writing samples and have a chemistry call before committing. If the match isn't perfect, we'll find you a new writer at no extra cost.",
  },
  {
    category: "Publishing",
    question: "Where will my book be available for sale?",
    answer:
      "Your book will be available on Amazon (Kindle, paperback, hardcover), Barnes & Noble, Apple Books, Kobo, Google Play Books, and over 40,000 retailers worldwide through our IngramSpark distribution. We also set up your book for libraries and academic institutions.",
  },
  {
    category: "Publishing",
    question: "Do I keep 100% of my royalties?",
    answer:
      "Yes! Unlike traditional publishers who take 70-85% of royalties, you keep 100% of all royalties from book sales. We only charge our one-time publishing fee. You receive monthly royalty payments directly from Amazon, Ingram, and other distributors.",
  },
  {
    category: "Publishing",
    question: "How long does the publishing process take?",
    answer:
      "From manuscript to published book, the typical timeline is 4-6 months. This includes 1-2 weeks for discovery, 2-6 months for writing/editing (if ghostwriting), 3-5 weeks for editing, 2-4 weeks for design, and 2-3 weeks for publishing setup. Rush options are available for an additional fee.",
  },
  {
    category: "Marketing",
    question: "What marketing services do you offer?",
    answer:
      "Our marketing services include Amazon Advertising (AMS) campaign management, social media launch campaigns, email marketing sequences, book review outreach to 50+ reviewers, press release distribution, media pitching, author website design, and ongoing marketing consulting. We create a custom strategy based on your genre and goals.",
  },
  {
    category: "Marketing",
    question: "Will my book become a bestseller?",
    answer:
      "While we can't guarantee bestseller status (no one can), our marketing strategies have helped 35+ of our authors achieve bestseller status on Amazon and other platforms. We focus on building a strong launch, gathering reviews, and creating sustained visibility. Success depends on genre, market conditions, and marketing investment.",
  },
  {
    category: "Support",
    question: "What kind of support do I get during the process?",
    answer:
      "Every author gets a dedicated publishing manager as their single point of contact. You'll have weekly check-in calls, unlimited email support, and access to our author portal for real-time project updates. Our team is available Monday-Friday, 9 AM - 6 PM EST, with emergency support for launch periods.",
  },
  {
    category: "Support",
    question: "Can I see samples of your previous work?",
    answer:
      "Absolutely! Visit our Portfolio page to see covers, read excerpts, and explore our published books. We can also provide detailed case studies and connect you with past clients for references (with their permission). We're proud of our work and happy to share it.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

/* ─────────── Schema: FAQPage (Google shows expandable FAQ rich snippets) ─────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ─────────── Schema: LocalBusiness (reinforces brand in search) ─────────── */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NexGen Book Publishers",
  description:
    "Premium book publishing services including ghostwriting, editing, cover design, publishing, and marketing. Serving authors nationwide.",
  url: "https://nexgenpublishers.com/faq",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
};

/* ─────────── Components ─────────── */

function FAQItem({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="rounded-xl border border-gold-500/10 bg-ink-800/50 transition-all duration-300 hover:border-gold-500/20">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display text-base font-semibold text-cream sm:text-lg">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gold-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gold-500/10 px-6 pb-6 pt-4">
          <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────── Page ─────────── */
export default function FAQPage() {
  const header = pageHeaders.faq || {
    kicker: "Common Questions",
    title: "Everything You Need to",
    highlight: "Know",
    description:
      "Find answers to frequently asked questions about our publishing process, pricing, and services.",
  };

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs =
    activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
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

            {/* Category filters */}
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                {["All", ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(null);
                    }}
                    className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-gold-500 text-ink-900"
                        : "border border-gold-500/20 text-cream/70 hover:border-gold-500/40 hover:text-cream"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ List ── */}
        <section className="bg-ink-950 py-20 lg:py-28">
          <div className="container-site max-w-3xl">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.05}>
                  <FAQItem
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                </Reveal>
              ))}
            </div>

            {/* Still have questions */}
            {/* <Reveal delay={0.3}>
              <div className="mt-16 rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 text-center lg:p-12">
                <MessageCircle size={32} className="mx-auto text-gold-400" />
                <h3 className="mt-4 font-display text-xl font-semibold text-cream text-gold-shimmer">
                  Still Have Questions?
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                  Can't find the answer you're looking for? Our team is here to help. Reach out and
                  we'll get back to you within 24 hours.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href="/contact" className="btn-gold !px-7 !py-3 text-sm">
                    Contact Us
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cream/75 transition-colors hover:text-gold-300"
                  >
                    <Phone size={14} className="text-gold-400" />
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </Reveal> */}
          </div>
        </section>
                    <Contact />

      </main>
      <Footer />
    </>
  );
}