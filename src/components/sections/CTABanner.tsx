"use client";

import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { SKOOL_URL } from "@/lib/constants";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  heading = "Become an Executive",
  subtext = "Join The Boardroom. Where operators build wealth through AI, real estate, and investing. No fluff. No theory. Just systems.",
  buttonText = "Join The Boardroom",
  buttonHref = SKOOL_URL,
}: CTABannerProps) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gold gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <Container className="text-center max-w-3xl">
        <FadeInOnScroll>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {heading}
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.1}>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            {subtext}
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <Button href={buttonHref} size="lg">
            {buttonText}
          </Button>
        </FadeInOnScroll>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
