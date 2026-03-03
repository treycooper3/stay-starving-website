import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Stay Starving — Partnerships & Inquiries",
  description:
    "Contact Stay Starving Holdings LLC for AI consulting inquiries (LuxCor AI), media production partnerships, real estate opportunities, Boardroom membership, or general business inquiries.",
  alternates: { canonical: "https://staystarving.com/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
