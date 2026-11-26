import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { TierMark } from "@/components/tier-mark";
import type { Product } from "@/data/types";

export function ProductRow({
  product,
  desk = false,
}: {
  product: Product;
  desk?: boolean;
}) {
  return (
    <li className="border-b border-border">
      <Link
        href={`/products/${product.slug}`}
        className="group flex items-center gap-3 py-4 sm:gap-4"
      >
        <TierMark tier={product.tier} desk={desk} />
        <ProductImage
          slug={product.slug}
          plate={product.plate}
          sizes="72px"
          decorative
          className="size-16 shrink-0 rounded-2xl sm:size-[4.5rem]"
        />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium group-hover:underline">
            {product.name}
          </span>
          <span className="mt-0.5 block text-sm leading-5 text-muted-foreground">
            {product.verdict}
          </span>
        </span>
        <span className="hidden text-sm text-muted-foreground sm:inline">
          Read
        </span>
      </Link>
    </li>
  );
}
