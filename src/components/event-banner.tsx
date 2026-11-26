"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Pages are prerendered and cached, so a build-time date check would leave the
 * banner up after the event. The client hides it once `endsAt` has passed.
 */
export function EventBanner({
  endsAt,
  label,
  text,
  href,
  cta,
}: {
  endsAt: string;
  label: string;
  text: string;
  href: string;
  cta: string;
}) {
  const expired = useSyncExternalStore(
    noopSubscribe,
    () => Date.now() > Date.parse(endsAt),
    () => false,
  );
  if (expired) return null;

  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-3xl bg-ink p-4 text-[#f6f1e8] transition hover:bg-[#2a221b] sm:flex-row sm:items-center sm:gap-4 sm:px-5"
    >
      <span className="w-fit shrink-0 rounded-full bg-signal px-3 py-1 text-xs font-bold tracking-[0.16em]">
        {label}
      </span>
      <span className="flex-1 text-sm leading-6 sm:text-base">{text}</span>
      <span className="shrink-0 text-sm font-semibold text-[#f3c7b4] group-hover:underline">
        {cta} →
      </span>
    </Link>
  );
}
