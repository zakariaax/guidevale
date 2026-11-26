export type Tier = "everyday" | "step-up" | "flagship";

export type PlateId =
  | "purifier"
  | "vacuum"
  | "skillet"
  | "headphones"
  | "speaker"
  | "care";

export type Spec = { label: string; value: string };

export type Faq = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  tier: Tier;
  /** Shown in the home list under the hero. */
  spotlight: boolean;
  /** The single product that opens the homepage. */
  hero: boolean;
  verdict: string;
  dek: string;
  searchQuery: string;
  updated: string;
  plate: PlateId;
  why: string[];
  bestFor: string[];
  skipIf: string[];
  watchouts: string[];
  specs: Spec[];
  faqs: Faq[];
  related: string[];
  sources: string;
};

export type Category = {
  slug: string;
  name: string;
  kicker: string;
  lede: string;
  body: string[];
  plate: PlateId;
};

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "products"; slugs: string[]; note?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; caption: string; headers: string[]; rows: string[][] };

export type Comparison = {
  slug: string;
  /** Written the way people search it: "X vs Y". */
  title: string;
  description: string;
  dek: string;
  updated: string;
  minutes: number;
  products: [string, string];
  /** One "pick it if" list per product, in the same order as `products`. */
  pickIf: [string[], string[]];
  bottomLine: string;
  /** Rows of [label, first product, second product]. */
  table: [string, string, string][];
  blocks: GuideBlock[];
  faqs: Faq[];
  sources: string;
  guide: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  dek: string;
  updated: string;
  minutes: number;
  blocks: GuideBlock[];
  faqs: Faq[];
};
