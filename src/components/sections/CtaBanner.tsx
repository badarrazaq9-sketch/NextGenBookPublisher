import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/data";

export default function CtaBanner() {
  return (
    <section className="relative py-14">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 px-8 py-16 text-center sm:px-16 lg:py-20">
            {/* glow + watermark */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[100px]" />
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={340}
              height={310}
              className="pointer-events-none absolute -right-16 -top-10 w-64 opacity-[0.07] lg:w-80"
            />
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={340}
              height={310}
              className="pointer-events-none absolute -bottom-16 -left-20 w-64 -scale-x-100 opacity-[0.05] lg:w-80"
            />

            <div className="relative">
              <span className="kicker justify-center">Begin Today</span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl">
                Your story deserves to be{" "}
                <span className="text-gold-shimmer italic">told beautifully.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
                Book a free 30-minute consultation. We'll discuss your idea, map
                the route to publication, and give you an honest quote — no
                pressure, no obligation.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href="#contact" className="btn-gold">
                  Claim Your Free Consultation
                  <ArrowRight size={16} />
                </a>
                <a href={site.phoneHref} className="btn-outline">
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
