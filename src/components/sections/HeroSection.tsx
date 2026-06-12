"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SSParticleBackground from "@/components/animations/SSParticleBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Static designed background — painted from server HTML, no JS dependency */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="absolute inset-0 hero-radial-glow" />

      {/* SS Neural Network — full-screen background, deferred mount, blends seamlessly */}
      <SSParticleBackground />

      {/* Subtle ambient glow behind the network */}
      <div className="hero-anim-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[60vh] sm:w-[900px] sm:h-[600px] bg-blue-500/[0.03] rounded-full blur-[200px]" />

      {/* Text content — centered over the neural network */}
      <Container className="relative z-10 text-center max-w-5xl">
        {/* Primary keyword heading — real text in HTML, CSS-animated reveal */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-text-primary mb-2">
          <span className="block overflow-hidden pb-[0.15em]">
            <span className="hero-anim-headline hero-anim-headline--delay-1">
              Stay Starving
            </span>
          </span>
          <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl overflow-hidden pb-[0.15em]">
            <span className="hero-anim-headline hero-anim-headline--delay-2 text-gradient-gold">
              Holdings
            </span>
          </span>
        </h1>

        {/* Gold divider */}
        <div className="hero-anim-divider w-20 h-[1px] divider-gold mx-auto my-8" />

        {/* Secondary keyword heading — division verticals */}
        <h2 className="hero-anim-subhead text-base sm:text-lg md:text-xl uppercase tracking-[0.25em] text-text-secondary font-light mb-4">
          AI Consulting · Real Estate · Media Production · Digital Ventures
        </h2>

        {/* Supporting descriptor */}
        <p className="hero-anim-descriptor font-serif text-lg sm:text-xl italic text-text-muted max-w-2xl mx-auto mb-14">
          AI automation, wealth education, and real estate — built by operators, for operators.
        </p>

        {/* CTAs */}
        <div className="hero-anim-ctas flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/portfolio" size="lg">
            Explore Our Portfolio
          </Button>
          <Button href="/boardroom" variant="ghost" size="lg">
            Join The Boardroom
          </Button>
        </div>
      </Container>
    </section>
  );
}
