"use client";

import { ArrowLeft, Check, ExternalLink, Instagram, Calendar, Globe } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DivisionIcon from "@/components/ui/DivisionIcon";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CTABanner from "@/components/sections/CTABanner";
import type { DIVISIONS } from "@/lib/constants";

type Division = (typeof DIVISIONS)[number];

const CREDIBILITY_BADGES: Record<string, string> = {
  "luxcor-ai": "6 Websites & 1 App Built",
  "trey-cooper-realty": "3 Houses Sold in 2025",
  "kayphoriax": "7 NYFW Seasons Featured",
  "the-boardroom": "Join Free — Growing Community",
};

export default function DivisionDetailContent({
  division,
}: {
  division: Division;
}) {
  const priceRange = "priceRange" in division ? (division as { priceRange: string }).priceRange : null;
  const externalUrl = "externalUrl" in division ? (division as { externalUrl: string }).externalUrl : null;
  const instagramUrl = "instagramUrl" in division ? (division as { instagramUrl: string }).instagramUrl : null;
  const brokerUrl = "brokerUrl" in division ? (division as { brokerUrl: string }).brokerUrl : null;
  const calendlyUrl = "calendlyUrl" in division ? (division as { calendlyUrl: string }).calendlyUrl : null;

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

            {CREDIBILITY_BADGES[division.slug] && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-sm font-medium text-gold mb-4">
                <Check size={14} className="shrink-0" />
                {CREDIBILITY_BADGES[division.slug]}
              </div>
            )}

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

          {/* Links Section */}
          {(externalUrl || instagramUrl || brokerUrl || calendlyUrl) && (
            <FadeInOnScroll delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {externalUrl && (
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-black font-semibold rounded hover:bg-gold-light transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                )}
                {calendlyUrl && (
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-black font-semibold rounded hover:bg-gold-light transition-colors"
                  >
                    <Calendar size={16} />
                    Book a Consultation
                  </a>
                )}
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-gold/30 text-gold font-semibold rounded hover:bg-gold/10 transition-colors"
                  >
                    <Instagram size={16} />
                    Instagram
                  </a>
                )}
                {brokerUrl && (
                  <a
                    href={brokerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-gold/30 text-gold font-semibold rounded hover:bg-gold/10 transition-colors"
                  >
                    <Globe size={16} />
                    Broker Profile
                  </a>
                )}
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
