import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { findService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug.tr }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug, "tr");
  if (!service) return {};

  return {
    title: service.title.tr,
    description: service.summary.tr,
    alternates: {
      canonical: `/hizmetler/${service.slug.tr}`,
      languages: {
        tr: `/hizmetler/${service.slug.tr}`,
        en: `/en/services/${service.slug.en}`,
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const service = findService((await params).slug, "tr");
  if (!service) notFound();

  return <ServicePage service={service} locale="tr" />;
}
