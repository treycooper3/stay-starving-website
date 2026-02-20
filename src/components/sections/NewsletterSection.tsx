"use client";

import { Mail } from "lucide-react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Container from "@/components/layout/Container";

export default function NewsletterSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <FadeInOnScroll>
          <div className="mx-auto w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
            <Mail size={24} className="text-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Hungry. Stay Informed.
          </h2>
          <p className="text-text-secondary mb-8">
            Weekly insights on AI automation, real estate deals, and building
            wealth through systems. No spam. Just signal.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-surface-elevated border border-border rounded text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-black text-sm font-semibold rounded hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
