import Link from "next/link";
import { categories } from "@/data/categories";
import { associateDisclosure } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-[#ebe3d6]">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-2xl">Guidevale</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
            A short list of products people keep buying, and the reason each
            one earns a click. Today&apos;s price stays on Amazon.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
            SHELF
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="hover:underline"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
            DESK
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/desk" className="hover:underline">
                Everything on the desk
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:underline">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/compare" className="hover:underline">
                Head-to-head comparisons
              </Link>
            </li>
            <li>
              <Link href="/method" className="hover:underline">
                How a product gets here
              </Link>
            </li>
            <li>
              <Link href="/disclosure" className="hover:underline">
                Affiliate disclosure
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* The Associates Operating Agreement requires this exact sentence on the site. */}
      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs leading-5 text-muted-foreground sm:px-6">
          {associateDisclosure}
        </p>
      </div>
    </footer>
  );
}
