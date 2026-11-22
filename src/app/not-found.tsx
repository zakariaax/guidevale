import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-signal">OFF THE DESK</p>
      <h1 className="font-heading mt-3 text-4xl tracking-tight">
        That page is not on the shelf.
      </h1>
      <p className="mt-4 text-muted-foreground">
        The catalog is short, and this address is not one of the notes.
      </p>
      <Link href="/" className={`${buttonVariants()} mt-6 inline-flex h-11 rounded-full px-5`}>
        Back to the desk
      </Link>
    </div>
  );
}
