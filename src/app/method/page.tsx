import type { Metadata } from "next";
import Link from "next/link";
import { siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  title: "How a product gets on the desk",
  description:
    "Guidevale is an editorial desk, not a lab and not a price tracker. This is how a product earns a page, and what we leave off on purpose.",
  alternates: siteOrigin() ? { canonical: "/method" } : undefined,
};

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-signal">METHOD</p>
      <h1 className="font-heading mt-3 text-4xl tracking-tight sm:text-5xl">
        How a product gets on the desk
      </h1>
      <div className="mt-6 space-y-5 text-[1.05rem] leading-8">
        <p>
          Guidevale is an editorial desk. A product earns a page when people
          keep buying it, when a specific person can be named as the right
          owner, and when we can say who should leave it on the shelf. A
          viral coupon with no job behind it does not earn a page.
        </p>
        <p>
          We are not a lab. Specs on the air pages come from manufacturer
          manuals and AHAM figures as published by the makers and by retailer
          spec sheets. The robot note attributes cleaning observations to The
          Verge&apos;s November 20, 2026 review instead of pretending we ran
          the same test in a hallway. When a sentence is a judgment, it sounds
          like one.
        </p>
        <h2 className="font-heading pt-4 text-3xl tracking-tight">What we leave off</h2>
        <p>
          We do not print an Amazon price, a crossed-out list price, or a
          percent off. Amazon&apos;s Associates rules allow those figures on a
          site like this when they come from Amazon&apos;s API and stay fresh,
          with the time shown. A number typed on a Tuesday is a lie by
          Thursday, and it is the fastest way to lose the account that pays
          for the desk. The button says see today&apos;s price because that is
          the true sentence.
        </p>
        <p>
          We do not invent star ratings, review counts, or a reviewer who
          tested forty vacuums. We do not scrape Amazon. We do not dress a
          limited-time promotion up as a permanent fact.
        </p>
        <h2 className="font-heading pt-4 text-3xl tracking-tight">How to use a page</h2>
        <p>
          Read who it is for. Read who should skip it. Open Amazon. Compare
          today&apos;s price with the job, and with the sibling product linked
          on the page. If you need the orange badge to want it, you wanted the
          badge. The longer version of that test is{" "}
          <Link href="/guides/read-a-discount" className="font-medium text-signal-deep underline">
            How to read an Amazon discount
          </Link>
          .
        </p>
        <h2 className="font-heading pt-4 text-3xl tracking-tight">Why the list is short</h2>
        <p>
          Search engines reward pages that help someone choose, and they
          demote catalogs that exist to hold a link. A thousand thin product
          pages will not become a thousand daily visitors. A page about the
          difference between a certified room size and a marketing room size
          can. The shelf stays short so each note can be maintained when a
          model changes.
        </p>
        <p>
          Guidevale participates in the Amazon Services LLC Associates Program.
          The required sentence is on every page, and the full note is on the{" "}
          <Link href="/disclosure" className="font-medium text-signal-deep underline">
            disclosure
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
