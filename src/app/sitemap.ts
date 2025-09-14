import type { MetadataRoute } from "next";
import {
  listServices,
  listProducts,
  listPosts,
  listCaseStudies,
} from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL!;
  const staticRoutes = [
    "/",
    "/our-story",
    "/services",
    "/products",
    "/resources",
    "/careers",
    "/contact-us",
  ].map((p) => ({
    url: `${base}${p}`,
    changefreq: "weekly" as const,
    priority: 0.7,
  }));

  const [svcs, prods, posts, cases] = await Promise.all([
    listServices?.() ?? [],
    listProducts?.() ?? [],
    listPosts?.() ?? [],
    listCaseStudies?.() ?? [],
  ]);

  const dynamicRoutes = [
    ...svcs.map((s: any) => ({
      url: `${base}/services/${s.slug}`,
      changefreq: "weekly" as const,
      priority: 0.8,
    })),
    ...prods.map((p: any) => ({
      url: `${base}/products/${p.slug}`,
      changefreq: "weekly" as const,
      priority: 0.8,
    })),
    ...posts.map((b: any) => ({
      url: `${base}/blog/${b.slug}`,
      changefreq: "weekly" as const,
      priority: 0.6,
    })),
    ...cases.map((c: any) => ({
      url: `${base}/case-studies/${c.slug}`,
      changefreq: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
