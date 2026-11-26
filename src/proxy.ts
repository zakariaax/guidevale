import { NextResponse, type NextRequest } from "next/server";

/** One public origin: www and any other alias redirect permanently to SITE_URL. */
export function proxy(request: NextRequest) {
  const raw = process.env.SITE_URL?.trim();
  if (!raw) return;

  let site: URL;
  try {
    site = new URL(raw);
  } catch {
    return;
  }

  const url = new URL(request.url);
  if (url.hostname !== `www.${site.hostname}`) return;

  url.protocol = site.protocol;
  url.hostname = site.hostname;
  url.port = site.port;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/((?!_next/static|img/).*)"],
};
