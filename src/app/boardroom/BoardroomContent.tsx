"use client";

import { useState } from "react";
import {
  Bot,
  Building2,
  TrendingUp,
  BookOpen,
  Crown,
  Users,
  ChevronDown,
  Star,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import {
  COURSE_TRACKS,
  GAMIFICATION_LEVELS,
  FAQ_ITEMS,
  SKOOL_URL,
} from "@/lib/constants";

const trackIcons: Record<string, React.ReactNode> = {
  "AI Systems": <Bot size={28} className="text-gold" />,
  "Real Estate": <Building2 size={28} className="text-gold" />,
  "Stock Market & Options": <TrendingUp size={28} className="text-gold" />,
};

export default function BoardroomContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]" />
        <Container className="relative z-10 text-center max-w-4xl">
          <FadeInOnScroll>
            <Badge variant="gold" className="mb-6">
              <Crown size={12} className="mr-1" /> Premium Membership
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              The Boardroom
            </h1>
            <p className="text-xl text-text-secondary mb-4">
              Where executives build wealth through systems.
            </p>
            <p className="text-text-muted max-w-2xl mx-auto mb-10">
              Three course tracks. Private community. Gamified progression from
              Associate to C-Suite. No fluff. No theory. Just operators building
              freedom.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={SKOOL_URL} size="lg">
                Become an Executive
              </Button>
              <Button href="#tracks" variant="ghost" size="lg">
                View Course Tracks
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-surface">
        <Container>
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
                Membership Includes
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Everything You Need to Build
              </h2>
            </div>
          </FadeInOnScroll>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen size={24} className="text-gold" />,
                title: "3 Course Tracks",
                desc: "AI Systems, Real Estate, Stock Market & Options — 36+ lessons",
              },
              {
                icon: <Star size={24} className="text-gold" />,
                title: "Wealth OS",
                desc: "7 bonus lessons on cash flow, taxes, entities, and tracking",
              },
              {
                icon: <Users size={24} className="text-gold" />,
                title: "Private Community",
                desc: "Operators sharing real numbers, real deals, and real builds",
              },
              {
                icon: <Crown size={24} className="text-gold" />,
                title: "C-Suite Progression",
                desc: "Earn corporate titles from Associate to C-Suite through action",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card hover={false} className="text-center h-full">
                  <div className="mx-auto w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Course Tracks */}
      <section id="tracks" className="py-24 scroll-mt-24">
        <Container>
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
                The Curriculum
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Three Tracks. One Mission.
              </h2>
              <p className="text-text-secondary mt-4 max-w-xl mx-auto">
                Pick your lane or run all three. Each track has 3 modules with
                4 lessons each, designed to take you from foundations to
                monetization.
              </p>
            </div>
          </FadeInOnScroll>

          <StaggerChildren className="grid lg:grid-cols-3 gap-8">
            {COURSE_TRACKS.map((track) => (
              <StaggerItem key={track.name}>
                <Card className="h-full flex flex-col">
                  <div className="p-3 rounded-lg bg-gold/10 w-fit mb-4">
                    {trackIcons[track.name]}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{track.name}</h3>
                  <p className="text-sm text-gold mb-3">{track.tagline}</p>
                  <p className="text-sm text-text-muted mb-6 flex-1">
                    {track.description}
                  </p>
                  <div className="space-y-2">
                    {track.modules.map((mod, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <span className="text-xs text-gold font-bold">
                            {i + 1}
                          </span>
                        </div>
                        {mod}
                      </div>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Gamification */}
      <section className="py-24 bg-surface">
        <Container className="max-w-4xl">
          <FadeInOnScroll>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
                Climb the Ranks
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Corporate Title Progression
              </h2>
              <p className="text-text-secondary mt-4">
                Earn points through engagement and results. Level up your title.
                Unlock real perks.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GAMIFICATION_LEVELS.map((level, i) => (
              <FadeInOnScroll key={level.name} delay={i * 0.05}>
                <div className="p-5 rounded-lg border border-border bg-surface-elevated">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-gold">
                        {level.level}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">{level.name}</p>
                      <p className="text-xs text-text-muted">
                        {level.points}+ pts
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted">{level.unlock}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <Container className="max-w-3xl">
          <FadeInOnScroll>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Common Questions
              </h2>
            </div>
          </FadeInOnScroll>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => (
              <FadeInOnScroll key={i} delay={i * 0.05}>
                <div className="rounded-lg border border-border bg-surface-elevated overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-text-primary">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-text-muted transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <Container className="text-center max-w-3xl">
          <FadeInOnScroll>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              The Boardroom is open.
              <br />
              <span className="text-gradient-gold">Your seat is waiting.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              Stop consuming. Start building. Join the executives who are
              engineering their freedom through systems.
            </p>
            <Button href={SKOOL_URL} size="lg">
              Become an Executive
            </Button>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
