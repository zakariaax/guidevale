import type { Metadata } from "next";
import { associateDisclosure, siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description:
    "Guidevale earns from qualifying Amazon purchases. Amazon does not endorse this site. Prices are shown on Amazon.",
  alternates: siteOrigin() ? { canonical: "/disclosure" } : undefined,
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-signal">
        DISCLOSURE
      </p>
      <h1 className="font-heading mt-3 text-4xl tracking-tight sm:text-5xl">
        {associateDisclosure}
      </h1>
      <div className="mt-6 space-y-5 text-[1.05rem] leading-8">
        <p>
          Guidevale is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a
          means for sites to earn advertising fees by advertising and linking
          to Amazon.com.
        </p>
        <p>
          Links to Amazon are paid links. They are marked &quot;paid link&quot;
          beside the button, they open in a new tab, and they use{" "}
          <code>rel=&quot;sponsored&quot;</code>. If you buy something after
          following one, we may earn a commission. You do not pay a higher
          price because the link was ours.
        </p>
        <p>
          Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
          affiliates. Guidevale is not endorsed, sponsored, or approved by
          Amazon, and nothing on this site should be read as Amazon&apos;s
          recommendation.
        </p>
        <p>
          We do not display a product&apos;s current Amazon price or a
          discount percent. Those figures change, and Amazon requires that a
          displayed price come from their tools and stay current. Product
          names are used so you can find the right listing. Specs are
          attributed on each page.
        </p>
        <p>
          Some outbound links go to a search on Amazon rather than a single
          product page, so you can confirm the exact model, seller, and
          today&apos;s offer. The title under the photo is part of the
          purchase. A different variant is a different product.
        </p>
      </div>
    </div>
  );
}
