"use client";

import { useState, type ReactNode } from "react";
import { cn } from "cn";

export type FeedTab = {
  id: string;
  label: string;
  /** Attribute selector a card must match to stay visible on this tab; omit to show every card. */
  match?: string;
};

export type FeedRoom = { slug: string; name: string };

/**
 * Filters server-rendered cards by toggling data attributes and CSS, so every
 * card stays in the HTML for search engines and the client ships no card markup.
 */
export function DeskFeed({
  tabs,
  rooms,
  counts,
  children,
}: {
  tabs: FeedTab[];
  rooms: FeedRoom[];
  /** counts[tabId][roomSlug | "all"] */
  counts: Record<string, Record<string, number>>;
  children: ReactNode;
}) {
  const [tab, setTab] = useState(tabs[0].id);
  const [room, setRoom] = useState("all");
  const count = counts[tab]?.[room] ?? 0;
  const roomName = rooms.find((r) => r.slug === room)?.name;

  const rules = [
    ...tabs
      .filter((t) => t.match)
      .map((t) => `.desk-feed[data-tab="${t.id}"]>li:not(${t.match})`),
    ...rooms.map((r) => `.desk-feed[data-room="${r.slug}"]>li:not([data-cat="${r.slug}"])`),
  ];

  return (
    <div>
      <style>{`${rules.join(",")}{display:none}`}</style>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex w-max gap-1 rounded-full border border-border bg-card p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-9 rounded-full px-4 text-sm font-medium whitespace-nowrap transition",
                tab === t.id
                  ? "bg-ink text-[#f6f1e8]"
                  : "text-ink/70 hover:bg-secondary hover:text-ink",
              )}
            >
              {t.label}
              <span className={cn("ml-1.5 text-xs", tab === t.id ? "text-white/75" : "text-muted-foreground")}>
                {counts[t.id]?.all ?? 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="-mx-4 mt-3 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex w-max gap-2">
          {[{ slug: "all", name: "All rooms" }, ...rooms].map((r) => {
            const n = counts[tab]?.[r.slug] ?? 0;
            const active = room === r.slug;
            return (
              <button
                key={r.slug}
                type="button"
                aria-pressed={active}
                onClick={() => setRoom(r.slug)}
                className={cn(
                  "h-8 rounded-full border px-3 text-sm whitespace-nowrap transition",
                  active
                    ? "border-signal bg-signal text-white"
                    : "border-border bg-paper text-ink/80 hover:border-signal/50",
                  !active && n === 0 && "border-dashed text-muted-foreground",
                )}
              >
                {r.name}
                <span className={cn("ml-1 text-xs", active ? "text-white" : "text-muted-foreground")}>{n}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {count} {count === 1 ? "product" : "products"}
        {roomName ? ` in ${roomName}` : ""}. Amazon buttons are paid links.
      </p>

      <ul data-tab={tab} data-room={room} className="desk-feed mt-3 grid gap-3">
        {children}
      </ul>

      {count === 0 ? (
        <div className="mt-3 rounded-3xl border border-dashed border-border bg-card p-6 text-center">
          <p className="font-heading text-2xl">Nothing here on this shelf yet.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {roomName} has no {tabs.find((t) => t.id === tab)?.label.toLowerCase()} pick right now.
          </p>
          <button
            type="button"
            onClick={() => setRoom("all")}
            className="mt-4 h-10 rounded-full bg-ink px-5 text-sm font-medium text-[#f6f1e8]"
          >
            Show every room
          </button>
        </div>
      ) : null}
    </div>
  );
}
