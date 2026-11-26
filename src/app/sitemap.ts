import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { guides } from "@/data/guides";
import { products } from "@/data/products";
import { siteOrigin } from "@/lib/site";

const latest = (dates: string[]) => [...dates].sort().at(-1) ?? "2026-11-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  if (!origin) return [];
  const dated = (path: string, lastModified: string) => ({
    url: `${origin}${path}`,
    lastModified,
  });
  return [
    dated("/", "2026-11-26"),
    dated("/desk", "2026-11-22"),
    dated("/guides", "2026-11-22"),
    dated("/method", "2026-11-22"),
    dated("/disclosure", "2026-11-22"),
    dated("/privacy", "2026-11-22"),
    ...categories.map((category) => dated(`/categories/${category.slug}`, "2026-11-22")),
    ...products.map((product) => dated(`/products/${product.slug}`, product.updated)),
    ...guides.map((guide) => dated(`/guides/${guide.slug}`, guide.updated)),
    dated("/compare", latest(comparisons.map((c) => c.updated))),
    ...comparisons.map((c) => dated(`/compare/${c.slug}`, c.updated)),
  ];
}
