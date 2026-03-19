import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
} from "@/shared/common";
import { sodaFaqs } from "@/data/products";

export default function SodaQs() {
  const faqs = sodaFaqs;
  const mid = Math.ceil(faqs?.length / 2);
  const leftColumn = faqs?.slice(0, mid);
  const rightColumn = faqs?.slice(mid);

  return (
    <main className="pb-45 space-y-32 my-16">
      <section>
        <h2 className="text-2xl md:text-4xl font-extrabold text-sero-dark text-center mb-4">
          Soda Qs? We&apos;ve Got Straight As.
        </h2>
        <p className="text-center max-w-2xl text-xs mx-auto mb-8">
          Here are some things people asked us before absolutely{" "}
          <span className="font-black italic text-sm">
            loading up their fridge.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 px-4 sm:px-0 max-w-6xl mx-auto ">
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

      <section className="flex flex-col items-center justify-center pt-16">
        <h2 className="text-4xl md:text-7xl font-black text-foreground text-center mb-4">
          You’ve Read the Why. Now Taste the Wow.
        </h2>
        <p className="text-center max-w-2xl text-xs mx-auto mb-8">
          No sugar. No chemicals. No catch. Just bold flavour, clean
          ingredients, and the best can in your fridge. Ever.
        </p>
        <Button
          size="lg"
          className="rounded-2xl px-3 py-6 text-md font-black shadow-[6px_6px_0_0_rgba(117,211,255,0.3)]"
        >
          Shop all Flavors
        </Button>
      </section>
    </main>
  );
}
