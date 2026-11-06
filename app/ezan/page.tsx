import type { Metadata } from "next";
import { EzanPage } from "@/components/ezan-page";

const description =
  "Bulunduğun yerin doğru namaz vakitleri, canlı kıble pusulası, Kur’an-ı Kerim, dualar ve zikirmatik. iPhone, Apple Watch ve Android için ücretsiz.";

export const metadata: Metadata = {
  title: "Ezan – Namaz Saatleri ve Kıble",
  description,
  alternates: {
    canonical: "/ezan",
    languages: {
      tr: "/ezan",
      en: "/en/ezan",
    },
  },
  openGraph: {
    title: "Ezan – Namaz Saatleri ve Kıble",
    description,
    images: [{ url: "/images/ezan/icon.png", width: 512, height: 512, alt: "Ezan" }],
  },
  twitter: {
    card: "summary",
    title: "Ezan – Namaz Saatleri ve Kıble",
    description,
    images: ["/images/ezan/icon.png"],
  },
  other: {
    "apple-itunes-app": "app-id=713708943",
  },
};

export default function Page() {
  return <EzanPage locale="tr" />;
}
