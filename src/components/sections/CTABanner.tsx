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
  heading = "Your Future Is Not Uncertain. It Is Inevitable.",
  subtext = "Join The Boardroom. Where operators build wealth through AI, real estate, and investing. No fluff. No theory. Just systems.",
  buttonText = "Join The Boardroom",
  buttonHref = SKOOL_URL,
}: CTABannerProps) {
  return (
    <section className="py-32 sm:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <Container className="text-center max-w-3xl">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-8">
            {heading}
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.1}>
          <p className="text-lg font-light text-text-secondary mb-12 leading-relaxed">
            {subtext}
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <Button href={buttonHref} size="lg">
            {buttonText}
          </Button>
        </FadeInOnScroll>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
}
