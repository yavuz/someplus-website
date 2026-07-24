import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://someplus.work";
  const updated = new Date("2026-07-24");

  return [
    { url: base, lastModified: updated, priority: 1 },
    { url: `${base}/en`, lastModified: updated, priority: 0.9 },
    { url: `${base}/privacy`, lastModified: updated, priority: 0.5 },
    { url: `${base}/en/privacy`, lastModified: updated, priority: 0.5 },
    { url: `${base}/support`, lastModified: updated, priority: 0.6 },
    { url: `${base}/en/support`, lastModified: updated, priority: 0.6 },
  ];
}
