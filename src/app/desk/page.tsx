import type { Metadata } from "next";
import Link from "next/link";
import { ProductRow } from "@/components/product-row";
import { categories } from "@/data/categories";
import { productsIn } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "The desk",
  description:
    "Every product Northline is willing to send you to Amazon for, grouped by the job it does.",
  alternates: process.env.SITE_URL ? { canonical: "/desk" } : undefined,
};

export default function DeskPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-signal">
        THE FULL SHELF
      </p>
      <h1 className="font-heading mt-3 text-4xl tracking-tight sm:text-5xl">
        Everything on the desk
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        A short catalog on purpose. If a product is here, we can say who it is
        for and who should walk away. The live price is on Amazon.
      </p>
      {categories.map((category) => (
        <section key={category.slug} className="mt-10">
          <h2 className="font-heading text-3xl tracking-tight">
            <Link href={`/categories/${category.slug}`} className="hover:underline">
              {category.name}
            </Link>
          </h2>
          <ul>
            {productsIn(category.slug).map((product) => (
              <ProductRow key={product.slug} product={product} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
