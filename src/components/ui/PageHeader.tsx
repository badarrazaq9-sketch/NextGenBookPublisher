"use client";

import Reveal from "@/components/ui/Reveal";

/* ─────────── Types ─────────── */
interface PageHeaderProps {
  kicker: string;        // Small text above heading (e.g., "What We Do")
  title: string;         // Main heading before gold word (e.g., "Services Built for")
  highlight: string;     // The gold shimmer word (e.g., "Serious Authors")
  description?: string; // Optional subtitle text
  align?: "center" | "left";
}

/** 
 * Reusable page header with golden shimmer highlight.
 * Matches your homepage hero heading style exactly.
 * 
 * Usage:
 * <PageHeader 
 *   kicker="What We Do" 
 *   title="Services Built for" 
 *   highlight="Serious Authors"
 *   description="Your subtitle here..."
 * />
 */
export default function PageHeader({
  kicker,
  title,
  highlight,
  description,
  align = "center",
}: PageHeaderProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${alignCls}`}>
        {/* Kicker */}
        <span className="kicker">{kicker}</span>

        {/* Main Heading */}
        <h1 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
          {title}{" "}
          <span className="text-gold-shimmer italic">{highlight}</span>
        </h1>

        {/* Description */}
        {description && (
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}