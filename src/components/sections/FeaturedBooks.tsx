import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { books } from "@/lib/data";

export default function FeaturedBooks() {
  return (
    <section id="books" className="relative py-24 lg:py-32">
      <div className="container-site">
        <SectionHeading
          kicker="Our Shelf"
          title="Books we've brought"
          highlight="into the world."
          description="A selection of titles ghostwritten, designed, published, and launched by the NexGen studio."
        />

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, i) => (
            <Reveal key={book.title} delay={(i % 3) * 0.1}>
              <a href="#contact" className="group block">
                <div className="relative overflow-hidden rounded-xl border border-gold-500/15 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
                  <div className="relative aspect-[2/3] w-full">
                    <Image
                      src={book.cover}
                      alt={`${book.title} by ${book.author}  book cover`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                  <span className="absolute left-4 top-4 rounded-full border border-gold-500/40 bg-ink-900/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
                    {book.badge}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-400">
                        {book.genre}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-cream">
                        {book.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-cream/65">by {book.author}</p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-sm text-muted">
            Yours could be next.{" "}
            <a href="#contact" className="font-semibold text-gold-300 underline-offset-4 hover:underline">
              Talk to a publishing consultant →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
