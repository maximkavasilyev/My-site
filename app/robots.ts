import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // витрина дизайн-системы — референс для разработки, не публичная страница
      disallow: "/design-system/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
