import type { Metadata } from "next";
import { siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Guidevale counts visits with Google Analytics and does not ask you to create an account. Amazon sets its own cookies after you leave.",
  alternates: siteOrigin() ? { canonical: "/privacy" } : undefined,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-signal">PRIVACY</p>
      <h1 className="font-heading mt-3 text-4xl tracking-tight sm:text-5xl">
        What this site keeps
      </h1>
      <div className="mt-6 space-y-5 text-[1.05rem] leading-8">
        <p>
          Guidevale does not ask you to make an account and does not sell a
          mailing list. Search happens on the site, against the catalog
          published here. The words you type are used to filter that catalog
          and are not stored as an account history, because there is no
          account.
        </p>
        <p>
          The site loads Google Analytics 4, measurement ID G-H0LZGJ9W17, so
          we can see which pages people open, how far they scroll, and which
          outbound links they follow. Google may set a cookie and receive the
          page address, a rough location derived from your IP address, and
          the kind of browser you use. We use those reports to decide what to
          write next. We do not receive your name, and we do not sell the
          reports. Google&apos;s own policy is at{" "}
          <a
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            className="font-medium text-signal-deep underline decoration-[#efcfc0] underline-offset-[3px] hover:decoration-signal"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
        <p>
          When you follow a paid link, you leave for Amazon. Amazon sets its
          own cookies and handles its own checkout under Amazon&apos;s
          privacy policy. That visit is what lets an Associates tag credit a
          qualifying purchase. The tag identifies the publisher, not you, to
          Guidevale. We do not receive your Amazon account, your address, or
          your card.
        </p>
        <p>
          Hosting logs, the ordinary kind a web server keeps to stay up, may
          include an IP address and the page requested. Those logs are for
          operating the site, not for building an advertising profile here.
        </p>
        <p>Updated November 26, 2026.</p>
      </div>
    </div>
  );
}
