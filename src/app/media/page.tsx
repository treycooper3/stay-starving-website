import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import MediaContent from "./MediaContent";

export const metadata: Metadata = {
  title: "AI Automation & Wealth Building Videos — Stay Starving Media",
  description:
    "Watch 12+ videos on AI automation, no-code tools, real estate investing, and wealth building systems. New content weekly from Charles 'Trey' Cooper III on YouTube.",
  alternates: { canonical: "https://staystarving.com/media" },
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
      name: "Media",
      item: "https://staystarving.com/media",
    },
  ],
};

const videoSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "I Built a Website in 5 Minutes (Gemini + Claude Code)",
    description:
      "Watch how AI tools like Gemini and Claude Code can build a full website in under 5 minutes. AI automation tutorial from Stay Starving Media.",
    thumbnailUrl: "https://i.ytimg.com/vi/K4wFDfi-sgg/hqdefault.jpg",
    uploadDate: "2026-02-06",
    contentUrl: "https://www.youtube.com/watch?v=K4wFDfi-sgg",
    embedUrl: "https://www.youtube.com/embed/K4wFDfi-sgg",
    publisher: {
      "@type": "Organization",
      name: "Stay Starving Media",
      logo: {
        "@type": "ImageObject",
        url: "https://staystarving.com/logos/stay_starving_logo.png",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Build a Website FAST with AI! Gemini Does the Heavy Lifting!",
    description:
      "Quick tutorial showing how to use Google Gemini AI to rapidly build websites with no coding experience. AI automation for entrepreneurs.",
    thumbnailUrl: "https://i.ytimg.com/vi/XZKu9VpmHFE/hqdefault.jpg",
    uploadDate: "2026-02-17",
    contentUrl: "https://www.youtube.com/watch?v=XZKu9VpmHFE",
    embedUrl: "https://www.youtube.com/embed/XZKu9VpmHFE",
    publisher: {
      "@type": "Organization",
      name: "Stay Starving Media",
      logo: {
        "@type": "ImageObject",
        url: "https://staystarving.com/logos/stay_starving_logo.png",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "AI NEWS DECODED: Claude Code Cuts Through the Hype!",
    description:
      "Breaking down the latest AI news and explaining how Claude Code is changing software development. AI automation insights for business owners.",
    thumbnailUrl: "https://i.ytimg.com/vi/byOmDB0MUxs/hqdefault.jpg",
    uploadDate: "2026-02-15",
    contentUrl: "https://www.youtube.com/watch?v=byOmDB0MUxs",
    embedUrl: "https://www.youtube.com/embed/byOmDB0MUxs",
    publisher: {
      "@type": "Organization",
      name: "Stay Starving Media",
      logo: {
        "@type": "ImageObject",
        url: "https://staystarving.com/logos/stay_starving_logo.png",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Unlocking AI Power: Building, Breaking, and Mastering Automations!",
    description:
      "Deep dive into building AI automations that actually work in production. Learn the WAT Framework approach to reliable AI systems.",
    thumbnailUrl: "https://i.ytimg.com/vi/U1LpgdR1_1M/hqdefault.jpg",
    uploadDate: "2026-02-03",
    contentUrl: "https://www.youtube.com/watch?v=U1LpgdR1_1M",
    embedUrl: "https://www.youtube.com/embed/U1LpgdR1_1M",
    publisher: {
      "@type": "Organization",
      name: "Stay Starving Media",
      logo: {
        "@type": "ImageObject",
        url: "https://staystarving.com/logos/stay_starving_logo.png",
      },
    },
  },
];

export default function MediaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {videoSchemas.map((schema) => (
        <JsonLd key={schema.contentUrl} data={schema} />
      ))}
      <MediaContent />
    </>
  );
}
