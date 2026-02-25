"use client";

import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Container from "@/components/layout/Container";
import { BRAND } from "@/lib/constants";

export default function MissionSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-4xl text-center">
        <FadeInOnScroll>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">
            {BRAND.name}
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
            We don&apos;t just build businesses.{" "}
            <span className="text-gradient-gold">We architect systems</span>{" "}
            that build wealth without us.
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Nine divisions. One mission. Every piece of the ecosystem is designed
            to compound. Content creates attention, attention creates revenue,
            revenue creates capital, capital creates assets. The flywheel never
            stops.
          </p>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
