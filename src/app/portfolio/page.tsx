import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio — 9 Divisions Across AI, Media, Real Estate & More",
  description:
    "Explore all nine divisions of Stay Starving Holdings LLC: LuxCor AI (AI consulting), Stay Starving Media, C6 Properties (real estate), The Boardroom (education), KayphoriaX (fashion), Opulent Sky Solutions (drones), Stay Starving Ventures, and more.",
  alternates: { canonical: "https://staystarving.com/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
