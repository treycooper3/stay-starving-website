import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Stay Starving Holdings. A diversified holding company engineering financial freedom through systems.",
};

export default function AboutPage() {
  return <AboutContent />;
}
