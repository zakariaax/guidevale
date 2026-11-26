import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ProductRow } from "@/components/product-row";
import { Input } from "@/components/ui/input";
import { searchDesk } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Guidevale desk.",
  robots: { index: false, follow: true },
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-4xl tracking-tight">Search the desk</h1>
      <form action="/search" className="mt-6 flex max-w-xl gap-2">
        <label className="sr-only" htmlFor="q">
          Search
        </label>
        <Input id="q" name="q" placeholder="Purifier, skillet, doorbell" className="h-11 bg-card" />
      </form>
      <Suspense fallback={<p className="mt-8 text-muted-foreground">Looking through the shelf…</p>}>
        <Results searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function Results({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const result = searchDesk(q);
  if (!result.q) {
    return (
      <p className="mt-8 max-w-xl text-muted-foreground">
        Try a job or a brand: bedroom purifier, robot, headphones, Lodge.
      </p>
    );
  }
  const empty =
    result.products.length === 0 &&
    result.guides.length === 0 &&
    result.comparisons.length === 0;
  return (
    <div className="mt-8">
      <p className="text-sm text-muted-foreground">
        Results for “{result.q}”
      </p>
      {empty ? (
        <p className="mt-4 max-w-xl">
          Nothing on the desk matches that. The shelf is short on purpose.{" "}
          <Link href="/desk" className="font-medium text-signal-deep underline">
            Browse the full shelf
          </Link>
          .
        </p>
      ) : null}
      {result.products.length ? (
        <ul className="mt-4">
          {result.products.map((product) => (
            <ProductRow key={product.slug} product={product} />
          ))}
        </ul>
      ) : null}
      {result.comparisons.length ? (
        <ul className="mt-6 space-y-3">
          {result.comparisons.map((comparison) => (
            <li key={comparison.slug}>
              <Link href={`/compare/${comparison.slug}`} className="font-medium hover:underline">
                {comparison.title}
              </Link>
              <p className="text-sm text-muted-foreground">{comparison.dek}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {result.guides.length ? (
        <ul className="mt-6 space-y-3">
          {result.guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/guides/${guide.slug}`} className="font-medium hover:underline">
                {guide.title}
              </Link>
              <p className="text-sm text-muted-foreground">{guide.dek}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
