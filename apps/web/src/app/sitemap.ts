import type { MetadataRoute } from "next";

const baseUrl = "https://www.Al-FahadSecurityGuards.com";
const routes = ["", "/about", "/services", "/sectors", "/projects", "/clients", "/blog", "/careers", "/contact", "/quote"];
const locales = ["ar", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    }))
  );
}
