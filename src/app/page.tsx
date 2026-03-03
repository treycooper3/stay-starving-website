import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import StatsSection from "@/components/sections/StatsSection";
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
    "A systems-driven luxury holding company building $100M+ in diversified holdings across AI consulting, media production, digital products, real estate investment, and specialty contracting. Founded on the principle that wealth is engineered through systems, not luck.",
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
      <DivisionsGrid />
      <CTABanner />
      <NewsletterSection />
    </>
  );
}
