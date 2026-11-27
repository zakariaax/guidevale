import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AmazonButton } from "@/components/amazon-button";
import { FaqList } from "@/components/faq-list";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { ProductImage } from "@/components/product-image";
import { ProductRow } from "@/components/product-row";
import { RichText } from "@/components/rich-text";
import { products } from "@/data/products";
import {
  comparisonsFor,
  getCategory,
  getProduct,
  guideForCategory,
  relatedProducts,
} from "@/lib/catalog";
import { abs, formatDeskDate, siteOrigin } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: `${product.name}: who it's for`,
    description: product.verdict,
    alternates: siteOrigin()
      ? { canonical: `/products/${product.slug}` }
      : undefined,
    openGraph: {
      title: `${product.name} · Guidevale`,
      description: product.verdict,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category);
  const related = relatedProducts(product.related);
  const guide = guideForCategory(product.category);
  const versus = comparisonsFor(product.slug);

  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Guidevale", item: abs("/") },
              {
                "@type": "ListItem",
                position: 2,
                name: category?.name ?? "Shelf",
                item: abs(`/categories/${product.category}`),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: abs(`/products/${product.slug}`),
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />
      <p className="text-sm text-muted-foreground">
        <Link href="/desk" className="hover:underline">
          The desk
        </Link>
        <span aria-hidden> / </span>
        <Link href={`/categories/${product.category}`} className="hover:underline">
          {category?.name}
        </Link>
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-[18rem_1fr] lg:items-start">
        <figure className="mx-auto w-full max-w-[18rem]">
          <ProductImage
            slug={product.slug}
            plate={product.plate}
            sizes="288px"
            priority
          />
          <figcaption className="mt-2 text-xs leading-5 text-muted-foreground">
            Illustration of this kind of product, not a photo of the{" "}
            {product.name}. The Amazon listing has photos of the exact model.
          </figcaption>
        </figure>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-signal">
            {product.brand.toUpperCase()} · NOTE UPDATED{" "}
            {formatDeskDate(product.updated).toUpperCase()}
          </p>
          <h1 className="font-heading mt-2 text-4xl tracking-tight sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-xl text-xl leading-8">{product.verdict}</p>
          <p className="mt-3 max-w-xl text-muted-foreground">{product.dek}</p>
          <div className="mt-6">
            <AmazonButton query={product.searchQuery} />
          </div>
          {versus.map((comparison) => {
            const other = getProduct(
              comparison.products.find((slug) => slug !== product.slug) ?? "",
            );
            return (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group mt-5 flex max-w-xl items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 transition hover:border-signal/40"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-[11px] font-bold tracking-[0.12em] text-[#f6f1e8]">
                  VS
                </span>
                <span className="text-sm leading-6">
                  <span className="block text-muted-foreground">Deciding between these?</span>
                  <span className="font-medium group-hover:underline">
                    {product.name} vs {other?.name}
                  </span>
                </span>
                <span aria-hidden className="ml-auto text-signal-deep">→</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="max-w-2xl space-y-4 text-[1.05rem] leading-8">
          {product.why.map((paragraph) => (
            <RichText key={paragraph.slice(0, 40)} text={paragraph} />
          ))}
        </div>
        <aside className="h-fit rounded-3xl border border-border bg-card p-5 lg:sticky lg:top-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
            AT A GLANCE
          </p>
          <dl className="mt-3 space-y-3">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs font-semibold tracking-wide text-muted-foreground">
                  {spec.label}
                </dt>
                <dd className="text-sm leading-6">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl bg-[#e7f2ec] p-5">
          <h2 className="font-heading text-2xl">Buy it if</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {product.bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl bg-[#f8e6dc] p-5">
          <h2 className="font-heading text-2xl">Leave it if</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            {product.skipIf.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-10 max-w-2xl">
        <h2 className="font-heading text-3xl tracking-tight">Before you open Amazon</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
          {product.watchouts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 max-w-2xl">
        <h2 className="font-heading text-3xl tracking-tight">Questions</h2>
        <FaqList faqs={product.faqs} />
      </section>

      {guide ? (
        <section className="mt-10 max-w-2xl">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
            READ BEFORE YOU BUY
          </h2>
          <GuideCard guide={guide} layout="row" className="mt-3" />
        </section>
      ) : null}

      <section className="mt-10 max-w-2xl rounded-3xl border border-border bg-card p-5">
        <h2 className="font-heading text-2xl">Where this note comes from</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {product.sources}
        </p>
      </section>

      {related.length ? (
        <section className="mt-12">
          <h2 className="font-heading text-3xl tracking-tight">On the same shelf</h2>
          <ul>
            {related.map((item) => (
              <ProductRow key={item.slug} product={item} />
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
