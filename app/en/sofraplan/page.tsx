import type { Metadata } from "next";
import { SofraPlanPage } from "@/components/sofraplan-page";

export const metadata: Metadata = {
  title: "SofraPlan — Contract Catering & Food Service Platform",
  description:
    "One chain from recipe costing to billing for contract caterers: dual-waste math, 4-course menu balance, kitchen production sheets, container tracking, and guaranteed minimum billing.",
  alternates: {
    canonical: "/en/sofraplan",
    languages: {
      tr: "/sofraplan",
      en: "/en/sofraplan",
    },
  },
};

export default function EnglishPage() {
  return <SofraPlanPage locale="en" />;
}
