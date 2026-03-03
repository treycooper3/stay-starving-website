import type { MetadataRoute } from "next";
import { DIVISIONS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://staystarving.com";

  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/media", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/boardroom", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/shop", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const divisionPages = DIVISIONS.map((div) => ({
    path: `/portfolio/${div.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...divisionPages].map(
    ({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );
}
