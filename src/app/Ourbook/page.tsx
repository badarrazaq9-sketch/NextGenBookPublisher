"use client";

import { Star, ExternalLink, BookOpen, Phone, Award, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { pageHeaders } from "@/lib/data";
import Contact from "@/components/sections/Contact";

/* ─────────── Types ─────────── */
interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  rating: number;
  reviews: number;
  award?: string;
  coverImage: string;
  amazonUrl?: string;
  publishDate: string;
  isbn?: string;
}

/* ─────────── Data ─────────── */
const featuredBooks: Book[] = [
  {
    id: "book-1",
    title: "The Silent Echo",
    author: "Sarah Mitchell",
    genre: "Literary Fiction",
    description:
      "A haunting tale of memory and redemption that spent 12 weeks on the New York Times bestseller list. A masterpiece of emotional storytelling.",
    rating: 4.8,
    reviews: 2847,
    award: "Pulitzer Prize Finalist",
    coverImage: "/images/books/silent-echo.jpg",
    amazonUrl: "https://amazon.com",
    publishDate: "2024-03-15",
    isbn: "978-1-234567-89-0",
  },
  {
    id: "book-2",
    title: "Beyond the Horizon",
    author: "James Thornton",
    genre: "Business & Leadership",
    description:
      "A groundbreaking guide to transformative leadership that has reshaped how Fortune 500 executives approach organizational change.",
    rating: 4.9,
    reviews: 1532,
    award: "Wall Street Journal Bestseller",
    coverImage: "/images/books/beyond-horizon.jpg",
    amazonUrl: "https://amazon.com",
    publishDate: "2024-01-20",
    isbn: "978-1-234567-90-6",
  },
  {
    id: "book-3",
    title: "Whispers in the Dark",
    author: "Elena Vasquez",
    genre: "Psychological Thriller",
    description:
      "A gripping psychological thriller that keeps readers on the edge of their seats. Optioned for a major motion picture adaptation.",
    rating: 4.7,
    reviews: 3210,
    coverImage: "/images/books/whispers-dark.jpg",
    amazonUrl: "https://amazon.com",
    publishDate: "2023-11-08",
    isbn: "978-1-234567-91-3",
  },
  {
    id: "book-4",
    title: "The Art of Stillness",
    author: "Dr. Michael Chen",
    genre: "Self-Help & Wellness",
    description:
      "A transformative journey into mindfulness and presence. Featured on Oprah's Book Club and translated into 23 languages.",
    rating: 4.9,
    reviews: 4521,
    award: "Oprah's Book Club Selection",
    coverImage: "/images/books/art-stillness.jpg",
    amazonUrl: "https://amazon.com",
    publishDate: "2023-09-12",
    isbn: "978-1-234567-92-0",
  },
  {
    id: "book-5",
    title: "Empire of Shadows",
    author: "Robert Blackwood",
    genre: "Historical Fiction",
    description:
      "An epic historical saga spanning three generations. Winner of the National Book Award and critically acclaimed worldwide.",
    rating: 4.6,
    reviews: 1893,
    award: "National Book Award Winner",
    coverImage: "/images/books/empire-shadows.jpg",
    amazonUrl: "https://amazon.com",
    publishDate: "2023-07-30",
    isbn: "978-1-234567-93-7",
  },
  {
    id: "book-6",
    title: "Digital Renaissance",
    author: "Amara Okafor",
    genre: "Technology & Future",
    description:
      "A visionary exploration of AI, creativity, and the future of human expression. Required reading at MIT and Stanford.",
    rating: 4.8,
    reviews: 987,
    coverImage: "/images/books/digital-renaissance.jpg",
    amazonUrl: "https://amazon.com",
    publishDate: "2024-05-01",
    isbn: "978-1-234567-94-4",
  },
];

const stats = [
  { icon: BookOpen, value: "200+", label: "Books Published" },
  { icon: Award, value: "47", label: "Awards Won" },
  { icon: TrendingUp, value: "35", label: "Bestsellers" },
  { icon: Users, value: "50K+", label: "Happy Readers" },
];

/* ─────────── Schema: CollectionPage ─────────── */
const siteUrl = "https://www.nextgenbookpublishers.com";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "NexGen Book Publishers Portfolio",
  description:
    "Explore our portfolio of published books — from Pulitzer finalists to Wall Street Journal bestsellers. Award-winning books across every genre.",
  url: `${siteUrl}/portfolio`,
  isPartOf: {
    "@type": "WebSite",
    name: "NexGen Book Publishers",
    url: siteUrl,
  },
  about: {
    "@type": "Thing",
    name: "Published Books Portfolio",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: featuredBooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Book",
        name: book.title,
        author: {
          "@type": "Person",
          name: book.author,
        },
        genre: book.genre,
        description: book.description,
        isbn: book.isbn,
        datePublished: book.publishDate,
        image: `${siteUrl}${book.coverImage}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: book.rating,
          reviewCount: book.reviews,
          bestRating: 5,
        },
        ...(book.award && { award: book.award }),
        ...(book.amazonUrl && {
          offers: {
            "@type": "Offer",
            url: book.amazonUrl,
            availability: "https://schema.org/InStock",
          },
        }),
        publisher: {
          "@type": "Organization",
          name: "NexGen Book Publishers",
          logo: `${siteUrl}/images/Nextgen.png`,
        },
      },
    })),
  },
};

/* ─────────── Schema: Organization + BookStore ─────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "BookStore"],
  name: "NexGen Book Publishers",
  url: siteUrl,
  logo: `${siteUrl}/images/Nextgen.png`,
  description:
    "Premium publishing house for authors who expect more. Ghostwriting, editing, design, publishing & marketing. You keep 100% rights & royalties.",
  telephone: "+1-843-410-9324",
  email: "hello@nextgenbookpublishers.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1320 Main St, Suite 300",
    addressLocality: "Columbia",
    addressRegion: "SC",
    postalCode: "29201",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2847",
    bestRating: "5",
  },
  sameAs: [
    "https://facebook.com/nexgenpublishers",
    "https://instagram.com/nexgenpublishers",
    "https://twitter.com/nexgenpublishers",
    "https://linkedin.com/company/nexgenpublishers",
  ],
};

/* ─────────── Schema: BreadcrumbList ─────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Portfolio",
      item: `${siteUrl}/portfolio`,
    },
  ],
};

/* ─────────── Components ─────────── */

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={
              star <= Math.round(rating)
                ? "fill-gold-400 text-gold-400"
                : "text-gold-500/20"
            }
          />
        ))}
      </div>
      <span className="text-sm font-medium text-cream">{rating}</span>
      <span className="text-xs text-muted">({reviews.toLocaleString()} reviews)</span>
    </div>
  );
}

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <Reveal delay={index * 0.1}>
      <div className="group relative overflow-hidden rounded-2xl border border-gold-500/10 bg-ink-800/50 transition-all duration-500 hover:border-gold-500/25 hover:bg-ink-800">
        <div className="grid gap-6 p-6 sm:grid-cols-[140px_1fr] sm:p-8">
          {/* Cover */}
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-ink-700">
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen size={40} className="text-gold-500/15" />
            </div>
            {book.award && (
              <div className="absolute -right-8 top-4 rotate-45 bg-gold-500 px-10 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900">
                Awarded
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-gold-500/20 bg-gold-500/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                  {book.genre}
                </span>
                <span className="text-xs text-muted">{book.publishDate}</span>
              </div>

              <h3 className="mt-3 font-display text-xl font-semibold text-cream sm:text-2xl">
                {book.title}
              </h3>
              <p className="mt-1 text-sm text-gold-400">by {book.author}</p>

              <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                {book.description}
              </p>

              <div className="mt-4">
                <StarRating rating={book.rating} reviews={book.reviews} />
              </div>

              {book.award && (
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-gold-500/15 bg-gold-500/5 px-3 py-1.5 text-xs font-medium text-gold-300">
                  <Award size={12} />
                  {book.award}
                </div>
              )}
            </div>

            {book.amazonUrl && (
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-5 w-fit text-xs"
              >
                View on Amazon
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─────────── Page ─────────── */
export default function PortfolioPage() {
  const header = pageHeaders.portfolio || {
    kicker: "Our Work",
    title: "Books That",
    highlight: "Inspire Readers",
    description:
      "Explore our portfolio of published works — from memoirs to thrillers, each book crafted with precision and passion.",
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-ink-900 pb-20 pt-36 lg:pb-28 lg:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gold-500/3 blur-[120px]" />
            <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold-500/2 blur-[100px]" />
          </div>

          <div className="container-site relative">
            <PageHeader
              kicker={header.kicker}
              title={header.title}
              highlight={header.highlight}
              description={header.description}
            />

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-gold-500/10 bg-ink-800/30 p-8 lg:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <Icon size={24} className="mx-auto text-gold-400" />
                      <p className="mt-3 font-display text-3xl font-bold text-gold-300">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Books Grid ── */}
        <section className="bg-ink-950 py-20 lg:py-28">
          <div className="container-site">
            <div className="space-y-8">
              {featuredBooks.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}