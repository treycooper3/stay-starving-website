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
    <section className="py-24 sm:py-32">
      <Container>
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Our Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Nine Divisions. One Empire.
            </h2>
          </div>
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIVISIONS.map((div) => {
            const href = "externalUrl" in div ? div.externalUrl : `/portfolio/${div.slug}`;
            const isExternal = "externalUrl" in div;
            return (
              <StaggerItem key={div.slug}>
                {isExternal ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-gold/50 hover:glow-gold group h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-gold/10">
                        <DivisionIcon name={div.icon} size={24} className="text-gold" />
                      </div>
                      <Badge variant="gold">{div.category.replace("_", " ")}</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {div.name}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed flex-1">
                      {div.tagline}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </div>
                  </a>
                ) : (
                  <Card href={href} className="group h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-gold/10">
                        <DivisionIcon name={div.icon} size={24} className="text-gold" />
                      </div>
                      <Badge variant="gold">{div.category.replace("_", " ")}</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {div.name}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed flex-1">
                      {div.tagline}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </div>
                  </Card>
                )}
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
