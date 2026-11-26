import type { Metadata } from "next";
import Link from "next/link";
import { AmazonButton } from "@/components/amazon-button";
import { ComparisonCard } from "@/components/comparison-card";
import { DealCard, tierLabel } from "@/components/deal-card";
import { DeskFeed, type FeedTab } from "@/components/desk-feed";
import { EventBanner } from "@/components/event-banner";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { categories } from "@/data/categories";
import { comparisons } from "@/data/comparisons";
import { guides } from "@/data/guides";
import { categoryImageProduct } from "@/data/product-images";
import { products } from "@/data/products";
import type { Product } from "@/data/types";
import { deskOrder, getGuide, heroProduct, productsIn } from "@/lib/catalog";
import { abs, formatDeskDate, siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  alternates: siteOrigin() ? { canonical: "/" } : undefined,
};

const tabs: (FeedTab & { test: (p: Product) => boolean })[] = [
  { id: "popular", label: "Most bought", match: "[data-popular]", test: (p) => p.hero || p.spotlight },
  { id: "everyday", label: tierLabel.everyday, match: '[data-tier="everyday"]', test: (p) => p.tier === "everyday" },
  { id: "step-up", label: tierLabel["step-up"], match: '[data-tier="step-up"]', test: (p) => p.tier === "step-up" },
  { id: "flagship", label: tierLabel.flagship, match: '[data-tier="flagship"]', test: (p) => p.tier === "flagship" },
  { id: "all", label: "Everything", test: () => true },
];

const popularSearches = [
  { label: "Air purifier", q: "purifier" },
  { label: "Robot vacuum", q: "robot" },
  { label: "Noise canceling", q: "noise" },
  { label: "Air fryer", q: "air fryer" },
  { label: "Doorbell camera", q: "doorbell" },
  { label: "Toothbrush", q: "toothbrush" },
];

const startHere = ["read-a-discount", "air-purifier-room-size", "headphones-you-keep"];

const howWePick = [
  {
    title: "No typed prices",
    text: "Prices change hourly. Amazon shows the live one, so nothing here goes stale.",
  },
  {
    title: "Who should skip it",
    text: "Every note says who the product is wrong for, not just who it suits.",
  },
  {
    title: "Sources on every page",
    text: "Specs come from makers and named reviews. We say when we did not test.",
  },
];

export default function HomePage() {
  const hero = heroProduct();
  const ordered = deskOrder();
  const categoryName = Object.fromEntries(categories.map((c) => [c.slug, c.name]));
  const counts = Object.fromEntries(
    tabs.map((tab) => {
      const inTab = products.filter(tab.test);
      return [
        tab.id,
        Object.fromEntries([
          ["all", inTab.length],
          ...categories.map((c) => [c.slug, inTab.filter((p) => p.category === c.slug).length]),
        ]),
      ];
    }),
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "On the Guidevale desk",
          itemListElement: ordered.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: abs(`/products/${product.slug}`),
          })),
        }}
      />

      <EventBanner
        endsAt="2026-12-01T12:00:00Z"
        label="BLACK FRIDAY · NOV 27–30"
        text="A deal badge is not a discount. Check what the item usually sells for before you trust the percentage."
        href="/guides/read-a-discount"
        cta={`${getGuide("read-a-discount")?.minutes ?? 8}-minute check`}
      />

      <section className="mt-6 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-stretch">
        <div className="flex min-w-0 flex-col justify-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-signal">
            {products.length} PRODUCTS · {guides.length} GUIDES · UPDATED{" "}
            {formatDeskDate(hero.updated).toUpperCase()}
          </p>
          <h1 className="font-heading mt-3 max-w-2xl text-4xl leading-[1.05] tracking-tight sm:text-[3.4rem]">
            The short list of products people keep buying.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
            Who each one is for, who should skip it, and the catch. Amazon
            shows today&apos;s price.
          </p>
          <form action="/search" className="mt-6 flex max-w-xl gap-2" role="search">
            <label className="sr-only" htmlFor="home-search">
              Search products and guides
            </label>
            <input
              id="home-search"
              name="q"
              type="search"
              placeholder="Try “air purifier” or “headphones”"
              className="h-12 min-w-0 flex-1 rounded-full border border-border bg-card px-5 text-base outline-none placeholder:text-ink/40 focus-visible:border-signal focus-visible:ring-3 focus-visible:ring-ring/30"
            />
            <button
              type="submit"
              className="h-12 shrink-0 rounded-full bg-ink px-5 text-base font-medium text-[#f6f1e8] transition hover:bg-[#2a221b]"
            >
              Search
            </button>
          </form>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {popularSearches.map((s) => (
              <Link
                key={s.q}
                href={`/search?q=${encodeURIComponent(s.q)}`}
                className="rounded-full border border-border bg-paper px-3 py-1 text-sm text-ink/80 transition hover:border-signal/50 hover:text-ink"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <article className="overflow-hidden rounded-[1.7rem] border border-border bg-card shadow-[0_24px_60px_-36px_rgba(28,23,18,0.55)]">
          <div className="flex items-center justify-between gap-3 bg-signal px-5 py-3 text-white">
            <p className="text-xs font-bold tracking-[0.2em]">PICK OF THE WEEK</p>
            <p className="text-sm">{categoryName[hero.category]}</p>
          </div>
          <div className="grid grid-cols-[7.5rem_1fr] gap-4 p-4 sm:grid-cols-[9rem_1fr] lg:grid-cols-1 lg:p-5">
            <ProductImage
              slug={hero.slug}
              plate={hero.plate}
              sizes="(min-width: 1024px) 320px, 144px"
              priority
              className="w-full lg:aspect-[4/3]"
            />
            <div>
              <p className="text-sm text-muted-foreground">{hero.brand}</p>
              <h2 className="font-heading text-3xl leading-tight tracking-tight">
                <Link href={`/products/${hero.slug}`} className="hover:underline">
                  {hero.name}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-6 sm:text-base">{hero.verdict}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-4 pb-5 lg:px-5">
            <AmazonButton query={hero.searchQuery} />
            <Link
              href={`/products/${hero.slug}`}
              className="text-sm font-medium text-signal-deep hover:underline"
            >
              Read who it&apos;s for →
            </Link>
          </div>
        </article>
      </section>

      <nav aria-label="Shop by room" className="-mx-4 mt-8 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <ul className="flex w-max gap-3 lg:grid lg:w-full lg:grid-cols-6">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/categories/${category.slug}`}
                className="flex w-36 items-center gap-3 rounded-2xl border border-border bg-card p-2 pr-3 transition hover:-translate-y-0.5 hover:border-signal/40 lg:w-full"
              >
                <ProductImage
                  slug={categoryImageProduct[category.slug] ?? ""}
                  plate={category.plate}
                  sizes="48px"
                  decorative
                  className="size-12 shrink-0 rounded-xl"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{category.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {productsIn(category.slug).length} picks
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section aria-labelledby="desk-heading" className="min-w-0">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 id="desk-heading" className="font-heading text-3xl tracking-tight sm:text-4xl">
              On the desk
            </h2>
            <Link href="/desk" className="text-sm font-medium text-signal-deep hover:underline">
              Full shelf
            </Link>
          </div>
          <DeskFeed
            tabs={tabs.map(({ id, label, match }) => ({ id, label, match }))}
            rooms={categories.map((c) => ({ slug: c.slug, name: c.name }))}
            counts={counts}
          >
            {ordered.map((product) => (
              <DealCard
                key={product.slug}
                product={product}
                categoryName={categoryName[product.category] ?? ""}
              />
            ))}
          </DeskFeed>
        </section>

        <aside className="space-y-6 lg:sticky lg:top-6 lg:h-fit">
          <section className="rounded-3xl border border-border bg-card p-5">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
              START HERE
            </h2>
            <ol className="mt-3 space-y-4">
              {startHere.map((slug, index) => {
                const guide = getGuide(slug);
                if (!guide) return null;
                return (
                  <li key={slug}>
                    <Link href={`/guides/${slug}`} className="group flex gap-3">
                      <span className="font-heading text-3xl leading-none text-signal">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block font-medium leading-6 group-hover:underline">
                          {guide.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {guide.minutes} min read
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="rounded-3xl bg-[#e7f2ec] p-5">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-pine">
              HOW A PRODUCT GETS HERE
            </h2>
            <ul className="mt-3 space-y-3">
              {howWePick.map((item) => (
                <li key={item.title}>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm leading-6 text-ink/75">{item.text}</p>
                </li>
              ))}
            </ul>
            <Link href="/method" className="mt-4 inline-block text-sm font-medium text-pine hover:underline">
              Read the method →
            </Link>
          </section>
        </aside>
      </div>

      <section className="mt-14" aria-labelledby="compare-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="compare-heading" className="font-heading text-3xl tracking-tight sm:text-4xl">
              Stuck between two?
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              The pairs people go back and forth on, side by side, ending with
              who should buy which.
            </p>
          </div>
          <Link href="/compare" className="hidden text-sm font-medium text-signal-deep hover:underline sm:inline">
            All comparisons
          </Link>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison) => (
            <li key={comparison.slug}>
              <ComparisonCard comparison={comparison} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="guides-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="guides-heading" className="font-heading text-3xl tracking-tight sm:text-4xl">
              Read before you click
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              The part a deal badge skips: room size, fit, counter space, and
              the second price.
            </p>
          </div>
          <Link href="/guides" className="hidden text-sm font-medium text-signal-deep hover:underline sm:inline">
            All guides
          </Link>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
