import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Support",
  description: "Support center for someplus.work products.",
};

export default function EnglishSupportPage() {
  return (
    <InfoPage
      locale="en"
      eyebrow="Support"
      title="The right channel leads to a faster answer."
      intro="Identify the product where the issue occurs and include the details below to help us understand it quickly."
      sections={[
        {
          title: "Name the product",
          body: "Include the product name, your browser or platform, and the product version when available.",
        },
        {
          title: "Describe the issue",
          body: "Share what you expected, what happened instead, and the shortest steps needed to reproduce the problem.",
        },
        {
          title: "Share safely",
          body: "Screenshots can help, but make sure they do not expose personal details, messages, access keys, or private addresses.",
        },
        {
          title: "Contact us",
          body: "Use the support link on the product’s official Chrome, Firefox, WordPress, Adobe Commerce, or App Store page so the request is tied to the right product.",
        },
      ]}
      backLabel="Back to products"
    />
  );
}
