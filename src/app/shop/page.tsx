import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop KXSS — KayphoriaX x Stay Starving Streetwear | 7 NYFW Seasons",
  description:
    "KXSS streetwear collection from KayphoriaX x Stay Starving — the brand featured across 7 seasons of New York Fashion Week. Premium hoodies, sweatpants, and limited drops.",
  alternates: {
    canonical: "https://staystarving.com/shop",
  },
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
      name: "Shop",
      item: "https://staystarving.com/shop",
    },
  ],
};

export default function ShopPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ShopContent />
    </>
  );
}
