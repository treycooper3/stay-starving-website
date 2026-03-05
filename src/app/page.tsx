import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DivisionsGrid from "@/components/sections/DivisionsGrid";
import CTABanner from "@/components/sections/CTABanner";
import NewsletterSection from "@/components/sections/NewsletterSection";
import JsonLd from "@/components/seo/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://staystarving.com/#organization",
  name: "Stay Starving Holdings LLC",
  legalName: "Stay Starving Holdings LLC",
  url: "https://staystarving.com",
  logo: {
    "@type": "ImageObject",
    url: "https://staystarving.com/logos/stay_starving_logo.png",
    width: 512,
    height: 512,
  },
  description:
    "Stay Starving Holdings LLC operates 9 divisions across AI automation (LuxCor AI — starting at $997), real estate (Trey Cooper Realty — 3 houses sold in 2025), education (The Boardroom — free, 36+ lessons), fashion (KayphoriaX — 7 NYFW seasons), media (Stay Starving Media — 12+ videos), drone services (Opulent Sky Solutions), and strategic investments. Founded by Charles 'Trey' Cooper III, licensed Florida Realtor and AI systems architect.",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Charles Cooper III",
    alternateName: "Trey Cooper",
    jobTitle: "Founder & CEO",
    url: "https://staystarving.com/about",
  },
  sameAs: [
    "https://www.youtube.com/@TreyCooper.",
    "https://www.instagram.com/staystarvingofficial/",
    "https://x.com/treythesavage3",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Stay Starving Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LuxCor AI — AI Workflow Audit",
          description:
            "Custom AI automation audit using the WAT Framework. Identifies automation opportunities across your business workflows.",
        },
        price: "997",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LuxCor AI — Growth AI Agent Retainer",
          description:
            "Monthly AI agent development and maintenance. Custom AI agents, voice agents, and workflow automation.",
        },
        price: "4500",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "The Boardroom — Free Wealth Building Community",
          description:
            "Free membership community with 36+ lessons across AI, real estate, and investing tracks. No credit card required.",
        },
        price: "0",
        priceCurrency: "USD",
      },
    ],
  },
  subOrganization: [
    {
      "@type": "Organization",
      name: "LuxCor AI",
      url: "https://staystarving.com/portfolio/luxcor-ai",
      description:
        "Enterprise AI consulting and automation agency. Builds production-grade AI systems using the proprietary WAT framework (Workflows, Agents, Tools) for workflow automation, custom AI agent development, and generative AI strategy.",
    },
    {
      "@type": "Organization",
      name: "Stay Starving Media",
      url: "https://staystarving.com/portfolio/stay-starving-media",
      description:
        "Full-service media production and content distribution engine. YouTube, LinkedIn, email — building audiences that convert across every monetization layer.",
    },
    {
      "@type": "Organization",
      name: "C6 Properties LLC",
      url: "https://staystarving.com/portfolio/c6-properties",
      description:
        "Real estate investment and short-term rental operations. Dynamic pricing, automated guest communication, and smart home technology for maximum cash flow.",
    },
    {
      "@type": "Organization",
      name: "The Boardroom",
      url: "https://staystarving.com/portfolio/the-boardroom",
      description:
        "Premium membership community for operators building wealth through AI, real estate, and investing. Three course tracks, gamified progression from Associate to C-Suite.",
    },
    {
      "@type": "Organization",
      name: "Stay Starving Ventures",
      url: "https://staystarving.com/portfolio/stay-starving-ventures",
      description:
        "Strategic investment arm deploying capital into creators, automation startups, and emerging opportunities aligned with the Stay Starving ecosystem.",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://staystarving.com/#website",
  url: "https://staystarving.com",
  name: "Stay Starving",
  publisher: { "@id": "https://staystarving.com/#organization" },
  description:
    "Official website of Stay Starving — a luxury holding company with divisions in AI consulting, media production, digital products, real estate, and contracting. Target: $100M+ diversified holdings.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Stay Starving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stay Starving is a systems-driven luxury holding company founded by Charles 'Trey' Cooper III. It operates across nine divisions including AI consulting (LuxCor AI), media production (Stay Starving Media), real estate (C6 Properties), education (The Boardroom), strategic investments (Stay Starving Ventures), fashion (KayphoriaX), drone services (Opulent Sky Solutions), and specialty contracting. The company targets $100M+ in diversified holdings through systems-first wealth building.",
      },
    },
    {
      "@type": "Question",
      name: "What is LuxCor AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LuxCor AI is the AI consulting division of Stay Starving Holdings LLC. It specializes in enterprise workflow automation, custom AI agent development, and generative AI strategy using the proprietary WAT framework (Workflows, Agents, Tools). The WAT framework separates probabilistic AI reasoning from deterministic code execution, achieving higher reliability than end-to-end AI approaches.",
      },
    },
    {
      "@type": "Question",
      name: "What is the WAT framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The WAT framework (Workflows, Agents, Tools) is a three-layer AI systems architecture developed by LuxCor AI. Workflows are markdown SOPs defining objectives and edge cases. Agents are AI decision-makers that read workflows and orchestrate execution. Tools are deterministic Python scripts that handle API calls, data transformations, and file operations. This separation ensures high accuracy in multi-step AI operations — a five-step AI workflow at 90% per step yields only 59% end-to-end, but deterministic tools bring per-step execution to near 100%.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Stay Starving operate in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stay Starving operates across AI consulting and automation (LuxCor AI), media production and content distribution (Stay Starving Media), real estate investment and short-term rentals (C6 Properties), education and community (The Boardroom), strategic investments (Stay Starving Ventures), high fashion (KayphoriaX), drone services (Opulent Sky Solutions), youth mentorship (Stay Starving Foundation), and licensed real estate services (Trey Cooper Realty).",
      },
    },
    {
      "@type": "Question",
      name: "Who founded Stay Starving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stay Starving was founded by Charles 'Trey' Cooper III, a licensed Florida Realtor, AI systems architect, and serial entrepreneur. He began investing in stocks and crypto at 18, became a licensed Realtor at 22, purchased his first investment property at 25, and established Stay Starving Holdings LLC to build a diversified portfolio targeting $100M+ through systems-driven wealth building.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI automation cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LuxCor AI offers three pricing tiers: a Starter AI Workflow Audit at $997 (one-time), a Growth AI Agent Retainer at $4,500/month for ongoing AI agent development and maintenance, and Enterprise Custom AI Builds ranging from $30,000 to $50,000 for full-scale AI infrastructure. All engagements use the proprietary WAT Framework for production-grade reliability.",
      },
    },
    {
      "@type": "Question",
      name: "Is The Boardroom free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Boardroom is a completely free membership community with 36+ lessons across three tracks: AI Systems, Real Estate, and Stock Market & Options. No credit card required. Members progress through gamified ranks from Associate to C-Suite based on engagement and results. Join at staystarving.com/boardroom.",
      },
    },
    {
      "@type": "Question",
      name: "Does Stay Starving offer real estate services in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Trey Cooper Realty is a licensed Florida real estate service specializing in multifamily and commercial properties. Charles 'Trey' Cooper III is a licensed Florida Realtor who has sold 3 houses in 2025. The service combines traditional real estate expertise with AI-powered lead qualification and market analysis.",
      },
    },
    {
      "@type": "Question",
      name: "What was KayphoriaX featured at New York Fashion Week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KayphoriaX, the high fashion brand affiliated with Stay Starving Holdings, has been featured across 7 seasons of New York Fashion Week (NYFW). The brand focuses on body positivity, creative self-expression, and diversity in fashion. The KXSS collaboration with Stay Starving offers premium streetwear hoodies and sweatpants.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <TestimonialsSection />
      <DivisionsGrid />
      <CTABanner />
      <NewsletterSection />
    </>
  );
}
