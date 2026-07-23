import Reveal from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

/** Consistent heading block for every section  kicker, serif title, optional lead. */
export default function SectionHeading({
  kicker,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span className="kicker">{kicker}</span>
      <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
        {title}{" "}
        {highlight && <span className="text-gold-gradient italic">{highlight}</span>}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}
