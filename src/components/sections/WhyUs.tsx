import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { whyUsPoints } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-ink-800/40" />
      <div className="pointer-events-none absolute left-[-15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="container-site relative grid items-center gap-16 lg:grid-cols-2">
        {/* Emblem side */}
        <Reveal className="relative order-2 mx-auto w-full max-w-sm pb-28 lg:order-1">
          <div className="absolute inset-0 -z-10 rounded-full bg-gold-500/10 blur-[90px]" />
          <Image
            src="/images/logo-mark.png"
            alt="NexGen golden quill and open book emblem"
            width={460}
            height={430}
            className="w-full px-4 drop-shadow-[0_25px_50px_rgba(212,175,55,0.2)]"
          />
          {/* floating guarantee card */}
          <div className="absolute bottom-0 left-1/2 flex w-[92%] -translate-x-1/2 items-center gap-4 rounded-2xl border border-gold-500/25 bg-ink-800/95 p-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] backdrop-blur">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-linear text-ink-900">
              <ShieldCheck size={22} />
            </span>
            <div>
              <p className="text-sm font-semibold text-cream">The NexGen Guarantee</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">
                100% rights, 100% royalties, unlimited creative control  in writing.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy side */}
        <div className="order-1 lg:order-2">
          <Reveal className="flex flex-col items-start gap-4">
            <span className="kicker">Why NexGen</span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
              Publishing, done with the{" "}
              <span className="text-gold-gradient italic">care it deserves.</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted">
              We built NexGen for authors who refuse to choose between creative
              control and professional polish. You get a Big-5 caliber team 
              and a contract that keeps the book entirely, legally yours.
            </p>
          </Reveal>

          <div className="mt-10 space-y-7">
            {whyUsPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/30 font-display text-sm font-semibold text-gold-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-cream">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
