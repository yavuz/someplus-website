import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: { absolute: "someplus.work — Kurumsal Yazılım ve Dijital Çözümler" },
  alternates: {
    canonical: "/",
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

export default function Page() {
  return <HomePage locale="tr" />;
}
