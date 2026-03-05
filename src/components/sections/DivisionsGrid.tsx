"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import DivisionIcon from "@/components/ui/DivisionIcon";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Container from "@/components/layout/Container";
import { DIVISIONS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function DivisionsGrid() {
  return (
    <section className="py-32 sm:py-40">
      <Container>
        <FadeInOnScroll>
          <div className="text-center mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold/60 mb-4">
              Our Portfolio
            </p>
            <div className="w-12 h-[1px] divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl font-light">
              Nine Divisions. One Empire.
            </h2>
          </div>
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIVISIONS.map((div) => (
            <StaggerItem key={div.slug}>
              <Card href={`/portfolio/${div.slug}`} className="group h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <DivisionIcon name={div.icon} />
                  <Badge variant="gold">{div.category.replace("_", " ")}</Badge>
                </div>
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-2">
                  {div.name}
                </h3>
                <p className="text-sm font-light text-text-secondary leading-relaxed flex-1">
                  {div.tagline}
                </p>
                <div className="mt-6 flex items-center text-sm text-gold/50 group-hover:text-gold transition-colors duration-300">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="ml-1 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
