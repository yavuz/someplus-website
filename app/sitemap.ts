import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://someplus.work";
  const updated = new Date("2026-10-28");

  return [
    { url: base, lastModified: updated, priority: 1 },
    { url: `${base}/en/`, lastModified: updated, priority: 0.9 },
    ...services.flatMap((service) => [
      { url: `${base}/hizmetler/${service.slug.tr}/`, lastModified: updated, priority: 0.8 },
      { url: `${base}/en/services/${service.slug.en}/`, lastModified: updated, priority: 0.7 },
    ]),
    { url: `${base}/kvkk/`, lastModified: updated, priority: 0.3 },
    { url: `${base}/en/data-protection/`, lastModified: updated, priority: 0.3 },
    { url: `${base}/privacy/`, lastModified: updated, priority: 0.5 },
    { url: `${base}/en/privacy/`, lastModified: updated, priority: 0.5 },
    { url: `${base}/support/`, lastModified: updated, priority: 0.6 },
    { url: `${base}/en/support/`, lastModified: updated, priority: 0.6 },
  ];
}
