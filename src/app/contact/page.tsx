import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Stay Starving Holdings. Inquiries, partnerships, and membership applications.",
};

export default function ContactPage() {
  return <ContactContent />;
}
