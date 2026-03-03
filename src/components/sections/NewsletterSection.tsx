"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Container from "@/components/layout/Container";

export default function NewsletterSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const email = new FormData(form).get("email");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-32 sm:py-40">
      <Container className="max-w-2xl text-center">
        <FadeInOnScroll>
          {/* Architectural icon container */}
          <div className="relative w-14 h-14 border border-gold/15 bg-gradient-to-br from-gold/[0.06] to-transparent flex items-center justify-center mx-auto mb-8">
            <span className="absolute top-0 left-0 w-3 h-[1px] bg-gold/40" />
            <span className="absolute top-0 left-0 w-[1px] h-3 bg-gold/40" />
            <Mail size={22} className="text-gold/80" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
            Stay Starving. Stay Informed.
          </h2>
          <p className="text-text-secondary font-light mb-10">
            Weekly insights on AI automation, real estate deals, and building
            wealth through systems. No spam. Just signal.
          </p>

          {status === "success" ? (
            <p className="font-serif italic text-gold text-lg">
              Welcome to the inner circle.
            </p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-surface-card border border-gold/10 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/40 transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-gold text-black text-xs font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-colors whitespace-nowrap disabled:opacity-50 shadow-[0_2px_8px_rgba(212,168,67,0.2)]"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-400 mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
