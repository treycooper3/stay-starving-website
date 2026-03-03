"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SKOOL_URL } from "@/lib/constants";
import Container from "./Container";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-gold/10"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logos/stay_starving_logo.png"
                alt="Stay Starving"
                width={40}
                height={40}
              />
              <span className="font-serif text-sm font-semibold tracking-[0.15em] uppercase text-text-primary">
                Stay Starving
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 py-1 group"
                >
                  <span className="tracking-wide">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gold text-black text-xs font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-300 shadow-[0_2px_8px_rgba(212,168,67,0.2)]"
              >
                Join The Boardroom
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-serif font-light text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.4 }}
              >
                <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-6" />
                <a
                  href={SKOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center px-8 py-3 bg-gold text-black text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-colors"
                >
                  Join The Boardroom
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
