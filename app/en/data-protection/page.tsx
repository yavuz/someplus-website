import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Data protection notice",
  description: "How we process personal data shared through our website.",
  alternates: {
    canonical: "/en/data-protection",
    languages: { tr: "/kvkk", en: "/en/data-protection" },
  },
};

export default function DataProtectionPage() {
  const controller = company.legalName || company.brand;

  return (
    <InfoPage
      locale="en"
      eyebrow="Data protection"
      title="Personal data protection notice"
      intro={`Under the Turkish Personal Data Protection Law No. 6698 (“KVKK”), ${controller}, as the data controller, informs you about how personal data shared through our website is processed.`}
      sections={[
        {
          title: "Data we process",
          body: "Your name, company name, email address, phone number, and message content shared through the quote and contact form.",
        },
        {
          title: "Purposes",
          body: "To evaluate your request, prepare a quote, contact you, and carry out any resulting contract process.",
        },
        {
          title: "Legal basis and collection",
          body: "Data is collected electronically through the website form and processed on the legal bases of being directly related to the formation or performance of a contract and the legitimate interest of the data controller, as set out in Article 5 of KVKK.",
        },
        {
          title: "Transfers",
          body: "Your data may be shared, limited to the purposes above and with appropriate safeguards, with service providers we work with, such as for email delivery. Their servers may be located abroad.",
        },
        {
          title: "Retention",
          body: "Data is kept for as long as the purpose requires and for the periods set by applicable law, then deleted, destroyed, or anonymized.",
        },
        {
          title: "Your rights",
          body: `Under Article 11 of KVKK you may learn whether your data is processed, request information, ask for correction or deletion, and object to processing. Send your requests to ${company.email}.`,
        },
      ]}
      backLabel="Back to home"
    />
  );
}
