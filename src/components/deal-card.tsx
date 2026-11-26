import Link from "next/link";
import { cn } from "cn";
import { ProductImage } from "@/components/product-image";
import type { Product, Tier } from "@/data/types";
import { amazonSearchUrl } from "@/lib/site";

export const tierLabel: Record<Tier, string> = {
  everyday: "Everyday pick",
  "step-up": "Step-up",
  flagship: "Splurge",
};

const tierStyle: Record<Tier, string> = {
  everyday: "bg-[#e3efe8] text-pine",
  "step-up": "bg-[#f8e3d7] text-signal-deep",
  flagship: "bg-ink text-[#f6f1e8]",
};

export function DealCard({
  product,
  categoryName,
}: {
  product: Product;
  categoryName: string;
}) {
  const { href } = amazonSearchUrl(product.searchQuery);

  return (
    <li
      data-cat={product.category}
      data-tier={product.tier}
      data-popular={product.hero || product.spotlight ? "" : undefined}
    >
      <article className="group relative flex h-full gap-4 rounded-3xl border border-border bg-card p-3 transition hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[0_18px_40px_-28px_rgba(28,23,18,0.5)] sm:p-4">
        <ProductImage
          slug={product.slug}
          plate={product.plate}
          sizes="(min-width: 640px) 128px, 96px"
          decorative
          className="size-24 shrink-0 rounded-2xl sm:size-32"
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em]">
            <span className="rounded-full bg-secondary px-2 py-0.5 text-ink/75">
              {categoryName.toUpperCase()}
            </span>
            <span className={cn("rounded-full px-2 py-0.5", tierStyle[product.tier])}>
              {tierLabel[product.tier].toUpperCase()}
            </span>
          </div>
          <h3 className="font-heading mt-1.5 text-xl leading-tight tracking-tight sm:text-2xl">
            <Link
              href={`/products/${product.slug}`}
              className="outline-none after:absolute after:inset-0 after:rounded-3xl focus-visible:after:ring-2 focus-visible:after:ring-ring group-hover:underline"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {product.verdict}
          </p>
          <p className="mt-1 hidden text-sm leading-6 sm:line-clamp-1">
            <span className="font-medium">Best for:</span> {product.bestFor[0]}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-3">
            <span className="text-sm font-medium text-signal-deep">Read the note →</span>
            <a
              href={href}
              rel="sponsored noopener noreferrer"
              target="_blank"
              className="relative z-10 ml-auto inline-flex h-9 items-center gap-1 rounded-full bg-signal px-3.5 text-sm font-semibold text-white transition hover:bg-signal-deep focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Amazon price
              <span aria-hidden="true">↗</span>
              <span className="sr-only">, paid link, opens in a new tab</span>
            </a>
          </div>
        </div>
      </article>
    </li>
  );
}
