import { cn } from "cn";
import type { PlateId } from "@/data/types";

const grounds: Record<PlateId, string> = {
  purifier: "#d7ebe3",
  vacuum: "#f3e3c4",
  skillet: "#f6d7c8",
  headphones: "#d9e3f4",
  speaker: "#e4dff6",
  care: "#f6d5df",
};

export function ProductPlate({
  id,
  className,
}: {
  id: PlateId;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid aspect-square place-items-center rounded-[1.4rem]",
        className,
      )}
      style={{ background: grounds[id] }}
      aria-hidden
    >
      <svg viewBox="0 0 80 80" className="h-[68%] w-[68%]">
        <Glyph id={id} />
      </svg>
    </div>
  );
}

function Glyph({ id }: { id: PlateId }) {
  const ink = "#1c1712";
  if (id === "purifier") {
    return (
      <g fill="none" stroke={ink} strokeWidth="2.2">
        <rect x="26" y="10" width="28" height="58" rx="6" />
        <path d="M32 22h16M32 30h16M32 38h16M32 46h16" />
        <circle cx="40" cy="58" r="2.2" fill={ink} stroke="none" />
      </g>
    );
  }
  if (id === "vacuum") {
    return (
      <g fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round">
        <circle cx="40" cy="46" r="16" />
        <circle cx="40" cy="46" r="6" />
        <path d="M40 30V16h14" />
        <rect x="50" y="12" width="12" height="8" rx="2" />
      </g>
    );
  }
  if (id === "skillet") {
    return (
      <g fill="none" stroke={ink} strokeWidth="2.2">
        <ellipse cx="34" cy="42" rx="18" ry="14" />
        <path d="M50 38h18c2 0 4 3 4 6s-2 6-4 6H50" strokeLinecap="round" />
        <path d="M24 42h20" strokeLinecap="round" />
      </g>
    );
  }
  if (id === "headphones") {
    return (
      <g fill="none" stroke={ink} strokeWidth="2.2">
        <path d="M18 42c0-14 10-24 22-24s22 10 22 24" strokeLinecap="round" />
        <rect x="12" y="38" width="12" height="20" rx="4" />
        <rect x="56" y="38" width="12" height="20" rx="4" />
      </g>
    );
  }
  if (id === "speaker") {
    return (
      <g fill="none" stroke={ink} strokeWidth="2.2">
        <rect x="24" y="14" width="32" height="52" rx="16" />
        <circle cx="40" cy="34" r="6" />
        <circle cx="40" cy="52" r="3" fill={ink} stroke="none" />
      </g>
    );
  }
  return (
    <g fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round">
      <path d="M30 18h8l4 8H28z" />
      <rect x="28" y="26" width="16" height="36" rx="8" />
      <path d="M48 30c8 2 12 10 12 16" />
    </g>
  );
}
