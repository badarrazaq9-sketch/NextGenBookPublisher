import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      {/* backdrop band */}
      <div className="absolute inset-0 bg-ink-800/40" />
      <div className="container-site relative">
        <SectionHeading
          kicker="How It Works"
          title="A refined process,"
          highlight="four golden steps."
          description="Transparent, milestone-driven, and built around your schedule — you approve every stage before we move forward."
        />

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent lg:block" />

          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.12}>
              <div className="group relative flex h-full flex-col">
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold-500/30 bg-ink-900 shadow-[0_0_40px_-10px_rgba(212,175,55,0.35)] transition-all duration-500 group-hover:border-gold-400 group-hover:shadow-[0_0_50px_-8px_rgba(212,175,55,0.5)]">
                  <span className="font-display text-2xl font-semibold text-gold-gradient">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a href="#contact" className="btn-outline">
            Book Your Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
