import type { ProductDetails } from "@/data/products";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";

interface ProductFaqProps {
  faqs: ProductDetails["faqs"];
}

export function ProductFaq({ faqs }: ProductFaqProps) {
  const mid = Math.ceil(faqs?.length / 2);
  const leftColumn = faqs?.slice(0, mid);
  const rightColumn = faqs?.slice(mid);

  return (
    <section className="relative px-4 md:px-8 py-16 md:py-24 bg-[#D7EDFF]">
      <PaintSplash position={"top"} color={"half-light"} />
      <PaintSplash position={"bottom"} color={"half-light"} />

      <div className="mx-auto max-w-5xl mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-sero-dark text-center mb-4">
          Need to Know Before You Sip?
        </h2>
        <p className="text-center max-w-2xl text-xs mx-auto mb-8">
          Here&apos;s everything you need to know before you sip.{" "}
          <span className="font-bold">Zero sugar, zero stress.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {leftColumn?.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`left-${i}`}
                className="rounded-xl bg-background text-sero-dark border-foreground last:border border shadow-[8px_8px_0_0_rgba(117,211,255)]"
              >
                <AccordionTrigger className="text-lg font-black px-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {rightColumn?.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`right-${i}`}
                className="rounded-xl bg-background text-sero-dark border-foreground last:border border shadow-[8px_8px_0_0_rgba(117,211,255)]"
              >
                <AccordionTrigger className="text-lg font-black px-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
