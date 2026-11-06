import type { Metadata } from "next";
import { EzanPage } from "@/components/ezan-page";

const description =
  "Accurate prayer times for your location, a live Qibla compass, the Holy Quran, duas and a dhikr counter. Free for iPhone, Apple Watch and Android.";

export const metadata: Metadata = {
  title: "Ezan – Prayer Times & Qibla",
  description,
  alternates: {
    canonical: "/en/ezan",
    languages: {
      tr: "/ezan",
      en: "/en/ezan",
    },
  },
  openGraph: {
    title: "Ezan – Prayer Times & Qibla",
    description,
    images: [{ url: "/images/ezan/icon.png", width: 512, height: 512, alt: "Ezan" }],
  },
  twitter: {
    card: "summary",
    title: "Ezan – Prayer Times & Qibla",
    description,
    images: ["/images/ezan/icon.png"],
  },
  other: {
    "apple-itunes-app": "app-id=713708943",
  },
};

export default function EnglishPage() {
  return <EzanPage locale="en" />;
}
