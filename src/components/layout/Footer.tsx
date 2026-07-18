import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { footerColumns, site } from "@/lib/data";

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/10 bg-ink-900">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <a href="#home" className="inline-block">
            <Image
              src="/images/logo-full.png"
              alt="NexGen Book Publishers"
              width={170}
              height={160}
              className="h-36 w-auto"
            />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A premium publishing house for authors who expect more — from first
            idea to bookshelf, we craft books that endure.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/20 text-gold-300 transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
              {col.title}
            </h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/65 transition-colors duration-300 hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
            Get in Touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-cream/65">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={site.phoneHref} className="transition-colors hover:text-gold-300">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold-300">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{site.address}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted">{site.hours}</p>
        </div>
      </div>

      <div className="border-t border-gold-500/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gold-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
