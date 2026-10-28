import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { findService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug.en }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug, "en");
  if (!service) return {};

  return {
    title: service.title.en,
    description: service.summary.en,
    alternates: {
      canonical: `/en/services/${service.slug.en}`,
      languages: {
        tr: `/hizmetler/${service.slug.tr}`,
        en: `/en/services/${service.slug.en}`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const service = findService((await params).slug, "en");
  if (!service) notFound();

  return <ServicePage service={service} locale="en" />;
}
