"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold-500/10 bg-ink-900/85 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo-mark.png"
            alt="NexGen Book Publishers logo"
            width={44}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-wide text-gold-gradient">
              NEX GEN
            </span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.34em] text-cream/70">
              Book Publishers
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-cream/75 transition-colors duration-300 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-[13px] font-medium text-cream/75 transition-colors hover:text-gold-300"
          >
            <Phone size={15} className="text-gold-400" />
            {site.phone}
          </a>
          <a href="#contact" className="btn-gold !px-6 !py-2.5 text-[13px]">
            Get a Free Quote
          </a>
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
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-cream/80 transition-colors hover:bg-gold-500/10 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-3 text-[13px]">
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
