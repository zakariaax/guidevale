import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AmazonButton } from "@/components/amazon-button";
import { tierLabel } from "@/components/deal-card";
import { FaqList } from "@/components/faq-list";
import { GuideBody } from "@/components/guide-body";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { comparisons } from "@/data/comparisons";
import { getComparison, getGuide, relatedProducts } from "@/lib/catalog";
import { abs, formatDeskDate, siteOrigin } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return { title: "Comparison" };
  return {
    title: comparison.title,
    description: comparison.description,
    alternates: siteOrigin() ? { canonical: `/compare/${comparison.slug}` } : undefined,
    openGraph: {
      title: `${comparison.title} · Guidevale`,
      description: comparison.description,
      type: "article",
    },
  };
}

const pickTone = ["bg-[#e7f2ec]", "bg-[#f8e6dc]"];

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();
  const pair = relatedProducts(comparison.products);
  if (pair.length !== 2) notFound();
  const guide = getGuide(comparison.guide);
  const path = `/compare/${comparison.slug}`;

  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: comparison.title,
            description: comparison.description,
            dateModified: comparison.updated,
            datePublished: comparison.updated,
            author: { "@type": "Organization", name: "Guidevale" },
            publisher: { "@type": "Organization", name: "Guidevale" },
            mainEntityOfPage: abs(path),
            about: pair.map((product) => product.name),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: comparison.faqs.map((faq) => ({
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
              { "@type": "ListItem", position: 2, name: "Compare", item: abs("/compare") },
              { "@type": "ListItem", position: 3, name: comparison.title, item: abs(path) },
            ],
          },
        ]}
      />

      <p className="text-sm text-muted-foreground">
        <Link href="/compare" className="hover:underline">
          Compare
        </Link>
      </p>
      <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-signal">
        HEAD TO HEAD · {comparison.minutes} MIN READ · UPDATED{" "}
        {formatDeskDate(comparison.updated).toUpperCase()}
      </p>
      <h1 className="font-heading mt-3 max-w-4xl text-4xl leading-[1.08] tracking-tight sm:text-5xl">
        {comparison.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{comparison.dek}</p>

      <div className="relative mt-8 grid gap-4 md:grid-cols-2">
        {pair.map((product, index) => (
          <section
            key={product.slug}
            className="flex flex-col rounded-[1.7rem] border border-border bg-card p-4 sm:p-5"
          >
            <div className="flex gap-4">
              <ProductImage
                slug={product.slug}
                plate={product.plate}
                sizes="(min-width: 640px) 144px, 112px"
                priority={index === 0}
                decorative
                className="size-28 shrink-0 rounded-2xl sm:size-36"
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground">
                  {product.brand.toUpperCase()} · {tierLabel[product.tier].toUpperCase()}
                </p>
                <h2 className="font-heading mt-1 text-2xl leading-tight tracking-tight sm:text-3xl">
                  <Link href={`/products/${product.slug}`} className="hover:underline">
                    {product.name}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-6">{product.verdict}</p>
              </div>
            </div>
            <div className="mt-auto pt-5">
              <AmazonButton query={product.searchQuery} />
            </div>
          </section>
        ))}
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-sm font-bold tracking-[0.12em] text-[#f6f1e8] ring-8 ring-paper md:grid"
        >
          VS
        </span>
      </div>

      <section className="mt-8 rounded-[1.7rem] border border-border bg-card p-5 sm:p-6">
        <h2 className="font-heading text-3xl tracking-tight">The short answer</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {pair.map((product, index) => (
            <div key={product.slug} className={`rounded-2xl p-4 ${pickTone[index]}`}>
              <h3 className="font-semibold">Pick the {product.name} if</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6">
                {comparison.pickIf[index].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[1.05rem] leading-8">{comparison.bottomLine}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-3xl tracking-tight">Side by side</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[40rem] text-left text-sm leading-6">
            <thead className="border-b border-border bg-[#f7f1e7]">
              <tr>
                <th className="w-[26%] px-4 py-3 font-medium text-muted-foreground">
                  <span className="sr-only">Feature</span>
                </th>
                {pair.map((product) => (
                  <th key={product.slug} className="px-4 py-3 font-semibold">
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.table.map(([label, a, b]) => (
                <tr key={label} className="border-b border-border last:border-0">
                  <th scope="row" className="px-4 py-3 align-top font-medium">
                    {label}
                  </th>
                  <td className="px-4 py-3 align-top">{a}</td>
                  <td className="px-4 py-3 align-top">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-10 max-w-3xl">
        <GuideBody blocks={comparison.blocks} />
      </div>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-heading text-3xl tracking-tight">Questions</h2>
        <FaqList faqs={comparison.faqs} />
      </section>

      {guide ? (
        <section className="mt-10 max-w-3xl">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
            KEEP READING
          </h2>
          <GuideCard guide={guide} layout="row" className="mt-3" />
        </section>
      ) : null}

      <section className="mt-10 max-w-3xl rounded-3xl border border-border bg-card p-5">
        <h2 className="font-heading text-2xl">Where this comes from</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{comparison.sources}</p>
      </section>
    </article>
  );
}
