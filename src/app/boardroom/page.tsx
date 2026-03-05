import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import BoardroomContent from "./BoardroomContent";

export const metadata: Metadata = {
  title: "The Boardroom — Free AI, Real Estate & Investing Courses | Join Now",
  description:
    "Join free: 36+ lessons across AI automation, real estate investing, and stock market trading. Gamified progression from Associate to C-Suite. No credit card required. Built for operators.",
  alternates: { canonical: "https://staystarving.com/boardroom" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://staystarving.com/boardroom#course",
  name: "The Boardroom — Wealth Building Membership Community",
  description:
    "Membership community with three course tracks: AI Systems, Real Estate, and Stock Market & Options. Gamified progression from Associate to C-Suite.",
  provider: {
    "@type": "Organization",
    "@id": "https://staystarving.com/#organization",
    name: "Stay Starving Holdings LLC",
  },
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://staystarving.com/boardroom",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "AI Systems",
      description:
        "Learn to build and deploy AI automation systems for business.",
      courseMode: "online",
    },
    {
      "@type": "CourseInstance",
      name: "Real Estate",
      description:
        "Real estate investing fundamentals through advanced portfolio building.",
      courseMode: "online",
    },
    {
      "@type": "CourseInstance",
      name: "Stock Market & Options",
      description:
        "Stock market analysis and options trading strategies for wealth building.",
      courseMode: "online",
    },
  ],
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
      name: "The Boardroom",
      item: "https://staystarving.com/boardroom",
    },
  ],
};

export default function BoardroomPage() {
  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BoardroomContent />
    </>
  );
}
