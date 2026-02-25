import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, real estate services, and general contracting. Powered by Stay Starving Holdings.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
