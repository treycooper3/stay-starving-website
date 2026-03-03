import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services — AI Automation, Real Estate, Contracting",
  description:
    "Stay Starving provides enterprise AI automation through LuxCor AI (using the WAT framework), licensed real estate services in Florida, and general contracting through C&C Contracting and TnD Mechanical.",
  alternates: { canonical: "https://staystarving.com/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
