import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Charles Cooper III & Stay Starving Holdings",
  description:
    "Founded by Charles 'Trey' Cooper III — investor at 18, Florida Realtor at 22, property owner at 25. Stay Starving Holdings is a systems-driven holding company targeting $100M+ in diversified holdings across AI, media, real estate, and more.",
  alternates: { canonical: "https://staystarving.com/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
