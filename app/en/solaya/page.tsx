import type { Metadata } from "next";
import { SolayaPage } from "@/components/solaya-page";

const title = "Solaya – The best time to be outside";
const description =
  "No numbers, no charts. Solaya reads the weather and turns it into one light: gold means go. The best hour of the day for running, walking, kids, the dog, cycling and laundry.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/solaya",
    languages: {
      tr: "/solaya",
      en: "/en/solaya",
    },
  },
  openGraph: {
    title,
    description,
    images: [{ url: "/images/solaya/icon.png", width: 512, height: 512, alt: "Solaya" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/solaya/icon.png"],
  },
  other: {
    "apple-itunes-app": "app-id=6834972254",
  },
};

export default function Page() {
  return <SolayaPage locale="en" />;
}
