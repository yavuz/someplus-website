import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "The privacy approach behind someplus.work products.",
};

export default function EnglishPrivacyPage() {
  return (
    <InfoPage
      locale="en"
      eyebrow="Privacy"
      title="Trust is part of the product."
      intro="We aim to build products with understandable permissions, the smallest practical access surface, and no unnecessary data collection."
      sections={[
        {
          title: "Data minimization",
          body: "We prefer not to request data that a feature does not need and to keep processing on the device whenever practical.",
        },
        {
          title: "Product-specific terms",
          body: "Permissions and data flows can differ between products. The privacy disclosure on each product’s official store page is the current source of truth.",
        },
        {
          title: "Third-party services",
          body: "When a product works with an external service, that service’s own privacy terms may also apply. We aim to make integrations clear.",
        },
        {
          title: "Changes",
          body: "When product behavior or data use changes materially, we update the relevant product description and privacy information.",
        },
      ]}
      backLabel="Back to home"
    />
  );
}
