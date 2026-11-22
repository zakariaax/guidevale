import { Button } from "@/components/ui/button";
import { amazonSearchUrl } from "@/lib/site";

export function AmazonButton({
  query,
  label = "See today's price on Amazon",
}: {
  query: string;
  label?: string;
}) {
  const { href } = amazonSearchUrl(query);
  return (
    <div className="flex flex-col items-start gap-2">
      <Button
        nativeButton={false}
        render={
          <a
            href={href}
            rel="sponsored noopener noreferrer"
            target="_blank"
          />
        }
        className="h-12 rounded-full px-5 text-base font-semibold"
      >
        {label}
        <span aria-hidden="true">↗</span>
      </Button>
      <p className="text-xs leading-5 text-muted-foreground">
        Paid link. Opens Amazon in a new tab. The price there is the one that
        counts.
      </p>
    </div>
  );
}
