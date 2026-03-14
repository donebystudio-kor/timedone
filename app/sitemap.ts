import type { MetadataRoute } from "next";
import { POSTS, CATEGORIES } from "@/constants/posts";

const BASE = "https://timedone.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...CATEGORIES.map((c) => ({
      url: `${BASE}/category/${c.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...POSTS.map((p) => ({
      url: `${BASE}/posts/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
