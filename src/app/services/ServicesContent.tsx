"use client";

import { Bot, Home, Check, ArrowRight, Instagram, Globe } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import CTABanner from "@/components/sections/CTABanner";

const SERVICES = [
  {
    icon: Bot,
    name: "Luxcor AI",
    tagline: "AI Automation & Consulting",
    description:
      "Custom AI automation solutions built on the WAT Framework: Workflows, Agents, Tools. We architect systems where AI handles reasoning and deterministic code handles execution. The result: reliable automation that actually works in production.",
    features: [
      "Custom AI agent development & deployment",
      "Voice agent setup (lead qualification, support, scheduling)",
      "Workflow automation (n8n, Python, API integrations)",
      "Business process audit & optimization",
      "Monthly retainer support & monitoring",
    ],
    cta: "Book a Discovery Call",
    href: "https://luxcor.tech/",
  },
  {
    icon: Home,
    name: "Trey Cooper Realty",
    tagline: "Licensed Florida Realtor | Multifamily & Commercial",
    description:
      "I specialize in multifamily and commercial. Licensed agent services powered by technology. From AI-driven lead qualification to data-backed market analysis, we bring a systems-first approach to every real estate transaction.",
    features: [
      "Multifamily & commercial specialization",
      "Buyer & seller representation",
      "Investment property acquisition & analysis",
      "AI-powered lead qualification",
      "Deal sourcing for investors",
    ],
    pricing: "Commission-based",
    cta: "Book a Consultation",
    href: "https://calendly.com/treycooper333/onboarding-meeting",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/stayinvestedre", icon: "instagram" },
      { label: "Broker Profile", url: "https://www.itgrealty.com/trey-cooper/", icon: "globe" },
    ],
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <Container className="max-w-4xl">
          <FadeInOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Systems-First Services
            </h1>
            <p className="text-lg text-text-secondary">
              Two service divisions, one approach: use technology to deliver
              better results, faster, and at scale. Every engagement is backed
              by the full Stay Starving infrastructure.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Services */}
      {SERVICES.map((service, i) => (
        <section
          key={service.name}
          className={`py-20 ${i % 2 === 1 ? "bg-surface" : ""}`}
        >
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <FadeInOnScroll>
                <div className="p-4 rounded-lg bg-gold/10 w-fit mb-4">
                  <service.icon size={32} className="text-gold" />
                </div>
                <h2 className="text-3xl font-bold mb-2">{service.name}</h2>
                <p className="text-gold font-medium mb-4">{service.tagline}</p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  {service.description}
                </p>
                {"pricing" in service && (
                  <div className="p-5 rounded-lg border border-gold/20 bg-gold/5 mb-6">
                    <p className="text-sm text-text-muted mb-1">Pricing</p>
                    <p className="text-xl font-bold text-gold">
                      {service.pricing}
                    </p>
                  </div>
                )}
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gold text-black font-semibold rounded hover:bg-gold-light transition-colors"
                >
                  {service.cta} <ArrowRight size={16} className="ml-2" />
                </a>
                {"links" in service && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {(service as { links: { label: string; url: string; icon: string }[] }).links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold text-sm font-medium rounded hover:bg-gold/10 transition-colors"
                      >
                        {link.icon === "instagram" ? <Instagram size={14} /> : <Globe size={14} />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.2}>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border bg-surface-elevated"
                    >
                      <Check
                        size={18}
                        className="text-gold mt-0.5 shrink-0"
                      />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeInOnScroll>
            </div>
          </Container>
        </section>
      ))}

      <CTABanner
        heading="Ready to Build?"
        subtext="Tell us what you need. We'll design the system, build it, and keep it running."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
