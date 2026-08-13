"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

const clauses = [
  {
    title: "1. Agreement to Terms",
    text: "By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. These terms constitute a legally binding agreement between you and NexGen Book Publishers.",
  },
  {
    title: "2. Services Description",
    text: "NexGen Book Publishers provides ghostwriting, editing, cover design, typesetting, publishing, distribution, marketing, and audiobook production services. Service specifics, deliverables, and timelines are defined in individual project agreements signed prior to commencement.",
  },
  {
    title: "3. Client Responsibilities",
    text: "You agree to provide accurate information, timely feedback, and necessary materials for your project. Delays in client response beyond 14 days may result in project pausing or rescheduling. You warrant that you own or have rights to all materials submitted and that they do not infringe third-party rights.",
  },
  {
    title: "4. Payments & Refunds",
    text: "Payment terms are outlined in your project agreement. Deposits are due upon contract signing. Refund eligibility depends on work completed: full refunds available within 48 hours of signing before work begins; partial refunds based on completed milestones thereafter. Payment plans are available and detailed in your agreement.",
  },
  {
    title: "5. Intellectual Property",
    text: "Upon final payment, all rights, title, and interest in the completed work transfer to you. NexGen retains no ownership, royalties, or copyright in your book. Until final payment is received, NexGen retains a lien on the work product. You grant us a limited license to use your completed work for portfolio and marketing purposes unless otherwise agreed in writing.",
  },
  {
    title: "6. Confidentiality",
    text: "All engagements are protected by mutual Non-Disclosure Agreements. Our team will not disclose your identity, manuscript content, or project details to third parties without consent, except as required for service delivery (editors, designers) under equivalent confidentiality obligations.",
  },
  {
    title: "7. Limitation of Liability",
    text: "NexGen's liability is limited to the amount paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages. We do not guarantee bestseller status, specific sales volumes, or publishing deal acquisitions.",
  },
  {
    title: "8. Project Timeline & Revisions",
    text: "Timelines are milestone-driven and specified in your agreement. Standard packages include 2 revision rounds per stage. Additional revisions may incur fees. Client approval at each milestone is required before proceeding to the next stage.",
  },
  {
    title: "9. Termination",
    text: "Either party may terminate with written notice. Upon termination, you pay for all work completed to date. NexGen will deliver all completed materials within 10 business days of termination and final payment.",
  },
  {
    title: "10. Governing Law",
    text: "These terms are governed by the laws of the State of New York, USA. Any disputes shall be resolved through binding arbitration in New York County, except where prohibited by law.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-900 pt-32 pb-20">
        <div className="container-site">
          <PageHeader
            kicker="Legal"
            title="Terms of"
            highlight="Service"
            description="The rules of engagement for authors who choose NexGen. Please read carefully before starting your publishing journey with us."
            align="center"
          />

          <div className="mt-20 max-w-4xl mx-auto">
            <div className="space-y-12">
              {clauses.map((clause, i) => (
                <Reveal key={clause.title} delay={i * 0.06}>
                  <article className="group">
                    <h2 className="font-display text-xl font-semibold text-cream md:text-2xl group-hover:text-gold-300 transition-colors duration-300">
                      {clause.title}
                    </h2>
                    <div className="mt-3 h-px w-16 bg-gold-500/20 group-hover:w-24 group-hover:bg-gold-400/40 transition-all duration-500" />
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {clause.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-16 rounded-xl border border-gold-500/10 bg-ink-800/50 p-8">
                <h3 className="font-display text-lg font-semibold text-cream">
                  Need Clarification?
                </h3>
                <p className="mt-2 text-muted">
                  Our publishing consultants can walk you through any clause before you sign.
                  Every project begins with a contract review call.
                </p>
                <a href="/contact" className="btn-gold mt-5 inline-block">
                  Schedule a Contract Review
                </a>
              </div>
            </Reveal>

            <p className="mt-12 text-center text-xs text-muted">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}