"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="container-site max-w-4xl">
        <SectionHeading
          kicker="Good Questions"
          title="Everything authors"
          highlight="ask us first."
          description="Straight answers before you ever sign a page."
        />

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                    open
                      ? "border-gold-500/35 bg-ink-800/90 shadow-[0_18px_45px_-20px_rgba(212,175,55,0.25)]"
                      : "border-gold-500/10 bg-ink-800/50 hover:border-gold-500/25"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-display text-base font-semibold text-cream sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/30 text-gold-300 transition-transform duration-500 ${
                        open ? "rotate-45 bg-gold-500/15" : ""
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-7 pb-6 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
