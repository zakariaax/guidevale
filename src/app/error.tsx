"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
      <h1 className="font-heading text-4xl tracking-tight">The desk hit a snag.</h1>
      <p className="mt-4 text-muted-foreground">
        The page did not finish loading. The catalog is still here.
      </p>
      <Button className="mt-6 h-11 rounded-full px-5" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
