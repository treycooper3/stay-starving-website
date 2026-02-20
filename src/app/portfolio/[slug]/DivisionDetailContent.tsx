"use client";

import { ArrowLeft, Check } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DivisionIcon from "@/components/ui/DivisionIcon";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CTABanner from "@/components/sections/CTABanner";
import type { DIVISIONS } from "@/lib/constants";

type Division = (typeof DIVISIONS)[number];

export default function DivisionDetailContent({
  division,
}: {
  division: Division;
}) {
  const priceRange = "priceRange" in division ? (division as { priceRange: string }).priceRange : null;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container className="max-w-4xl">
          <FadeInOnScroll>
            <Button href="/portfolio" variant="ghost" size="sm" className="mb-8">
              <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
            </Button>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-lg bg-gold/10">
                <DivisionIcon
                  name={division.icon}
                  size={32}
                  className="text-gold"
                />
              </div>
              <div>
                <Badge variant="gold" className="mb-2">
                  {division.category.replace("_", " ")}
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold">
                  {division.name}
                </h1>
              </div>
            </div>

            <p className="text-xl text-gold font-medium mb-4">
              {division.tagline}
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              {division.description}
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Long Description */}
      <section className="py-20 bg-surface">
        <Container className="max-w-4xl">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold mb-6">About This Division</h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              {division.longDescription}
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20">
        <Container className="max-w-4xl">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold mb-8">What We Do</h2>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {division.features.map((feature, i) => (
              <FadeInOnScroll key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-surface-elevated">
                  <Check size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          {priceRange && (
            <FadeInOnScroll delay={0.3}>
              <div className="mt-8 p-6 rounded-lg border border-gold/20 bg-gold/5">
                <p className="text-sm text-text-muted mb-1">Starting from</p>
                <p className="text-2xl font-bold text-gold">{priceRange}</p>
              </div>
            </FadeInOnScroll>
          )}
        </Container>
      </section>

      <CTABanner
        heading="Interested?"
        subtext="Get in touch to learn more about this division or explore partnership opportunities."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
