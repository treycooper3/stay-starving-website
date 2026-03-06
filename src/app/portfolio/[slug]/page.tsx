import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DIVISIONS } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import DivisionDetailContent from "./DivisionDetailContent";

export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const division = DIVISIONS.find((d) => d.slug === slug);
  if (!division) return {};

  const canonicalUrl = `https://staystarving.com/portfolio/${slug}`;

  const titleMap: Record<string, string> = {
    "luxcor-ai": "LuxCor AI — Custom AI Automation, Voice Agents & Workflow Consulting",
    "the-boardroom": "The Boardroom — Free Wealth Building Community & Courses",
    "trey-cooper-realty": "Trey Cooper Realty — Florida Realtor | Multifamily & Commercial",
    "kayphoriax": "KayphoriaX — High Fashion Brand | 7 NYFW Seasons",
    "c3-properties": "C3 Properties — Airbnb & Short-Term Rental Investing",
    "stay-starving-media": "Stay Starving Media — AI & Wealth Building YouTube Channel",
    "opulent-sky-solutions": "Opulent Sky Solutions — Professional Drone Services & Aerial Photography",
    "stay-starving-ventures": "Stay Starving Ventures — Strategic Investment Arm",
    "stay-starving-foundation": "Stay Starving Foundation — Youth Mentorship & Financial Literacy",
  };

  return {
    title: titleMap[slug] || division.name,
    description: division.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${division.name} | Stay Starving Holdings`,
      description: division.description,
      siteName: "Stay Starving",
      images: [
        {
          url: "/logos/stay_starving_logo.png",
          width: 512,
          height: 512,
          alt: `${division.name} — Stay Starving Holdings`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${division.name} | Stay Starving`,
      description: division.description,
    },
  };
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const division = DIVISIONS.find((d) => d.slug === slug);
  if (!division) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://staystarving.com/portfolio/${slug}#service`,
    name: division.name,
    description: division.description,
    provider: {
      "@type": "Organization",
      "@id": "https://staystarving.com/#organization",
      name: "Stay Starving Holdings LLC",
    },
    serviceType: division.category.replace("_", " "),
    url: `https://staystarving.com/portfolio/${slug}`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: division.name,
        item: `https://staystarving.com/portfolio/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <DivisionDetailContent division={division} />
    </>
  );
}
