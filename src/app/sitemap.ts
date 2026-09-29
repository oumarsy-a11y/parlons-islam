import type { MetadataRoute } from "next";

const baseUrl = "https://parlons-islam.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/coran",
    "/recitateurs",
    "/hadiths",
    "/fiqh-malikite",
    "/tassawuf",
    "/tijaniyya",
    "/notre-histoire",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
