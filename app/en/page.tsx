import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: { absolute: "someplus.work — Enterprise Software and Digital Solutions" },
  description:
    "Enterprise software, corporate websites, e-commerce, mobile apps, and AI solutions, delivered end to end from idea to launch.",
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
