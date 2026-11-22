const PLACEHOLDER_TAG = "yourtag-20";

export function siteOrigin() {
  const raw = process.env.SITE_URL?.trim().replace(/\/$/, "");
  if (!raw) return "";
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "";
    return url.origin;
  } catch {
    return "";
  }
}

export function abs(path: string) {
  const origin = siteOrigin();
  return origin ? `${origin}${path}` : path;
}

export function associateState() {
  const raw = process.env.AMAZON_ASSOCIATE_TAG?.trim() ?? "";
  const safe = /^[A-Za-z0-9][A-Za-z0-9-]{1,30}$/.test(raw);
  if (!safe || raw === PLACEHOLDER_TAG) {
    return { tag: PLACEHOLDER_TAG, placeholder: true };
  }
  return { tag: raw, placeholder: false };
}

export function amazonSearchUrl(query: string) {
  const { tag, placeholder } = associateState();
  const url = new URL("https://www.amazon.com/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", tag);
  return { href: url.toString(), placeholder };
}

export function formatDeskDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export const deskUpdated = "2026-11-22";

export const associateDisclosure =
  "As an Amazon Associate I earn from qualifying purchases.";
