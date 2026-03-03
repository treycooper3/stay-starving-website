import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://staystarving.com"),
  title: {
    default: "Stay Starving | Luxury Holding Company — AI, Media, Real Estate",
    template: "%s | Stay Starving",
  },
  description:
    "Stay Starving is a systems-driven holding company building $100M+ in diversified holdings across AI consulting (LuxCor AI), media production, digital products, real estate, and specialty contracting. Wealth is engineered through systems, not luck.",
  keywords: [
    "AI consulting agency",
    "luxury holding company",
    "AI automation",
    "WAT framework",
    "LuxCor AI",
    "Stay Starving",
    "media production company",
    "real estate investment",
    "wealth building systems",
    "AI agent development",
    "workflow automation",
    "digital products",
  ],
  authors: [{ name: "Charles Cooper III" }],
  creator: "Stay Starving Holdings LLC",
  publisher: "Stay Starving Holdings LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://staystarving.com",
    siteName: "Stay Starving",
    title: "Stay Starving | Luxury Holding Company — AI, Media, Real Estate",
    description:
      "Systems-driven holding company building $100M+ in diversified holdings across AI consulting, media production, digital products, real estate, and specialty contracting.",
    images: [
      {
        url: "/logos/stay_starving_logo.png",
        width: 512,
        height: 512,
        alt: "Stay Starving — Luxury Holding Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay Starving | Luxury Holding Company",
    description:
      "AI consulting, media production, digital products, real estate, and contracting under one executive brand. Target: $100M+ diversified holdings.",
    images: ["/logos/stay_starving_logo.png"],
    creator: "@treythesavage3",
  },
  alternates: {
    canonical: "https://staystarving.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body style={{ isolation: "isolate" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
