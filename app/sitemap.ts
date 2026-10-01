import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://waterbubblepillar.com";
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/water-bubble-pillars", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/customization", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/applications", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about-us", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/faqs", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
