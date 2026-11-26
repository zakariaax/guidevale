import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/faq-list";
import { GuideBody } from "@/components/guide-body";
import { JsonLd } from "@/components/json-ld";
import { guides } from "@/data/guides";
import { getGuide } from "@/lib/catalog";
import { abs, formatDeskDate, siteOrigin } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide" };
  return {
    title: guide.title,
    description: guide.description,
    alternates: siteOrigin() ? { canonical: `/guides/${guide.slug}` } : undefined,
    openGraph: {
      title: `${guide.title} · Guidevale`,
      description: guide.description,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            dateModified: guide.updated,
            datePublished: guide.updated,
            author: { "@type": "Organization", name: "Guidevale" },
            publisher: { "@type": "Organization", name: "Guidevale" },
            mainEntityOfPage: abs(`/guides/${guide.slug}`),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Guidevale", item: abs("/") },
              { "@type": "ListItem", position: 2, name: "Guides", item: abs("/guides") },
              {
                "@type": "ListItem",
                position: 3,
                name: guide.title,
                item: abs(`/guides/${guide.slug}`),
              },
            ],
          },
        ]}
      />
      <p className="text-sm text-muted-foreground">
        <Link href="/guides" className="hover:underline">
          Guides
        </Link>
      </p>
      <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-signal">
        {guide.minutes} MIN READ · UPDATED {formatDeskDate(guide.updated).toUpperCase()}
      </p>
      <h1 className="font-heading mt-3 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        {guide.title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{guide.dek}</p>
      <div className="mt-8">
        <GuideBody blocks={guide.blocks} />
      </div>
      <section className="mt-12">
        <h2 className="font-heading text-3xl tracking-tight">Questions</h2>
        <FaqList faqs={guide.faqs} />
      </section>
    </article>
  );
}
