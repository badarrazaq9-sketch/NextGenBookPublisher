import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-36 sm:pt-44 lg:pb-28">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gold-radial blur-3xl" />
        <div className="absolute right-[-10%] top-[30%] h-[420px] w-[420px] rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="kicker">A Premium Publishing House</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.08] text-cream sm:text-6xl lg:text-[4.2rem]">
              Where Great Stories
              <br />
              Become <span className="text-gold-shimmer italic">Published</span>
              <br />
              Legacies.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              From a spark of an idea to a beautifully bound book in readers'
              hands — NexGen handles ghostwriting, editing, design, publishing,
              and marketing under one gilded roof. You keep every right and
              every royalty.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-gold">
              Start Your Book
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </Reveal>

          <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-sm text-cream/70">4.9/5 from 380+ authors</span>
            </div>
            <span className="hidden h-4 w-px bg-gold-500/20 sm:block" />
            <span className="text-sm text-cream/70">
              Trusted by first-time & bestselling authors alike
            </span>
          </Reveal>
        </div>

        {/* Emblem */}
        <Reveal delay={0.25} className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-gold-500/10 blur-[100px]" />
          <div className="animate-float">
            <Image
              src="/images/logo-mark.png"
              alt="NexGen golden quill and open book emblem"
              width={520}
              height={480}
              className="w-full drop-shadow-[0_30px_60px_rgba(212,175,55,0.25)]"
              priority
            />
          </div>
          {/* Orbit rings */}
          <div className="pointer-events-none absolute inset-[-8%] -z-10 rounded-full border border-gold-500/10" />
          <div className="pointer-events-none absolute inset-[-16%] -z-10 rounded-full border border-gold-500/5" />
        </Reveal>
      </div>

      {/* Stats band */}
      <div className="container-site relative mt-16 lg:mt-24">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gold-500/10 bg-gold-500/5 lg:grid-cols-4">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 bg-ink-900/80 px-6 py-8 text-center backdrop-blur"
              >
                <dt className="order-2 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-semibold text-gold-gradient sm:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
