import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { products } from "@/data/products";
import type { Guide, Product } from "@/data/types";

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function productsIn(category: string) {
  return products.filter((product) => product.category === category);
}

export function heroProduct() {
  return products.find((product) => product.hero) ?? products[0];
}

export function spotlightProducts() {
  return products.filter((product) => product.spotlight);
}

export function relatedProducts(slugs: string[]) {
  return slugs
    .map((slug) => getProduct(slug))
    .filter((product): product is Product => Boolean(product));
}

export function searchDesk(raw: string) {
  const q = raw.trim().slice(0, 80);
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) {
    return { q, products: [] as Product[], guides: [] as Guide[] };
  }
  const matches = (parts: string[]) => {
    const hay = parts.join(" ").toLowerCase();
    return words.every((word) => hay.includes(word));
  };
  return {
    q,
    products: products.filter((product) =>
      matches([
        product.name,
        product.brand,
        product.verdict,
        product.dek,
        product.category,
        ...product.bestFor,
        ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
      ]),
    ),
    guides: guides.filter((guide) =>
      matches([guide.title, guide.dek, guide.description]),
    ),
  };
}
