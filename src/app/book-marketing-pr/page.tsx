"use client";


import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Check, ArrowRight, Phone, Star } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function MarketingPage() {
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
              kicker="Book Marketing & PR"
              title="Launch Campaigns That"
              highlight="Hit Bestseller Lists"
              description="Strategic marketing, press outreach, and platform building that put your book in front of the readers who will love it most."
              align="center"
            />
          </div>
        </section>

        <section className="pb-20">
          <div className="container-site max-w-4xl">
            <Reveal>
              <div className="rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 md:p-12">
                <p className="text-lg leading-relaxed text-cream/90 md:text-xl">
                  Writing the book is only half the battle. Our marketing team builds launch campaigns that generate buzz, secure media coverage, and drive sales. From Amazon optimization to press kit distribution, we create the momentum your book needs to succeed in a crowded market.
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
                { title: "Launch Strategy", desc: "A timed, multi-channel launch plan designed to maximize visibility and sales velocity in your first 30 days." },
                { title: "Media & Press Kits", desc: "Professional press releases, author bios, and media pitches sent to journalists, bloggers, and podcasters." },
                { title: "Amazon Optimization", desc: "A+ content, keyword research, category selection, and ad campaign setup to dominate the world's largest bookstore." },
                { title: "Author Platform Building", desc: "Social media strategy, newsletter setup, and website copy that turns readers into lifelong fans." },
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
                { step: "01", title: "Market Analysis", desc: "We analyze your genre, competitors, and target audience to build a data-driven marketing strategy." },
                { step: "02", title: "Asset Creation", desc: "Press kits, social graphics, email sequences, and Amazon A+ content are created and approved by you." },
                { step: "03", title: "Pre-Launch Buzz", desc: "ARC distribution, influencer outreach, and social teasers build anticipation before release day." },
                { step: "04", title: "Launch & Optimize", desc: "The campaign goes live. We monitor performance, adjust ads, and pursue media opportunities in real time." },
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
                  A book without marketing is a book without readers. Our marketing team has launched titles onto category bestseller lists and secured coverage in major publications. We treat every launch like the event it deserves to be.
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
                { q: "Do you guarantee bestseller status?", a: "No ethical marketer can guarantee a bestseller. What we guarantee is a professional, strategic campaign that maximizes your book's potential." },
                { q: "Can I market the book myself?", a: "Absolutely. Many authors handle their own social media while we manage PR and Amazon ads. We customize every marketing package." },
                { q: "How much should I budget for ads?", a: "We recommend a minimum ad budget of $500–$1,500 for launch month, depending on genre and competition. We'll advise during your consultation." },
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
                  Let's Build a Launch That <span className="text-gold-shimmer italic">People Remember</span>
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