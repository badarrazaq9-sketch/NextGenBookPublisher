import { Check, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { pricingPlans } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-ink-800/40" />
      <div className="container-site relative">
        <SectionHeading
          kicker="Investment"
          title="Honest packages for"
          highlight="every ambition."
          description="Transparent pricing, flexible payment plans, and a free consultation before you commit to anything."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 ${
                  plan.featured
                    ? "border-gold-500/50 bg-gradient-to-b from-gold-500/15 via-ink-800 to-ink-800 shadow-[0_30px_70px_-25px_rgba(212,175,55,0.35)] lg:-translate-y-3"
                    : "border-gold-500/15 bg-ink-800/80 hover:border-gold-500/30"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold-linear px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-900 shadow-lg">
                    <Sparkles size={12} />
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-cream">{plan.name}</h3>
                <p className="mt-1 text-xs text-muted">{plan.tagline}</p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-4xl font-semibold text-gold-gradient">
                    {plan.price}
                  </span>
                  <span className="pb-1.5 text-xs text-muted">{plan.period}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3 border-t border-gold-500/10 pt-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-cream/75">
                      <Check size={15} className="mt-0.5 shrink-0 text-gold-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 ${plan.featured ? "btn-gold" : "btn-outline"} w-full`}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-xs text-muted">
            All packages include a signed agreement, NDA, and milestone timeline. Payment plans available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
