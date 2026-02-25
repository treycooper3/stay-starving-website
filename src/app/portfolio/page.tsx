import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the nine divisions of Stay Starving Holdings. Real estate, media, AI, education, apparel, and more.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
