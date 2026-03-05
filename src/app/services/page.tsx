import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "AI Automation & Real Estate Services — LuxCor AI + Trey Cooper Realty",
  description:
    "Custom AI automation starting at $997 (voice agents, workflows, AI agents) via LuxCor AI. Licensed Florida Realtor specializing in multifamily & commercial. 6+ client projects delivered.",
  alternates: { canonical: "https://staystarving.com/services" },
};

const luxcorServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://staystarving.com/services#luxcor-ai",
  name: "LuxCor AI — AI Automation & Consulting",
  description:
    "Custom AI automation solutions built on the WAT Framework. AI agent development, voice agents, workflow automation, and business process optimization. Starting at $997.",
  provider: {
    "@type": "Organization",
    "@id": "https://staystarving.com/#organization",
    name: "Stay Starving Holdings LLC",
  },
  serviceType: "AI Automation Consulting",
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    price: "997",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "997",
      priceCurrency: "USD",
      description: "Starting price for AI Workflow Audit",
    },
  },
  url: "https://luxcor.tech",
};

const realtyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://staystarving.com/services#realty",
  name: "Trey Cooper Realty — Licensed Florida Realtor",
  description:
    "Licensed real estate agent services specializing in multifamily and commercial properties. 3 houses sold in 2025. Commission-based pricing.",
  provider: {
    "@type": "Person",
    "@id": "https://staystarving.com/about#person",
    name: "Charles Cooper III",
  },
  serviceType: "Real Estate Services",
  areaServed: {
    "@type": "State",
    name: "Florida",
  },
  url: "https://staystarving.com/services",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://staystarving.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://staystarving.com/services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={luxcorServiceSchema} />
      <JsonLd data={realtyServiceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ServicesContent />
    </>
  );
}
