"use client";

import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CountUp from "@/components/animations/CountUp";
import Container from "@/components/layout/Container";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="py-20 border-y border-border bg-surface">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <FadeInOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm text-text-muted uppercase tracking-wider">
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
