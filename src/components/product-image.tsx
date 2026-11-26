import { cn } from "cn";
import { ProductPlate } from "@/components/product-plate";
import {
  productImageFiles,
  productImageWidths,
} from "@/data/product-images.generated";
import { productImageSubjects } from "@/data/product-images";
import type { PlateId } from "@/data/types";

type PictureProps = {
  /** The rendered width, so the browser picks the smallest file that is still sharp. */
  sizes: string;
  /** Load first and at high priority. Use only for the largest image above the fold. */
  priority?: boolean;
  className?: string;
};

export function CatalogPicture({
  imageKey,
  alt,
  sizes,
  priority = false,
  className,
}: PictureProps & { imageKey: string; alt: string }) {
  const file = productImageFiles[imageKey];
  if (!file) return null;

  const srcSet = (ext: string) =>
    productImageWidths.map((w) => `${file.base}-${w}.${ext} ${w}w`).join(", ");

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
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className="size-full object-cover"
      />
    </picture>
  );
}

export function ProductImage({
  slug,
  plate,
  decorative = false,
  ...picture
}: PictureProps & {
  slug: string;
  plate: PlateId;
  /** The product name is already next to the image, as in a list row. */
  decorative?: boolean;
}) {
  if (!productImageFiles[slug]) {
    return <ProductPlate id={plate} className={picture.className} />;
  }
  const subject = productImageSubjects[slug];
  return (
    <CatalogPicture
      imageKey={slug}
      alt={decorative || !subject ? "" : `Illustration of ${subject}`}
      {...picture}
    />
  );
}
