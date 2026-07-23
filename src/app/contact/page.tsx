"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { pageHeaders } from "@/lib/data";
import Contact from "@/components/sections/Contact";
import WhyUs from "@/components/sections/WhyUs";

/* ─────────── Types ─────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/* ─────────── Data ─────────── */
const services = [
  "Ghostwriting",
  "Book Editing",
  "Cover Design",
  "Publishing",
  "Book Marketing",
  "Author Branding",
  "Multiple Services",
  "Not Sure Yet",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexgenpublishers.com",
    href: "mailto:hello@nexgenpublishers.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Publishing Ave, New York, NY 10001",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM EST",
    href: null,
  },
];

/* ─────────── Schema JSON-LD ─────────── */
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NexGen Book Publishers",
  description:
    "Get in touch with NexGen Book Publishers for ghostwriting, editing, cover design, publishing, and marketing services.",
  url: "https://nexgenpublishers.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "NexGen Book Publishers",
    telephone: "+1-555-123-4567",
    email: "hello@nexgenpublishers.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Publishing Ave",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@nexgenpublishers.com",
      availableLanguage: ["English"],
      areaServed: "US",
    },
  },
};

/* ─────────── Page ─────────── */
export default function ContactPage() {
  const header = pageHeaders.contact;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Schema.org JSON-LD for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-ink-900 pb-16 pt-36 lg:pb-24 lg:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gold-500/3 blur-[120px]" />
          </div>
          <div className="container-site relative">
            <PageHeader
              kicker={header.kicker}
              title={header.title}
              highlight={header.highlight}
              description={header.description}
            />
          </div>
        </section>

        {/* ── Contact Section ── */}
       <Contact />
       <WhyUs />
      </main>
      <Footer />
    </>
  );
}