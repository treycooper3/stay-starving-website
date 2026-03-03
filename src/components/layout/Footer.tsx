"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Youtube, Twitter, Instagram, MessageCircle, Check } from "lucide-react";
import Container from "./Container";
import { BRAND, DIVISIONS, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNlStatus("loading");
    const email = new FormData(e.currentTarget).get("email");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setNlStatus("success");
        e.currentTarget.reset();
      } else {
        setNlStatus("error");
      }
    } catch {
      setNlStatus("error");
    }
  }

  return (
    <footer className="border-t border-gold/[0.06] bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logos/stay_starving_logo.png"
                alt="Stay Starving"
                width={32}
                height={32}
              />
              <span className="font-serif text-sm font-semibold tracking-[0.15em] uppercase text-text-primary">
                Stay Starving
              </span>
            </Link>
            <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
              {BRAND.description}
            </p>
            <div className="flex gap-4">
              {[
                { href: SOCIAL_LINKS.youtube, icon: Youtube, label: "YouTube" },
                { href: SOCIAL_LINKS.twitter, icon: Twitter, label: "Twitter" },
                { href: SOCIAL_LINKS.instagram, icon: Instagram, label: "Instagram" },
                { href: SOCIAL_LINKS.discord, icon: MessageCircle, label: "Discord" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-gold hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xs font-medium uppercase tracking-[0.2em] text-text-primary mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm text-text-muted hover:text-text-secondary transition-colors duration-300 group inline-block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="font-serif text-xs font-medium uppercase tracking-[0.2em] text-text-primary mb-5">
              Our Divisions
            </h3>
            <ul className="space-y-3">
              {DIVISIONS.slice(0, 6).map((div) => (
                <li key={div.slug}>
                  <Link
                    href={`/portfolio/${div.slug}`}
                    className="relative text-sm text-text-muted hover:text-text-secondary transition-colors duration-300 group inline-block"
                  >
                    {div.name}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xs font-medium uppercase tracking-[0.2em] text-text-primary mb-5">
              Stay Informed
            </h3>
            <p className="text-sm text-text-muted font-light mb-4">
              Join the inner circle. Weekly insights on AI, real estate, and
              building wealth through systems.
            </p>
            {nlStatus === "success" ? (
              <div className="flex items-center gap-2 text-gold text-sm">
                <Check size={16} />
                <span className="font-serif italic">You&apos;re subscribed.</span>
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-surface-card border border-gold/10 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/40 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={nlStatus === "loading"}
                  className="px-4 py-2 bg-gold text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-gold-light transition-colors disabled:opacity-50"
                >
                  {nlStatus === "loading" ? "..." : "Join"}
                </button>
              </form>
            )}
            {nlStatus === "error" && (
              <p className="text-xs text-red-400 mt-2">Failed to subscribe. Try again.</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; 2026 {BRAND.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
