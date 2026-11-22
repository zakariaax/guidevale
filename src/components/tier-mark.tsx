import type { Tier } from "@/data/types";

const copy: Record<Tier, string> = {
  everyday: "DAILY",
  "step-up": "STEP",
  flagship: "FLAG",
};

export function TierMark({ tier, desk = false }: { tier: Tier; desk?: boolean }) {
  return (
    <span className="grid size-[3.25rem] shrink-0 place-items-center rounded-2xl bg-signal text-[11px] font-bold tracking-[0.14em] text-white">
      {desk ? "DESK" : copy[tier]}
    </span>
  );
}
