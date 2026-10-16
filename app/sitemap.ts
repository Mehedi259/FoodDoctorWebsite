import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

// Written once at build time, as required by static export
export const dynamic = "force-static";

// One entry per page per locale, each linking to its translated alternates
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/features", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const pageEntries = pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((code) => [code, `${SITE_URL}/${code}${page.path}`])
        ),
      },
    }))
  );

  // Posts exist in one language each, so they list no alternates
  const postEntries = routing.locales.flatMap((locale) =>
    getPosts(locale).map((post) => ({
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...pageEntries, ...postEntries];
}
