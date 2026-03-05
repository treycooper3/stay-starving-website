"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import WordReveal from "@/components/animations/WordReveal";
import SSParticleBackground from "@/components/animations/SSParticleBackground";
import { SKOOL_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]" />

      {/* SS Neural Network — full-screen background, blends seamlessly */}
      <SSParticleBackground />

      {/* Subtle ambient glow behind the network */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[200px]"
      />

      {/* Text content — centered over the neural network */}
      <Container className="relative z-10 text-center max-w-5xl">
        {/* Primary keyword heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-text-primary mb-2">
          <span className="block">
            <WordReveal text="Stay Starving" initialDelay={0.3} />
          </span>
          <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <WordReveal
              text="Holdings"
              initialDelay={0.7}
              className="text-gradient-gold"
            />
          </span>
        </h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-[1px] divider-gold mx-auto my-8"
        />

        {/* Secondary keyword heading — division verticals */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-base sm:text-lg md:text-xl uppercase tracking-[0.25em] text-text-secondary font-light mb-4"
        >
          AI Consulting · Real Estate · Media Production · Digital Ventures
        </motion.h2>

        {/* Supporting descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="font-serif text-lg sm:text-xl italic text-text-muted max-w-2xl mx-auto mb-14"
        >
          AI automation, wealth education, and real estate — built by operators, for operators.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/portfolio" size="lg">
            Explore Our Portfolio
          </Button>
          <Button href="/boardroom" variant="ghost" size="lg">
            Join The Boardroom
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
