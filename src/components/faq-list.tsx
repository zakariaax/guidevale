import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/types";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion className="border-t border-border">
      {faqs.map((faq) => (
        <AccordionItem key={faq.q} value={faq.q}>
          <AccordionTrigger className="py-4 text-base">{faq.q}</AccordionTrigger>
          <AccordionContent>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              {faq.a}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
