import { sharedFaqs } from "@/data/products";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";
import { ProductCarousel } from "@/shared/general/ProductCarousel";

export default function FaqPage() {
  const faqs = sharedFaqs;
  const mid = Math.ceil(faqs?.length / 2);
  const leftColumn = faqs?.slice(0, mid);
  const rightColumn = faqs?.slice(mid);

  return (
    <main className="pb-45 space-y-32 my-16">
      <section>
        <h2 className="text-2xl md:text-4xl font-extrabold text-sero-dark text-center mb-4">
          New to Sero? Start Here.
        </h2>
        <p className="text-center max-w-2xl text-xs mx-auto mb-8">
          Fast facts, fizz logic, and why your next favourite soda is already
          waiting
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 max-w-4xl mx-auto ">
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
      </section>

      <section className="bg-linear-to-b from-primary-semilight to-white relative pt-16">
        <PaintSplash position={"top"} color={"primary-semi-light"} />

        <h2 className="text-2xl md:text-4xl font-extrabold text-sero-dark text-center mb-4">
          Got Your Answers? Now Get Your Flavour!
        </h2>
        <p className="text-center max-w-2xl text-xs mx-auto mb-8">
          The answers were sweet. These flavours are sweetern <br /> (without
          the sugar).
        </p>

        <ProductCarousel />
      </section>
    </main>
  );
}
