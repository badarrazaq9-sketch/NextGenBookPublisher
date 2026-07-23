"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/data";

/* ─────────── Nav Links ─────────── */
const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/Ourbook" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/Faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/home") return pathname === "/home" || pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold-500/10 bg-ink-900/90 py-1.5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* 
          LOGO - BIGGER RESPONSIVE SIZING
          Mobile:   h-16 (64px)
          Tablet:   h-20 (80px)
          Desktop:  h-28 (112px)
          Large:    h-32 (128px)
          XL:       h-36 (144px) - Maximum impact!
        */}
        <Link href="/home" className="flex items-center">
          <Image
            src="/images/Nextgen.png"
            alt="NextGen Book Publishers"
            width={500}
            height={180}
            className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[11px] font-medium tracking-wide transition-colors duration-300 xl:text-[13px] ${
                isActive(link.href)
                  ? "text-gold-300"
                  : "text-cream/75 hover:text-gold-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-[11px] font-medium text-cream/75 transition-colors hover:text-gold-300 xl:text-[13px]"
          >
            <Phone size={14} className="text-gold-400" />
            <span className="hidden xl:inline">{site.phone}</span>
          </a>
          <Link href="/contact" className="btn-gold !px-4 !py-2 text-[11px] xl:!px-6 xl:!py-2.5 xl:text-[13px]">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-gold-500/20 p-2 text-gold-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-gold-500/10 bg-ink-900/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-site flex flex-col gap-1 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-gold-500/10 text-gold-300"
                  : "text-cream/80 hover:bg-gold-500/10 hover:text-gold-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-gold mt-3 text-[13px]"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}