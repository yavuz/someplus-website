import type { Metadata } from "next";
import { InspectionPlatformPage } from "@/components/inspection-platform-page";

export const metadata: Metadata = {
  title: "17020 Inspection Management Platform",
  description:
    "One chain from work order to signed report for ISO/IEC 17020 inspection bodies: planning, field inspection, four-eyes approval, PDF reports, and a client portal.",
  alternates: {
    canonical: "/en/17020",
    languages: {
      tr: "/17020",
      en: "/en/17020",
    },
  },
};

export default function EnglishPage() {
  return <InspectionPlatformPage locale="en" />;
}
