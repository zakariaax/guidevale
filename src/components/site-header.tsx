import Link from "next/link";
import { categories } from "@/data/categories";
import { MobileNav } from "@/components/mobile-nav";
import { Input } from "@/components/ui/input";
import { associateDisclosure, associateState } from "@/lib/site";

const links = [
  { href: "/desk", label: "The desk" },
  { href: "/guides", label: "Guides" },
  { href: "/method", label: "Method" },
  ...categories.map((category) => ({
    href: `/categories/${category.slug}`,
    label: category.name,
  })),
  { href: "/disclosure", label: "Disclosure" },
];

export function SiteHeader() {
  const { placeholder } = associateState();

  return (
    <header>
      <div className="bg-ink text-[#f6f1e8]">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Mark />
            <span className="font-heading text-[1.7rem] leading-none tracking-tight">
              Guidevale
            </span>
          </Link>
          <form action="/search" className="ml-auto hidden w-full max-w-xs md:block">
            <label className="sr-only" htmlFor="desk-search">
              Search the desk
            </label>
            <Input
              id="desk-search"
              name="q"
              placeholder="Search the desk"
              className="h-10 border-white/15 bg-white/10 text-[#f6f1e8] placeholder:text-white/50"
            />
          </form>
          <nav className="ml-2 hidden items-center gap-4 text-sm md:flex">
            <Link href="/desk" className="hover:underline">
              The desk
            </Link>
            <Link href="/guides" className="hover:underline">
              Guides
            </Link>
            <Link href="/method" className="hover:underline">
              Method
            </Link>
          </nav>
          <div className="ml-auto md:ml-0">
            <MobileNav links={links} />
          </div>
        </div>
        <div className="hidden border-t border-white/10 md:block">
          <nav className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-2 sm:px-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="shrink-0 rounded-full px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <p className="bg-signal px-4 py-2 text-center text-sm font-medium text-white">
        {associateDisclosure}
      </p>
      {placeholder ? (
        <p className="border-b border-border bg-[#fff4e8] px-4 py-2 text-center text-sm text-ink">
          Amazon links on this copy use a placeholder Associates tag, so they
          are not crediting an account yet.
        </p>
      ) : null}
      <form action="/search" className="border-b border-border px-4 py-3 md:hidden">
        <label className="sr-only" htmlFor="desk-search-mobile">
          Search the desk
        </label>
        <Input
          id="desk-search-mobile"
          name="q"
          placeholder="Search the desk"
          className="h-11 bg-card"
        />
      </form>
    </header>
  );
}

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#c2410c" />
      <path
        d="M8 12l8 12 8-12"
        fill="none"
        stroke="#fffaf6"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="8" r="2.2" fill="#fffaf6" />
    </svg>
  );
}
