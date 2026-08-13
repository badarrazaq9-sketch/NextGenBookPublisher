"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Check, ArrowRight, Phone, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GhostwritingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-ink-900">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
          </div>
          <div className="container-site relative">
            <PageHeader
              kicker="Ghostwriting"
              title="Your Story, Your Voice,"
              highlight="Our Words"
              description="Work one-on-one with an award-winning ghostwriter who learns your voice, respects your vision, and delivers a manuscript that sounds unmistakably like you."
              align="center"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="pb-20">
          <div className="container-site max-w-4xl">
            <Reveal>
              <div className="rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 md:p-12">
                <p className="text-lg leading-relaxed text-cream/90 md:text-xl">
                  Ghostwriting is a collaboration, not a transaction. We pair you with a writer who specializes in your genre fiction, memoir, business, or self-help. Through interviews, outlines, and chapter-by-chapter reviews, your book takes shape under your complete creative control. Every engagement is protected by an NDA, and you retain 100% of rights and royalties.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-gold-500/10 py-24">
          <div className="container-site">
            <SectionHeading kicker="What's Included" title="Everything You Need to" highlight="Succeed" align="center" />
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {[
                { title: "Genre Specialists", desc: "Fiction, non-fiction, memoir, biography, business, and self-help writers with proven track records." },
                { title: "Interview-Based Drafting", desc: "No blank-page anxiety. We extract your story through structured interviews and turn transcripts into prose." },
                { title: "Chapter-by-Chapter Approval", desc: "You review and approve every chapter before we move forward. No surprises at the finish line." },
                { title: "Full Confidentiality", desc: "Ironclad NDAs ensure your ghostwriting relationship remains private forever." },
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

        {/* Process */}
        <section className="py-24">
          <div className="container-site">
            <SectionHeading kicker="How It Works" title="A Refined Process, Four" highlight="Golden Steps" align="center" />
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Discovery & Matching", desc: "We learn your goals, voice, and genre, then match you with the perfect writer from our vetted roster." },
                { step: "02", title: "Outline & Interviews", desc: "Your writer builds a detailed outline and conducts recorded interviews to capture your story authentically." },
                { step: "03", title: "Drafting & Revisions", desc: "Chapters are delivered on a milestone schedule. You provide feedback; we refine until it's perfect." },
                { step: "04", title: "Final Polish", desc: "The manuscript receives a professional copy edit and proofread, ready for design and publishing." },
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

        {/* Why */}
        <section className="border-t border-gold-500/10 py-24">
          <div className="container-site max-w-4xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-gold-500/15 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/5 p-8 text-center md:p-12">
                <Star size={32} className="mx-auto text-gold-400" fill="currentColor" />
                <h2 className="mt-6 font-display text-2xl font-bold text-cream md:text-3xl">Why This Service Matters</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                  A great ghostwriter doesn't just write they listen. Our writers have credits at Big-5 houses and national bestseller lists. They know how to structure a narrative, build tension, and keep readers turning pages. Most importantly, they know when to get out of the way and let your voice shine through.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24">
          <div className="container-site max-w-3xl">
            <SectionHeading kicker="Common Questions" title="Everything You Need to" highlight="Know" align="center" />
            <div className="mt-12 space-y-6">
              {[
                { q: "Will anyone know I used a ghostwriter?", a: "Absolutely not. Every engagement is protected by a mutual NDA. Your confidentiality is absolute, and your name is the only one on the cover." },
                { q: "How involved can I be in the writing process?", a: "As involved as you want. Some authors review every chapter; others prefer milestone check-ins. Your project manager adapts to your schedule." },
                { q: "What if I don't like the first draft?", a: "We revise until you're satisfied. Our process includes multiple revision rounds at every stage, and you approve the outline before drafting begins." },
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

        {/* CTA */}
        <section className="pb-24">
          <div className="container-site">
            <Reveal>
              <div className="flex flex-col items-center text-center">
                <h2 className="font-display text-3xl font-bold text-cream md:text-5xl">
                  Ready to Write the Book <span className="text-gold-shimmer italic">Only You Can Tell?</span>
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