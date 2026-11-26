import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProductRow } from "@/components/product-row";
import { RichText } from "@/components/rich-text";
import { categories } from "@/data/categories";
import { getCategory, productsIn } from "@/lib/catalog";
import { abs, siteOrigin } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Shelf" };
  return {
    title: category.name,
    description: category.lede,
    alternates: siteOrigin()
      ? { canonical: `/categories/${category.slug}` }
      : undefined,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const products = productsIn(category.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Guidevale", item: abs("/") },
              {
                "@type": "ListItem",
                position: 2,
                name: category.name,
                item: abs(`/categories/${category.slug}`),
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: category.name,
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: product.name,
              url: abs(`/products/${product.slug}`),
            })),
          },
        ]}
      />
      <p className="text-sm text-muted-foreground">
        <Link href="/desk" className="hover:underline">
          The desk
        </Link>
        <span aria-hidden> / </span>
        {category.name}
      </p>
      <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-signal">
        {category.kicker.toUpperCase()}
      </p>
      <h1 className="font-heading mt-2 text-4xl tracking-tight sm:text-5xl">
        {category.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8">{category.lede}</p>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-muted-foreground">
        {category.body.map((paragraph) => (
          <RichText key={paragraph.slice(0, 24)} text={paragraph} />
        ))}
      </div>
      <ul className="mt-8">
        {products.map((product) => (
          <ProductRow key={product.slug} product={product} />
        ))}
      </ul>
    </div>
  );
}
