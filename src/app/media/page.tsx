import type { Metadata } from "next";
import MediaContent from "./MediaContent";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Watch the latest Stay Starving content — AI automation, real estate strategy, investing, and building wealth through systems.",
};

export default function MediaPage() {
  return <MediaContent />;
}
