"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Check, ArrowRight, Phone, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PublishingPage() {
  return (
    <>
      <Navbar />



      <main className="min-h-screen bg-ink-900">
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
          </div>
          <div className="container-site relative">
            <PageHeader
              kicker="Publishing & Distribution"
              title="Your Name, Your ISBN,"
              highlight="Global Reach"
              description="We publish under your name with full ISBN registration and distribute to Amazon, Barnes & Noble, and 40,000+ retailers worldwide."
              align="center"
            />
          </div>
        </section>

        <section className="pb-20">
          <div className="container-site max-w-4xl">
            <Reveal>
              <div className="rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 md:p-12">
                <p className="text-lg leading-relaxed text-cream/90 md:text-xl">
                  Self-publishing doesn't mean going it alone. We handle every technical detail ISBN assignment, copyright registration, print-on-demand setup, and global distribution so your book is available in print, eBook, and audio formats across every major retailer and library network.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-gold-500/10 py-24">
          <div className="container-site">
            <SectionHeading kicker="What's Included" title="Everything You Need to" highlight="Succeed" align="center" />
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {[
                { title: "ISBN & Copyright", desc: "We register your ISBNs and handle copyright paperwork so your book is fully protected and cataloged." },
                { title: "Print-on-Demand", desc: "No inventory risk. Books are printed only when ordered, with global fulfillment handled automatically." },
                { title: "Global Distribution", desc: "Amazon, Barnes & Noble, Apple Books, Kobo, IngramSpark, and 40,000+ bookstores and libraries." },
                { title: "Retailer Optimization", desc: "We optimize your book's metadata, categories, and keywords for maximum discoverability." },
              ].map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="flex gap-5 rounded-xl border border-gold-500/10 bg-ink-800/20 p-6 transition-all hover:border-gold-500/20 hover:bg-ink-800/40">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/10 text-gold-400">
                      <Check size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-cream">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-site">
            <SectionHeading kicker="How It Works" title="A Refined Process, Four" highlight="Golden Steps" align="center" />
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "File Preparation", desc: "We format your final manuscript and cover files to meet each retailer's exact technical specifications." },
                { step: "02", title: "ISBN & Metadata", desc: "ISBNs are assigned, copyright is registered, and metadata is optimized for search and categorization." },
                { step: "03", title: "Platform Upload", desc: "Your book is uploaded to Amazon KDP, IngramSpark, and all selected distribution channels." },
                { step: "04", title: "Live & Verified", desc: "We verify live listings, confirm pricing, and ensure your book is available for purchase worldwide." },
              ].map((s, i) => (
                <Reveal key={s.step} delay={i * 0.1}>
                  <div className="relative rounded-2xl border border-gold-500/10 bg-ink-800/20 p-6 text-center transition-all hover:border-gold-500/20">
                    <span className="font-display text-4xl font-bold text-gold-500/20">{s.step}</span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-cream">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gold-500/10 py-24">
          <div className="container-site max-w-4xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-gold-500/15 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/5 p-8 text-center md:p-12">
                <Star size={32} className="mx-auto text-gold-400" fill="currentColor" />
                <h2 className="mt-6 font-display text-2xl font-bold text-cream md:text-3xl">Why This Service Matters</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                  Distribution is where most self-published authors get stuck. We navigate the technical requirements, retailer policies, and metadata optimization so your book doesn't just exist it sells. And because we publish under your name, you keep every right and every royalty.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="container-site max-w-3xl">
            <SectionHeading kicker="Common Questions" title="Everything You Need to" highlight="Know" align="center" />
            <div className="mt-12 space-y-6">
              {[
                { q: "Who owns the ISBN and publishing rights?", a: "You do, 100%. The ISBN is registered in your name, and the publishing imprint can be your own or ours your choice." },
                { q: "How long until my book is available for sale?", a: "Typically 2–3 weeks after final files are approved. eBooks usually go live faster than print editions." },
                { q: "Can I publish under my own imprint name?", a: "Yes. We can set up a custom imprint for you, or you can use NexGen as the publisher whichever you prefer." },
              ].map((faq, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="rounded-xl border border-gold-500/10 bg-ink-800/20 p-6 md:p-8">
                    <h3 className="font-display text-lg font-semibold text-cream">{faq.q}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-site">
            <Reveal>
              <div className="flex flex-col items-center text-center">
                <h2 className="font-display text-3xl font-bold text-cream md:text-5xl">
                  Publish Your Book <span className="text-gold-shimmer italic">Worldwide</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                  Book a free 30-minute consultation. We'll discuss your project, answer your questions, and give you an honest quote no pressure, no obligation.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                    Book a Free Consultation <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+18885550142" className="rounded-full border border-gold-500/20 px-8 py-3 text-sm font-medium text-gold-300 transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200 inline-flex items-center gap-2">
                    <Phone size={16} /> Call Us Now
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}