import type { Metadata } from "next";
import BoardroomContent from "./BoardroomContent";

export const metadata: Metadata = {
  title: "The Boardroom",
  description:
    "Join The Boardroom by Stay Starving. Premium membership for operators building wealth through AI, real estate, and investing.",
};

export default function BoardroomPage() {
  return <BoardroomContent />;
}
