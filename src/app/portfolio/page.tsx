import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio — 9 Divisions in AI, Real Estate, Fashion, Media & More",
  description:
    "Explore all divisions: LuxCor AI (6+ projects), Trey Cooper Realty (3 houses sold), KayphoriaX (7 NYFW seasons), The Boardroom (free courses), Stay Starving Media, C6 Properties, and more.",
  alternates: { canonical: "https://staystarving.com/portfolio" },
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
      name: "Portfolio",
      item: "https://staystarving.com/portfolio",
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PortfolioContent />
    </>
  );
}
