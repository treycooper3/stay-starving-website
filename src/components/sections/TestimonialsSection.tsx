"use client";

import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const TESTIMONIALS = [
  {
    quote:
      "Watching your content on AI and investing made me actually start investing. I never thought I'd take the leap, but you broke it down in a way that made it real.",
    name: "Mahlik F.",
    context: "AI & Investing Content",
  },
  {
    quote:
      "You inspired me to start pursuing my dreams and become better. The way you build systems and share the process — it changed how I think about wealth.",
    name: "Jaylon",
    context: "Stay Starving Media",
  },
  {
    quote:
      "I started learning AI because of your content. Now I'm building automations for my own business. That shift wouldn't have happened without Stay Starving.",
    name: "Christine B.",
    context: "LuxCor AI Content",
  },
];

const PROOF_POINTS = [
  { metric: "10+", label: "Client Projects Delivered", division: "LuxCor AI" },
  { metric: "3", label: "Houses Sold in 2025", division: "Trey Cooper Realty" },
  { metric: "7", label: "NYFW Seasons Featured", division: "KayphoriaX" },
  { metric: "5,800+", label: "Community Members", division: "Stay Starving Media" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 sm:py-40">
      <Container>
        <FadeInOnScroll>
          <div className="text-center mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold/60 mb-4">
              Real Impact
            </p>
            <div className="w-12 h-[1px] divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl font-light">
              Built by Operators. Proven by Results.
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Proof Points */}
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {PROOF_POINTS.map((point) => (
            <StaggerItem key={point.label}>
              <div className="text-center p-6 rounded-lg border border-border bg-surface-elevated">
                <p className="font-serif text-3xl sm:text-4xl font-light text-gold mb-1">
                  {point.metric}
                </p>
                <p className="text-sm font-medium text-text-primary mb-1">
                  {point.label}
                </p>
                <p className="text-xs text-text-muted">{point.division}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Testimonial Cards */}
        <StaggerChildren className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.context}>
              <div className="h-full flex flex-col p-6 rounded-lg border border-border bg-surface-elevated">
                <Quote size={20} className="text-gold/40 mb-4 shrink-0" />
                <p className="text-sm text-text-secondary leading-relaxed flex-1 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-text-muted">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gold/60">{testimonial.context}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
