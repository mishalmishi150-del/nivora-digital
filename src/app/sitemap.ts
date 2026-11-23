
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nivora-digital-six.vercel.app";

  const pages = [
    "",
    "/about",
    "/services",
    "/contact",
    "/services/e-commerce-solutions",
    "/services/import-services",
    "/services/export-services",
    "/services/logistics-shipping",
    "/services/buyer-sourcing-support",
    "/services/web-development",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1 : page === "/services" ? 0.9 : 0.8,
  }));
}
