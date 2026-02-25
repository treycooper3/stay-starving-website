"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
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
    <section className="py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <FadeInOnScroll>
          <div className="mx-auto w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
            <Mail size={24} className="text-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Starving. Stay Informed.
          </h2>
          <p className="text-text-secondary mb-8">
            Weekly insights on AI automation, real estate deals, and building
            wealth through systems. No spam. Just signal.
          </p>
          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-gold">
              <Check size={20} />
              <span className="font-medium">You&apos;re in. Welcome to the inner circle.</span>
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-surface-elevated border border-border rounded text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-gold text-black text-sm font-semibold rounded hover:bg-gold-light transition-colors whitespace-nowrap disabled:opacity-50"
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
