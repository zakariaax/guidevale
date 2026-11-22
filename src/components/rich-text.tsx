import Link from "next/link";
import type { ReactNode } from "react";

const LINK = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;

export function RichText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    const href = match[2];
    if (href.startsWith("/") && !href.startsWith("//")) {
      parts.push(
        <Link
          key={key++}
          href={href}
          className="font-medium text-signal-deep underline decoration-[#efcfc0] underline-offset-[3px] hover:decoration-signal"
        >
          {match[1]}
        </Link>,
      );
    } else {
      parts.push(match[0]);
    }
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <p className={className}>{parts}</p>;
}
