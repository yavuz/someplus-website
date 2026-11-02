import type { Metadata } from "next";
import { InspectionPlatformPage } from "@/components/inspection-platform-page";

export const metadata: Metadata = {
  title: "17020 Muayene Yönetim Platformu",
  description:
    "ISO/IEC 17020 kapsamında periyodik kontrol yapan muayene kuruluşları için iş emrinden imzalı rapora tek zincir: planlama, saha muayenesi, dört göz onay, PDF rapor ve müşteri portalı.",
  alternates: {
    canonical: "/17020",
    languages: {
      tr: "/17020",
      en: "/en/17020",
    },
  },
};

export default function Page() {
  return <InspectionPlatformPage locale="tr" />;
}
