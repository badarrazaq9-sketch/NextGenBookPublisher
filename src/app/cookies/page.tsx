"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

const cookieTypes = [
  {
    name: "Essential Cookies",
    purpose: "Required for the website to function. These enable core features like page navigation, form submissions, and secure access areas.",
    required: true,
  },
  {
    name: "Analytics Cookies",
    purpose: "Help us understand how visitors interact with our site by collecting anonymized data on page views, traffic sources, and user behavior.",
    required: false,
  },
  {
    name: "Functionality Cookies",
    purpose: "Remember your preferences such as language selection, form auto-fill data, and display settings for future visits.",
    required: false,
  },
  {
    name: "Marketing Cookies",
    purpose: "Used to deliver relevant advertisements and measure campaign performance. We do not sell this data to third parties.",
    required: false,
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-900 pt-32 pb-20">
        <div className="container-site">
          <PageHeader
            kicker="Legal"
            title="Cookie"
            highlight="Policy"
            description="Transparency about the small data files we use to improve your experience on the NexGen website."
            align="center"
          />

          <div className="mt-20 max-w-4xl mx-auto space-y-16">
            <Reveal>
              <section>
                <h2 className="font-display text-2xl font-semibold text-cream">
                  What Are Cookies?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Cookies are small text files stored on your device when you visit a website. 
                  They help the site remember your actions and preferences over time so you don't 
                  have to re-enter them whenever you return.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section>
                <h2 className="font-display text-2xl font-semibold text-cream">
                  Cookies We Use
                </h2>
                <div className="mt-6 grid gap-4">
                  {cookieTypes.map((type, i) => (
                    <div
                      key={type.name}
                      className="rounded-lg border border-gold-500/10 bg-ink-800/30 p-6 transition-colors hover:border-gold-500/20"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-medium text-cream">
                          {type.name}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                            type.required
                              ? "bg-gold-500/10 text-gold-300"
                              : "bg-cream/5 text-muted"
                          }`}
                        >
                          {type.required ? "Required" : "Optional"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {type.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.2}>
              <section>
                <h2 className="font-display text-2xl font-semibold text-cream">
                  Managing Your Cookies
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  You can control and delete cookies through your browser settings. Most browsers 
                  allow you to refuse all cookies or alert you when a cookie is being sent. Note 
                  that disabling certain cookies may limit functionality on our site.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Chrome", "Firefox", "Safari", "Edge"].map((browser) => (
                    <span
                      key={browser}
                      className="rounded-md border border-gold-500/15 bg-gold-500/5 px-4 py-2 text-sm text-gold-300"
                    >
                      {browser} Settings
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.3}>
              <section>
                <h2 className="font-display text-2xl font-semibold text-cream">
                  Third-Party Services
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  We use trusted third-party services that may set their own cookies, including 
                  Google Analytics for traffic analysis and our payment processors for secure 
                  checkout. These providers operate under their own privacy policies.
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="rounded-xl border border-gold-500/10 bg-gold-500/5 p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-cream">
                  Cookie Preferences
                </h3>
                <p className="mt-3 text-muted">
                  To update your cookie consent choices, clear your browser cookies for this site 
                  and revisit to see the consent banner again.
                </p>
              </div>
            </Reveal>

            <p className="text-center text-xs text-muted">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}