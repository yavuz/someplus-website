import type { Metadata } from "next";
import { SofraPlanPage } from "@/components/sofraplan-page";

export const metadata: Metadata = {
  title: "SofraPlan — Kurumsal Yemek ve Tabldot Yönetim Platformu",
  description:
    "Toplu yemek ve tabldot üreticileri için reçeteden hakedişe tek zincir: çift fire hesabı, 4 kap menü dengesi, aşçıbaşı mutfak föyü, emanet küvet takibi ve asgari garanti hakedişi.",
  alternates: {
    canonical: "/sofraplan",
    languages: {
      tr: "/sofraplan",
      en: "/en/sofraplan",
    },
  },
};

export default function Page() {
  return <SofraPlanPage locale="tr" />;
}
