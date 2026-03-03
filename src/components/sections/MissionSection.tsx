"use client";

import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Container from "@/components/layout/Container";

export default function MissionSection() {
  return (
    <section className="py-32 sm:py-40">
      <Container className="max-w-4xl text-center">
        <FadeInOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold/60 mb-6">
            The Vision
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.05}>
          <div className="w-16 h-[1px] divider-gold mx-auto mb-10" />
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-10">
            We don&apos;t just build businesses.{" "}
            <span className="text-gradient-gold">We architect systems</span>{" "}
            that build wealth without us.
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <p className="text-lg font-light text-text-secondary leading-[1.8] max-w-2xl mx-auto">
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
