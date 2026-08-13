"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Check, ArrowRight, Phone, Star } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function CoverDesignPage() {
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
              kicker="Cover Design & Typesetting"
              title="A Cover That Sells, An Interior That"
              highlight="Reads Beautifully"
              description="Bespoke cover art and meticulously crafted interior layouts that meet industry standards and captivate readers at first sight."
              align="center"
            />
          </div>
        </section>

        <section className="pb-20">
          <div className="container-site max-w-4xl">
            <Reveal>
              <div className="rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 md:p-12">
                <p className="text-lg leading-relaxed text-cream/90 md:text-xl">
                  Readers do judge books by their covers and by their interiors. Our design studio creates custom cover art that stands out in thumbnails and on shelves, while our typesetters craft interior layouts that are elegant, readable, and professionally formatted for print, eBook, and audio formats.
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
                { title: "Custom Cover Art", desc: "Original illustration or photography-based designs tailored to your genre, audience, and brand." },
                { title: "Print & eBook Interiors", desc: "Professional typesetting with proper margins, fonts, chapter openers, and running headers." },
                { title: "Genre-Appropriate Design", desc: "Thrillers look thrilling. Memoirs feel intimate. We design with your specific market in mind." },
                { title: "Revision Rounds", desc: "Two rounds of revisions are included so you can refine the design until it's exactly right." },
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
                { step: "01", title: "Creative Brief", desc: "We study your manuscript, target audience, and comparable titles to build a design direction." },
                { step: "02", title: "Concept Development", desc: "Our designers present 2–3 cover concepts. You choose a direction and provide feedback." },
                { step: "03", title: "Refinement & Typesetting", desc: "We finalize the cover and begin interior layout, ensuring every page meets print and digital standards." },
                { step: "04", title: "Final Files & Approval", desc: "You receive print-ready PDFs, ePub files, and source assets all approved by you before release." },
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
                  A professional cover signals a professional book. Our designers have created covers for bestsellers across every major genre. They understand market trends, retailer requirements, and the subtle visual cues that make a reader click 'Buy.'
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
                { q: "Who owns the cover art?", a: "You do. Upon final payment, all rights to the cover design and interior files transfer to you completely." },
                { q: "Can I use my own cover designer?", a: "Yes. If you already have cover art, we can handle typesetting and file preparation independently." },
                { q: "What formats do you deliver?", a: "Print-ready PDF (cover + interior), ePub for eBooks, and high-resolution source files for marketing use." },
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
                  Let's Design a Cover That <span className="text-gold-shimmer italic">Demands Attention</span>
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