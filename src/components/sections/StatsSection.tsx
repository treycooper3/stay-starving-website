"use client";

import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CountUp from "@/components/animations/CountUp";
import Container from "@/components/layout/Container";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 divider-gold-thin" />
      <div className="absolute bottom-0 left-0 right-0 divider-gold-thin" />
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <FadeInOnScroll key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="font-serif text-5xl sm:text-6xl font-light text-gold mb-2">
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-text-muted font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
