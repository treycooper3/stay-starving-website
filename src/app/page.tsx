import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import StatsSection from "@/components/sections/StatsSection";
import DivisionsGrid from "@/components/sections/DivisionsGrid";
import CTABanner from "@/components/sections/CTABanner";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <DivisionsGrid />
      <CTABanner />
      <NewsletterSection />
    </>
  );
}
