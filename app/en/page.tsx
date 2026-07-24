import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Small, powerful digital tools",
  description:
    "Lightweight, focused, and dependable products for Chrome, Firefox, WordPress, Adobe Commerce, and iOS.",
  alternates: {
    canonical: "/en",
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

export default function EnglishPage() {
  return <HomePage locale="en" />;
}
