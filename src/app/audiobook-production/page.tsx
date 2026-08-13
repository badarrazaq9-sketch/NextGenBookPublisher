"use client";

import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Check, ArrowRight, Phone, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AudiobookPage() {
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
              kicker="Audiobook Production"
              title="Studio-Grade Audio That"
              highlight="Brings Stories to Life"
              description="Professional narration, engineering, and distribution to Audible, Apple Books, Spotify, and beyond."
              align="center"
            />
          </div>
        </section>

        <section className="pb-20">
          <div className="container-site max-w-4xl">
            <Reveal>
              <div className="rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 md:p-12">
                <p className="text-lg leading-relaxed text-cream/90 md:text-xl">
                  The audiobook market is booming and listeners expect production quality that rivals major publishers. We cast the perfect narrator for your book, record in professional studios, engineer the audio to ACX standards, and distribute to every major platform so your story reaches ears everywhere.
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
                { title: "Pro Narrator Casting", desc: "We audition and cast narrators who match your book's tone, genre, and character requirements." },
                { title: "Studio Mastering", desc: "Broadcast-quality recording, noise reduction, and mastering that meets Audible's strict technical standards." },
                { title: "ACX-Ready Delivery", desc: "Files formatted and uploaded to ACX, Findaway Voices, and direct distribution channels." },
                { title: "Full Distribution", desc: "Audible, Amazon, Apple Books, Spotify, Google Play, Kobo, and library platforms like OverDrive." },
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
                { step: "01", title: "Narrator Selection", desc: "We present audition samples from professional narrators. You choose the voice that fits your story." },
                { step: "02", title: "Recording", desc: "Your narrator records in a professional studio, chapter by chapter, with direction from our audio producer." },
                { step: "03", title: "Engineering & QC", desc: "Audio is edited, mastered, and quality-checked against ACX standards for noise, levels, and pacing." },
                { step: "04", title: "Distribution", desc: "Final files are uploaded to Audible, Findaway, and all selected platforms. We verify live listings." },
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
                  Audiobooks aren't just read aloud they're performed. Our narrators are actors and voice artists who understand pacing, emotion, and character distinction. Combined with broadcast-quality engineering, your audiobook will sound indistinguishable from a Big-5 production.
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
                { q: "Who owns the audiobook rights?", a: "You do. Just like the print and eBook versions, you retain 100% of rights and royalties to the audiobook." },
                { q: "Can I narrate my own book?", a: "Yes, if you have the equipment and vocal stamina. We can coach you, engineer your home recordings, or direct your studio sessions." },
                { q: "How long does audiobook production take?", a: "Typically 4–6 weeks from narrator selection to final files, depending on book length and revision rounds." },
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
                  Give Your Story a Voice That <span className="text-gold-shimmer italic">Listeners Love</span>
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