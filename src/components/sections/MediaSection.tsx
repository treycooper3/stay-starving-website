"use client";

import { Play } from "lucide-react";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

const PLACEHOLDER_VIDEOS = [
  {
    title: "How I Built 9 Businesses Under One Roof",
    category: "Business",
    thumbnail: null,
  },
  {
    title: "The WAT Framework: AI Automation That Actually Works",
    category: "AI Systems",
    thumbnail: null,
  },
  {
    title: "From Duplex to Portfolio: My Airbnb Strategy",
    category: "Real Estate",
    thumbnail: null,
  },
];

export default function MediaSection() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <Container>
        <FadeInOnScroll>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
                Stay Starving Media
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Latest Content</h2>
            </div>
            <Button href="/media" variant="ghost" size="sm">
              View All
            </Button>
          </div>
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_VIDEOS.map((video) => (
            <StaggerItem key={video.title}>
              <div className="group cursor-pointer">
                <div className="aspect-video rounded-lg bg-surface-elevated border border-border mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy to-black" />
                  <div className="relative z-10 w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Play size={24} className="text-gold ml-1" />
                  </div>
                </div>
                <span className="text-xs font-medium text-gold uppercase tracking-wider">
                  {video.category}
                </span>
                <h3 className="text-base font-semibold text-text-primary mt-1 group-hover:text-gold transition-colors">
                  {video.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
