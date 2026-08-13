"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal identification information: name, email address, phone number, and mailing address provided through our consultation forms or direct communication.",
      "Manuscript materials: drafts, notes, outlines, and any creative content you submit for ghostwriting, editing, or publishing services.",
      "Payment information: billing address and transaction details processed through our secure payment providers.",
      "Usage data: pages visited, time spent on site, and referral sources collected via analytics tools.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To provide and manage our publishing services including ghostwriting, editing, design, and distribution.",
      "To communicate with you regarding your project milestones, revisions, and delivery schedules.",
      "To process payments and send invoices for services rendered.",
      "To improve our website experience and service offerings through aggregated usage analytics.",
      "To comply with legal obligations and protect our rights under applicable law.",
    ],
  },
  {
    title: "3. How We Protect Your Data",
    content: [
      "All manuscript materials are stored on encrypted servers with access limited to your dedicated project team.",
      "We operate under a strict mutual Non-Disclosure Agreement (NDA) for every engagement.",
      "Payment processing is handled by PCI-DSS compliant third-party providers; we never store complete credit card details.",
      "Regular security audits and access logs ensure your intellectual property remains protected.",
    ],
  },
  {
    title: "4. Sharing Your Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "Your manuscript may be shared with vetted editors, designers, or narrators strictly for service delivery under confidentiality agreements.",
      "We may disclose information when required by law or to protect our legal rights.",
      "Aggregated, anonymized data may be shared with analytics providers to improve our services.",
    ],
  },
  {
    title: "5. Your Rights & Choices",
    content: [
      "You may request access to the personal data we hold about you at any time.",
      "You may request correction or deletion of your personal information, subject to legal retention requirements.",
      "You may opt out of marketing communications while still receiving project-related updates.",
      "To exercise these rights, contact us at privacy@nextgenbookpublishers.com.",
    ],
  },
  {
    title: "6. Cookies & Tracking",
    content: [
      "We use cookies to enhance site functionality and analyze traffic patterns.",
      "You may disable cookies through your browser settings, though some features may be limited.",
      "For detailed cookie information, please review our Cookie Policy.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.",
      "Significant changes will be communicated via email or a prominent site notice.",
      "Continued use of our services after changes constitutes acceptance of the revised policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-900 pt-32 pb-20">
        <div className="container-site">
          <PageHeader
            kicker="Legal"
            title="Privacy"
            highlight="Policy"
            description="Your trust is the foundation of our partnership. This policy explains how NexGen Book Publishers collects, uses, and protects your personal and creative information."
            align="center"
          />

          <div className="mt-20 max-w-4xl mx-auto space-y-16">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.08}>
                <section className="border-l-2 border-gold-500/20 pl-6 md:pl-8">
                  <h2 className="font-display text-2xl font-semibold text-cream md:text-3xl">
                    {section.title}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {section.content.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-base leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}

            <Reveal delay={0.5}>
              <div className="rounded-xl border border-gold-500/10 bg-gold-500/5 p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-cream">
                  Questions About Your Privacy?
                </h3>
                <p className="mt-3 text-muted">
                  Reach out to our team and we will respond within one business day.
                </p>
                <a
                  href="mailto:privacy@nextgenbookpublishers.com"
                  className="btn-gold mt-6 inline-block"
                >
                  Contact Privacy Team
                </a>
              </div>
            </Reveal>
          </div>

          <p className="mt-16 text-center text-xs text-muted">
            Last updated: August 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}