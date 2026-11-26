import Link from "next/link";
import { AmazonButton } from "@/components/amazon-button";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { ProductRow } from "@/components/product-row";
import { buttonVariants } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { categoryImageProduct } from "@/data/product-images";
import { guides } from "@/data/guides";
import { heroProduct, spotlightProducts } from "@/lib/catalog";
import { abs, formatDeskDate } from "@/lib/site";
import { cn } from "cn";

export default function HomePage() {
  const hero = heroProduct();
  const spots = spotlightProducts();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "On the Northline desk",
          itemListElement: [hero, ...spots].map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: abs(`/products/${product.slug}`),
          })),
        }}
      />
      <p className="text-xs font-semibold tracking-[0.18em] text-signal">
        THE DESK · UPDATED {formatDeskDate(hero.updated).toUpperCase()}
      </p>
      <h1 className="font-heading mt-3 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-6xl">
        The short list of products people keep buying.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
        Northline names the product, who it is for, and the catch. Amazon
        names today&apos;s price. Open a note before you open a cart.
      </p>

      <article className="mt-8 overflow-hidden rounded-[1.7rem] border border-border bg-card shadow-[0_24px_60px_-36px_rgba(28,23,18,0.55)]">
        <div className="flex items-center justify-between gap-3 bg-signal px-5 py-4 text-white sm:px-7">
          <p className="text-xs font-bold tracking-[0.2em]">ON THE DESK</p>
          <p className="text-sm">Worth opening · {hero.brand}</p>
        </div>
        <div className="grid gap-6 p-5 sm:grid-cols-[15rem_1fr] sm:items-center sm:p-8">
          <ProductImage
            slug={hero.slug}
            plate={hero.plate}
            sizes="240px"
            priority
            className="mx-auto w-full max-w-[15rem]"
          />
          <div>
            <p className="text-sm text-muted-foreground">{hero.brand}</p>
            <h2 className="font-heading mt-1 text-4xl tracking-tight sm:text-5xl">
              <Link href={`/products/${hero.slug}`} className="hover:underline">
                {hero.name}
              </Link>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8">{hero.verdict}</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
              <AmazonButton query={hero.searchQuery} />
              <Link
                href={`/products/${hero.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full bg-card px-5 text-base",
                )}
              >
                Read the note
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-3xl tracking-tight">More on the desk</h2>
          <Link href="/desk" className="text-sm font-medium text-signal-deep hover:underline">
            Full shelf
          </Link>
        </div>
        <ul className="mt-2">
          {spots.map((product) => (
            <ProductRow key={product.slug} product={product} desk />
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-3xl tracking-tight">Shelves</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Six rooms of the house, not a mall. Each shelf is a decision, with
          the also-ran left off.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/categories/${category.slug}`}
                className="flex h-full gap-4 rounded-3xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-signal/40"
              >
                <ProductImage
                  slug={categoryImageProduct[category.slug] ?? ""}
                  plate={category.plate}
                  sizes="64px"
                  decorative
                  className="size-16 shrink-0 rounded-2xl"
                />
                <span>
                  <span className="block text-xs font-semibold tracking-[0.16em] text-signal">
                    {category.kicker.toUpperCase()}
                  </span>
                  <span className="font-heading mt-1 block text-2xl">
                    {category.name}
                  </span>
                  <span className="mt-1 block text-sm leading-5 text-muted-foreground">
                    {category.lede}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-3xl tracking-tight">Read before you click</h2>
          <Link href="/guides" className="text-sm font-medium text-signal-deep hover:underline">
            All guides
          </Link>
        </div>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block h-full rounded-3xl border border-border bg-card p-5 hover:border-signal/40"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
                  {guide.minutes} MIN READ
                </p>
                <h3 className="font-heading mt-2 text-2xl tracking-tight">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {guide.dek}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
