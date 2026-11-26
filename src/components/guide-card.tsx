import Link from "next/link";
import { cn } from "cn";
import { CatalogPicture } from "@/components/product-image";
import { guideImage } from "@/data/product-images";
import type { Guide } from "@/data/types";

export function GuideCard({
  guide,
  layout = "stack",
  className,
}: {
  guide: Guide;
  /** "row" puts the picture beside the text, for narrow columns and the end of an article. */
  layout?: "stack" | "row";
  className?: string;
}) {
  const row = layout === "row";
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={cn(
        "group flex h-full gap-4 rounded-3xl border border-border bg-card p-3 transition hover:-translate-y-0.5 hover:border-signal/40 sm:p-4",
        row ? "items-center" : "flex-col",
        className,
      )}
    >
      <CatalogPicture
        imageKey={guideImage[guide.slug] ?? ""}
        alt=""
        sizes={row ? "96px" : "(min-width: 1024px) 300px, (min-width: 768px) 45vw, 90vw"}
        className={cn(
          "shrink-0",
          row ? "size-20 rounded-2xl sm:size-24" : "aspect-[16/10] w-full rounded-2xl",
        )}
      />
      <span className="min-w-0">
        <span className="block text-xs font-semibold tracking-[0.16em] text-muted-foreground">
          GUIDE · {guide.minutes} MIN READ
        </span>
        <span className="font-heading mt-1.5 block text-2xl leading-tight tracking-tight group-hover:underline">
          {guide.title}
        </span>
        <span className={cn("mt-1.5 block text-sm leading-6 text-muted-foreground", row && "line-clamp-2")}>
          {guide.dek}
        </span>
      </span>
    </Link>
  );
}
