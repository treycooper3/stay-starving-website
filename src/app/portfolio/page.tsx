import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the nine divisions of Stay Starving Holdings — real estate, media, AI, education, apparel, and more.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
