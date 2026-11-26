import type { Metadata } from "next";
import { GuideCard } from "@/components/guide-card";
import { guides } from "@/data/guides";
import { formatDeskDate, siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Buying notes for rooms, discounts, headphones, kitchens, and the subscription hiding behind a smart-home deal.",
  alternates: siteOrigin() ? { canonical: "/guides" } : undefined,
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-signal">
        FROM THE DESK
      </p>
      <h1 className="font-heading mt-3 text-4xl tracking-tight sm:text-5xl">
        Read this before the cart.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        The guides are the part a deal badge skips: room size, fit, counter
        space, and the second price.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Updated {formatDeskDate(guides[0].updated)}.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <GuideCard guide={guide} />
          </li>
        ))}
      </ul>
    </div>
  );
}
