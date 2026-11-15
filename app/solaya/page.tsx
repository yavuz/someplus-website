import type { Metadata } from "next";
import { SolayaPage } from "@/components/solaya-page";

const title = "Solaya – Dışarı çıkmak için en iyi an";
const description =
  "Rakam yok, tablo yok. Solaya havayı okur ve tek bir ışığa çevirir: altınsa çık. Koşu, yürüyüş, çocuklar, köpek, bisiklet ve çamaşır için günün en iyi saati.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/solaya",
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
  return <SolayaPage locale="tr" />;
}
