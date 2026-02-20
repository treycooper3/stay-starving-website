"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "AI & Tech", "Business", "Shorts"];

const VIDEOS = [
  {
    videoId: "K4wFDfi-sgg",
    title: "I Built a Website in 5 Minutes (Gemini + Claude Code)",
    category: "AI & Tech",
    date: "Feb 6, 2026",
    thumbnail: "https://i.ytimg.com/vi/K4wFDfi-sgg/hqdefault.jpg",
  },
  {
    videoId: "4Y5tmxUS6gE",
    title: "Some code made this video!! #ai #remotion",
    category: "AI & Tech",
    date: "Feb 18, 2026",
    thumbnail: "https://i.ytimg.com/vi/4Y5tmxUS6gE/hqdefault.jpg",
  },
  {
    videoId: "XZKu9VpmHFE",
    title: "Build a Website FAST with AI! Gemini Does the Heavy Lifting!",
    category: "Shorts",
    date: "Feb 17, 2026",
    thumbnail: "https://i.ytimg.com/vi/XZKu9VpmHFE/hqdefault.jpg",
  },
  {
    videoId: "hYpOgmssYcI",
    title: "AI Builds Sister's Website in 20 Mins! NO CODE!",
    category: "AI & Tech",
    date: "Feb 16, 2026",
    thumbnail: "https://i.ytimg.com/vi/hYpOgmssYcI/hqdefault.jpg",
  },
  {
    videoId: "byOmDB0MUxs",
    title: "AI NEWS DECODED: Claude Code Cuts Through the Hype!",
    category: "AI & Tech",
    date: "Feb 15, 2026",
    thumbnail: "https://i.ytimg.com/vi/byOmDB0MUxs/hqdefault.jpg",
  },
  {
    videoId: "xG2axIyJlyQ",
    title: "AI is Your Next Brain: Collaboration is Key!",
    category: "AI & Tech",
    date: "Feb 14, 2026",
    thumbnail: "https://i.ytimg.com/vi/xG2axIyJlyQ/hqdefault.jpg",
  },
  {
    videoId: "HS8paafGhqU",
    title: "Claude Cowork: AI That Builds With You, Not Just For You!",
    category: "AI & Tech",
    date: "Feb 13, 2026",
    thumbnail: "https://i.ytimg.com/vi/HS8paafGhqU/hqdefault.jpg",
  },
  {
    videoId: "jwyfv2cHLB4",
    title: "From Logic to Python: My Coding Journey Unlocked!",
    category: "Business",
    date: "Feb 7, 2026",
    thumbnail: "https://i.ytimg.com/vi/jwyfv2cHLB4/hqdefault.jpg",
  },
  {
    videoId: "1zkwjXimtCQ",
    title: "Unlocking Online Money: My Quest for the Ultimate System!",
    category: "Business",
    date: "Feb 6, 2026",
    thumbnail: "https://i.ytimg.com/vi/1zkwjXimtCQ/hqdefault.jpg",
  },
  {
    videoId: "iT8DPjaec7U",
    title: "Black Kid in Engineering: My Early Tech Journey",
    category: "Business",
    date: "Feb 5, 2026",
    thumbnail: "https://i.ytimg.com/vi/iT8DPjaec7U/hqdefault.jpg",
  },
  {
    videoId: "8OFDw24bwes",
    title: "Young Black Men in Tech: Master AI Now!",
    category: "AI & Tech",
    date: "Feb 4, 2026",
    thumbnail: "https://i.ytimg.com/vi/8OFDw24bwes/hqdefault.jpg",
  },
  {
    videoId: "U1LpgdR1_1M",
    title: "Unlocking AI Power: Building, Breaking, and Mastering Automations!",
    category: "AI & Tech",
    date: "Feb 3, 2026",
    thumbnail: "https://i.ytimg.com/vi/U1LpgdR1_1M/hqdefault.jpg",
  },
];

export default function MediaContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? VIDEOS
      : VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <Container>
          <FadeInOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Stay Starving Media
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Content That Builds
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              AI automation, real estate strategy, investing, and the systems
              behind a growing holding company. Watch, learn, build.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Featured Video */}
      <section className="pb-16">
        <Container>
          <FadeInOnScroll>
            <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border border-border">
              {playingVideo === VIDEOS[0].videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEOS[0].videoId}?autoplay=1`}
                  title={VIDEOS[0].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <button
                  onClick={() => setPlayingVideo(VIDEOS[0].videoId)}
                  className="relative w-full h-full group"
                >
                  <Image
                    src={VIDEOS[0].thumbnail}
                    alt={VIDEOS[0].title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8 ml-1">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs text-gold uppercase tracking-wider mb-1">Featured Video</p>
                    <p className="text-xl font-bold text-white">{VIDEOS[0].title}</p>
                  </div>
                </button>
              )}
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Video Grid */}
      <section className="pb-24">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full border transition-all",
                  activeCategory === cat
                    ? "bg-gold text-black border-gold font-semibold"
                    : "bg-transparent text-text-muted border-border hover:border-text-muted"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <StaggerItem key={video.videoId}>
                <div className="group">
                  {playingVideo === video.videoId ? (
                    <div className="aspect-video rounded-lg overflow-hidden border border-border mb-4">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setPlayingVideo(video.videoId)}
                      className="relative aspect-video w-full rounded-lg overflow-hidden border border-border mb-4"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" fill="black" className="w-5 h-5 ml-0.5">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  )}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gold uppercase tracking-wider">
                      {video.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {video.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text-primary group-hover:text-gold transition-colors">
                    {video.title}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Channel Link */}
          <FadeInOnScroll>
            <div className="text-center mt-12">
              <a
                href="https://www.youtube.com/@TreyCooper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded hover:bg-gold hover:text-black transition-colors font-semibold text-sm"
              >
                View All Videos on YouTube
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      <NewsletterSection />
    </>
  );
}
