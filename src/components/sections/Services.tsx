import Link from "next/link";
import {
  PenLine,
  BookOpenCheck,
  Palette,
  Library,
  Megaphone,
  Headphones,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  PenLine,
  BookOpenCheck,
  Palette,
  Library,
  Megaphone,
  Headphones,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          kicker="What We Do"
          title="Every chapter of publishing,"
          highlight="mastered."
          description="Six disciplines, one team, zero hand-offs. Choose a single service or let us carry your book from blank page to bestseller list."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? PenLine;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.1}>
                <article className="group card-surface relative flex h-full flex-col p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/30 hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.18)]">
                  {/* corner glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gold-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-300 transition-all duration-500 group-hover:bg-gold-500/15 group-hover:text-gold-200">
                    <Icon size={26} strokeWidth={1.6} />
                  </div>

                  <h3 className="relative font-display text-xl font-semibold text-cream">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <ul className="relative mt-5 space-y-2 border-t border-gold-500/10 pt-5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-[13px] text-cream/70">
                        <Check size={14} className="shrink-0 text-gold-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* ✅ Updated: Links to individual service page */}
                  <Link
                    href={service.href}
                    className="relative mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-gold-300 transition-all duration-300 hover:gap-3 hover:text-gold-200"
                  >
                    Discuss this service
                    <ArrowRight size={14} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}