import { ProductRow } from "@/components/product-row";
import { RichText } from "@/components/rich-text";
import type { GuideBlock } from "@/data/types";
import { relatedProducts } from "@/lib/catalog";

export function GuideBody({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="space-y-5 text-[1.05rem] leading-8">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="font-heading pt-4 text-3xl tracking-tight text-ink"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return <RichText key={index} text={block.text} />;
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} className="inline" />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "callout") {
          return (
            <aside
              key={index}
              className="rounded-2xl border border-border bg-card px-5 py-4"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-signal">
                {block.title.toUpperCase()}
              </p>
              <RichText text={block.text} className="mt-2" />
            </aside>
          );
        }
        if (block.type === "products") {
          const products = relatedProducts(block.slugs);
          return (
            <div key={index} className="not-prose">
              {block.note ? (
                <p className="mb-2 text-sm text-muted-foreground">{block.note}</p>
              ) : null}
              <ul>
                {products.map((product) => (
                  <ProductRow key={product.slug} product={product} />
                ))}
              </ul>
            </div>
          );
        }
        return (
          <div key={index} className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[36rem] text-left text-sm leading-6">
              <caption className="px-4 py-3 text-left text-muted-foreground">
                {block.caption}
              </caption>
              <thead className="border-y border-border bg-[#f7f1e7]">
                <tr>
                  {block.headers.map((header) => (
                    <th key={header} className="px-3 py-2 font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-border last:border-0">
                    {row.map((cell, cellIndex) => (
                      <td key={`${row[0]}-${cellIndex}`} className="px-3 py-2 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
