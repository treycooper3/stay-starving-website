import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Charles 'Trey' Cooper III — AI Engineer, Florida Realtor & Founder",
  description:
    "Mechanical engineer (NC A&T), MS Management (UF), licensed Florida Realtor at 22, first property at 25. Built the WAT Framework for AI automation. Founder of Stay Starving Holdings.",
  alternates: { canonical: "https://staystarving.com/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://staystarving.com/about#person",
  name: "Charles Cooper III",
  alternateName: "Trey Cooper",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    "@id": "https://staystarving.com/#organization",
    name: "Stay Starving Holdings LLC",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "North Carolina A&T State University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Florida",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Licensed Florida Real Estate Agent",
  },
  knowsAbout: [
    "AI automation",
    "Real estate investing",
    "Mechanical engineering",
    "Wealth building systems",
  ],
  url: "https://staystarving.com/about",
  sameAs: [
    "https://www.youtube.com/@TreyCooper.",
    "https://www.instagram.com/staystarvingofficial/",
    "https://x.com/treythesavage3",
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
      name: "About",
      item: "https://staystarving.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />
      <AboutContent />
    </>
  );
}
