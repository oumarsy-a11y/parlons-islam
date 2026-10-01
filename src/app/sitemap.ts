import type { MetadataRoute } from "next";

import { getSourates } from "@/services/quranService";
import { hadiths } from "@/data/hadiths";
import { tassawuf } from "@/data/tassawuf";
import { histoireTassawuf } from "@/data/histoireTassawuf";

const baseUrl = "https://parlons-islam.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sourates = await getSourates();

  const staticRoutes = [
    "",
    "/contact",
    "/notre-histoire",
    "/coran",
    "/recitateurs",
    "/hadiths",
    "/fiqh-malikite",
    "/tassawuf",
    "/tassawuf/definition",
    "/tassawuf/dhikr",
    "/tassawuf/histoire",
    "/tijaniyya",
    "/tijaniyya/histoire",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const quranEntries: MetadataRoute.Sitemap = sourates.map(
    (sourate: { number: number }) => ({
      url: `${baseUrl}/coran/${sourate.number}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const hadithEntries: MetadataRoute.Sitemap = hadiths.map((hadith) => ({
    url: `${baseUrl}/hadiths/${hadith.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tassawufEntries: MetadataRoute.Sitemap = tassawuf.map((article) => ({
    url: `${baseUrl}/tassawuf/${article.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const histoireTassawufEntries: MetadataRoute.Sitemap =
    histoireTassawuf.map((chapitre) => ({
      url: `${baseUrl}/tassawuf/histoire/${chapitre.id}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    ...staticEntries,
    ...quranEntries,
    ...hadithEntries,
    ...tassawufEntries,
    ...histoireTassawufEntries,
  ];
}