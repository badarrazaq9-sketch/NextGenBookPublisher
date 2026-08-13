"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services, site } from "@/lib/data";

const contactCards = [
  { icon: Phone, label: "Call Us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Studio", value: site.address },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          kicker="Contact"
          title="Let's talk about"
          highlight="your book."
          description="Tell us where you are in the journey — an idea, a draft, or a finished manuscript — and we'll respond within one business day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info cards */}
          <Reveal className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-300">
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-400">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="mt-1.5 block break-words text-sm text-cream/80 transition-colors hover:text-gold-300">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/80">{value}</p>
                )}
              </div>
            ))}
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="card-surface relative overflow-hidden p-8 sm:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />

              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-linear text-ink-900">
                    <CheckCircle2 size={30} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                    Thank you — we've received your brief.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    A publishing consultant will reach out within one business
                    day. Keep an eye on your inbox (and spam folder, just in case).
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-8 text-[13px]">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                        Full Name *
                      </label>
                      <input name="name" id="name" required placeholder="Jane Austen" className="input-lux" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                        Email *
                      </label>
                      <input name="email" id="email" type="email" required placeholder="jane@example.com" className="input-lux" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                        Phone
                      </label>
                      <input name="phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" className="input-lux" />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                        I'm Interested In
                      </label>
                      <select name="service" id="service" className="input-lux appearance-none" defaultValue="">
                        <option value="" disabled className="bg-ink-800">Select a service…</option>
                        {services.map((s) => (
                          <option key={s.title} value={s.title} className="bg-ink-800">
                            {s.title}
                          </option>
                        ))}
                        <option value="Full Package" className="bg-ink-800">Full Publishing Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                      About Your Book *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      placeholder="Genre, where you are in the process, your goals…"
                      className="input-lux resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gold mt-2 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send My Brief
                        <Send size={15} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-muted sm:text-left">
                    Protected by our mutual NDA. We never share your ideas or information.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}