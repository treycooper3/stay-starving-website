"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import DivisionIcon from "@/components/ui/DivisionIcon";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { DIVISIONS, CATEGORIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? DIVISIONS
      : DIVISIONS.filter((d) => d.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <FadeInOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Our Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              The Full Ecosystem.
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              Every division is a system. Every system feeds the flywheel.
              Explore the full Stay Starving ecosystem.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full border transition-all",
                  activeCategory === cat.value
                    ? "bg-gold text-black border-gold font-semibold"
                    : "bg-transparent text-text-muted border-border hover:border-text-muted"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((div) => {
              const isExternal = "externalUrl" in div;
              const cardContent = (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gold/10">
                      <DivisionIcon
                        name={div.icon}
                        size={28}
                        className="text-gold"
                      />
                    </div>
                    <Badge variant="gold">
                      {div.category.replace("_", " ")}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {div.name}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-2">
                    {div.tagline}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {div.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Division <ArrowRight size={14} className="ml-1" />
                  </div>
                </>
              );

              if (isExternal) {
                return (
                  <a
                    key={div.slug}
                    href={div.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-gold/50 hover:glow-gold group h-full flex flex-col"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <Card
                  key={div.slug}
                  href={`/portfolio/${div.slug}`}
                  className="group h-full flex flex-col"
                >
                  {cardContent}
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
