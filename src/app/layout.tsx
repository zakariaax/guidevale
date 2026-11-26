import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { abs, siteOrigin } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const googleVerification =
  google && /^[A-Za-z0-9_-]{8,120}$/.test(google) ? google : undefined;
const origin = siteOrigin();

export const metadata: Metadata = {
  metadataBase: origin ? new URL(origin) : undefined,
  title: {
    default: "Guidevale — products worth opening",
    template: "%s · Guidevale",
  },
  description:
    "Guidevale is a short list of products people keep buying. We publish who each one is for. Amazon publishes today's price.",
  applicationName: "Guidevale",
  openGraph: {
    type: "website",
    siteName: "Guidevale",
    title: "Guidevale — products worth opening",
    description:
      "A deal desk that names the product and the reason. The live price stays on Amazon.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guidevale — products worth opening",
    description:
      "A deal desk that names the product and the reason. The live price stays on Amazon.",
  },
  robots: { index: true, follow: true },
  verification: googleVerification ? { google: googleVerification } : undefined,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Guidevale",
            url: origin || undefined,
            description:
              "Editorial product desk for things people keep buying. Prices are shown on Amazon.",
            potentialAction: origin
              ? {
                  "@type": "SearchAction",
                  target: `${abs("/search")}?q={query}`,
                  "query-input": "required name=query",
                }
              : undefined,
          }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
