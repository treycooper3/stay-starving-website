import type { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Stay Starving apparel — KXSS streetwear, LEVITY lifestyle, and Opulent Sky premium collections.",
};

export default function ShopPage() {
  return <ShopContent />;
}
