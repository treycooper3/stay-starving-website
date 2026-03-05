import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Stay Starving — AI Consulting, Real Estate & Partnerships",
  description:
    "Get in touch for AI automation services (LuxCor AI), Florida real estate, Boardroom membership, or partnerships. We respond within 48 hours.",
  alternates: { canonical: "https://staystarving.com/contact" },
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
      name: "Contact",
      item: "https://staystarving.com/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ContactContent />
    </>
  );
}
