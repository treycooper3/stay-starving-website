import type { Metadata } from "next";
import MediaContent from "./MediaContent";

export const metadata: Metadata = {
  title: "Media — AI, Real Estate & Wealth Building Content",
  description:
    "Stay Starving Media content hub — YouTube, podcasts, and articles on AI automation, real estate investing, the WAT framework, and systems-driven wealth building by Charles Cooper III.",
  alternates: { canonical: "https://staystarving.com/media" },
};

export default function MediaPage() {
  return <MediaContent />;
}
