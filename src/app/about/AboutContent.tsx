"use client";

import Image from "next/image";
import { Shield, Zap, BarChart3, Repeat, Flame } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import CTABanner from "@/components/sections/CTABanner";
import { BRAND } from "@/lib/constants";

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Architect, Don't Hustle",
    description:
      "Design systems that work without you. Increase time value over time. Make working optional, not mandatory.",
  },
  {
    icon: Repeat,
    title: "Automate by Leverage",
    description:
      "Code scales infinitely. Media is 1-to-many. Money compounds. People are 1-to-1. Prioritize in that order.",
  },
  {
    icon: BarChart3,
    title: "Measure Everything",
    description:
      "If it's not tracked, it's not managed. CAC, LTV, conversion rates — single source of truth for every decision.",
  },
  {
    icon: Shield,
    title: "Circuit Breakers on Everything",
    description:
      "Spending limits, error thresholds, human approval triggers. Fail gracefully with logging. Never run blind.",
  },
  {
    icon: Flame,
    title: "Stay Starving",
    description:
      "When you're starving, you eat. By any means. Complacency is the enemy. The hunger never stops — it just finds new tables.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container className="max-w-4xl">
          <FadeInOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Stay Starving isn&apos;t a slogan.{" "}
              <span className="text-gradient-gold">It&apos;s an operating system.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Founded by {BRAND.founder}, Stay Starving Holdings is a
              diversified holding company that builds financial freedom through
              architected systems — not by working harder, but by building
              infrastructure that compounds.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll>
              <div className="aspect-square rounded-lg bg-surface-elevated border border-border flex items-center justify-center overflow-hidden">
                <Image
                  src="/logos/stay_starving_logo.png"
                  alt={BRAND.founder}
                  width={200}
                  height={200}
                  className="opacity-30"
                />
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
                  The Founder
                </p>
                <h2 className="text-3xl font-bold mb-4">{BRAND.founder}</h2>
                <p className="text-sm text-gold mb-6">{BRAND.founderTitle}</p>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Mechanical engineer by training — Bachelor of Science in
                    Mechanical Engineering with a concentration in Aerospace from
                    North Carolina A&amp;T State University, and a Master of
                    Science in Management from the University of Florida. Not a
                    software engineer by trade, but an engineer who builds
                    systems across every domain.
                  </p>
                  <p>
                    Licensed Florida Realtor at 22. First investment property at
                    25. Investing in stocks and crypto since 18. Airbnb operator.
                    Builder of AI automation systems. The resume doesn&apos;t fit
                    in one lane because the vision was never one lane.
                  </p>
                  <p>
                    Trey believes in building lanes and connecting them into a
                    highway. Every division of Stay Starving Holdings feeds into
                    the next — content creates attention, attention creates
                    revenue, revenue creates capital, capital creates assets.
                  </p>
                  <p>
                    The goal isn&apos;t to work in nine businesses. It&apos;s to
                    architect nine systems that work together — and eventually
                    work without him. When you&apos;re starving, you find a way
                    to eat. That hunger doesn&apos;t go away when you&apos;re
                    full — it just finds the next table.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <Container>
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
                Our Philosophy
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Operating Principles
              </h2>
            </div>
          </FadeInOnScroll>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRINCIPLES.map((p) => (
              <StaggerItem key={p.title}>
                <div className="p-6 rounded-lg border border-border bg-surface-elevated h-full">
                  <div className="p-3 rounded-lg bg-gold/10 w-fit mb-4">
                    <p.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
