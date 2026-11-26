import { cn } from "cn";
import { ProductPlate } from "@/components/product-plate";
import {
  productImageFiles,
  productImageWidths,
} from "@/data/product-images.generated";
import { productImageSubjects } from "@/data/product-images";
import type { PlateId } from "@/data/types";

export function ProductImage({
  slug,
  plate,
  sizes,
  priority = false,
  decorative = false,
  className,
}: {
  slug: string;
  plate: PlateId;
  /** The rendered width, so the browser picks the smallest file that is still sharp. */
  sizes: string;
  /** Load first and at high priority. Use only for the largest image above the fold. */
  priority?: boolean;
  /** The product name is already next to the image, as in a list row. */
  decorative?: boolean;
  className?: string;
}) {
  const file = productImageFiles[slug];
  if (!file) return <ProductPlate id={plate} className={className} />;

  const srcSet = (ext: string) =>
    productImageWidths.map((w) => `${file.base}-${w}.${ext} ${w}w`).join(", ");
  const subject = productImageSubjects[slug];

  return (
    <picture
      className={cn("block aspect-square overflow-hidden rounded-[1.4rem]", className)}
      style={{ backgroundColor: file.color }}
    >
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`${file.base}-320.webp`}
        width={640}
        height={640}
        alt={decorative || !subject ? "" : `Illustration of ${subject}`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className="size-full object-cover"
      />
    </picture>
  );
}
