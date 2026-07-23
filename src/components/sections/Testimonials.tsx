import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          kicker="Authors Speak"
          title="Trusted by the writers"
          highlight="behind the books."
          description="First-time memoirists, CEOs, and career novelists  here's what they say about publishing with NexGen."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.08}>
              <figure className="card-surface flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/30">
                <Quote size={26} className="text-gold-500/50" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gold-500/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 font-display text-sm font-semibold text-gold-300">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cream">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
