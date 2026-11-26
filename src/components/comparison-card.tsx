import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import type { Comparison } from "@/data/types";
import { relatedProducts } from "@/lib/catalog";

export function ComparisonCard({ comparison }: { comparison: Comparison }) {
  const [a, b] = relatedProducts(comparison.products);
  if (!a || !b) return null;

  return (
    <Link
      href={`/compare/${comparison.slug}`}
      className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-signal/40"
    >
      <span className="relative flex items-center justify-center gap-3 rounded-2xl bg-secondary px-3 py-4">
        <ProductImage slug={a.slug} plate={a.plate} sizes="112px" decorative className="size-24 rounded-2xl sm:size-28" />
        <span className="absolute grid size-10 place-items-center rounded-full bg-ink text-xs font-bold tracking-[0.12em] text-[#f6f1e8] ring-4 ring-secondary">
          VS
        </span>
        <ProductImage slug={b.slug} plate={b.plate} sizes="112px" decorative className="size-24 rounded-2xl sm:size-28" />
      </span>
      <span>
        <span className="block text-xs font-semibold tracking-[0.16em] text-muted-foreground">
          HEAD TO HEAD · {comparison.minutes} MIN READ
        </span>
        <span className="font-heading mt-1.5 block text-2xl leading-tight tracking-tight group-hover:underline">
          {comparison.title}
        </span>
        <span className="mt-1.5 block text-sm leading-6 text-muted-foreground">{comparison.dek}</span>
      </span>
    </Link>
  );
}
