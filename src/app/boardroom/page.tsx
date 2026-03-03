import type { Metadata } from "next";
import BoardroomContent from "./BoardroomContent";

export const metadata: Metadata = {
  title: "The Boardroom — Premium Membership for Operators",
  description:
    "The Boardroom is Stay Starving's premium membership community. Three course tracks (AI Systems, Real Estate, Stock Market & Options), gamified progression from Associate to C-Suite, monthly AMAs, and a private community of operators building real wealth through systems.",
  alternates: { canonical: "https://staystarving.com/boardroom" },
};

export default function BoardroomPage() {
  return <BoardroomContent />;
}
