import type { Metadata } from "next";
import { ComparisonCard } from "@/components/comparison-card";
import { comparisons } from "@/data/comparisons";
import { siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Head-to-head comparisons of products people weigh against each other: room size, filters, comfort, upkeep, and who should buy which.",
  alternates: siteOrigin() ? { canonical: "/compare" } : undefined,
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-signal">HEAD TO HEAD</p>
      <h1 className="font-heading mt-3 text-4xl tracking-tight sm:text-5xl">
        Stuck between two?
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        The pairs people go back and forth on, side by side. Each one ends with
        who should buy which, not a score.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {comparisons.map((comparison) => (
          <li key={comparison.slug}>
            <ComparisonCard comparison={comparison} />
          </li>
        ))}
      </ul>
    </div>
  );
}
