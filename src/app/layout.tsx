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
    default: "Stay Starving Holdings | AI Automation, Real Estate & Wealth Education",
    template: "%s | Stay Starving",
  },
  description:
    "AI automation services (LuxCor AI), wealth-building courses (The Boardroom, $19/mo), licensed Florida real estate (Trey Cooper Realty), and fashion (KayphoriaX — 7 NYFW seasons). Built by operators, for operators.",
  keywords: [
    "AI automation agency",
    "AI automation agency Florida",
    "custom AI agents",
    "AI voice agents for business",
    "WAT framework",
    "LuxCor AI",
    "Stay Starving",
    "wealth building community",
    "AI courses",
    "real estate investing courses",
    "Florida commercial real estate agent",
    "multifamily realtor Florida",
    "NYFW fashion brand",
    "KayphoriaX",
    "workflow automation",
    "AI agent development",
  ],
  verification: {
    google: "e-kIExMyNRnLMALdppOkBP9vJv-SKuGBWDJOVxyUWnw",
  },
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
    title: "Stay Starving Holdings | AI Automation, Real Estate & Wealth Education",
    description:
      "AI automation services, wealth-building courses ($19/mo), licensed Florida real estate, and high fashion — built by operators, for operators.",
    images: [
      {
        url: "/logos/stay_starving_logo.png",
        width: 512,
        height: 512,
        alt: "Stay Starving Holdings — AI Automation, Real Estate & Wealth Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay Starving Holdings | AI Automation & Wealth Education",
    description:
      "AI automation (LuxCor AI), wealth courses (The Boardroom, $19/mo), Florida real estate (Trey Cooper Realty). 6+ client projects. 7 NYFW seasons.",
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
