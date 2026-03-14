import type { ProductDetails } from "@/data/products";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/common";

interface ProductDetailsTabsProps {
  details: ProductDetails;
  productName: string;
}

export function ProductDetailsTabs({ details }: ProductDetailsTabsProps) {
  return (
    <section className="">
      <div className="max-w-2xl">
        <Tabs defaultValue="whyYoullLoveIt" className="w-full">
          <TabsList
            variant="line"
            className="flex flex-wrap justify-center bg-transparent h-auto"
          >
            <TabsTrigger
              value="whyYoullLoveIt"
              className="py-2 text-xs text-start font-semibold text-sero-dark data-[state=active]:bg-primary data-[state=active]:text-foreground"
            >
              Why You&apos;ll Love It
            </TabsTrigger>
            <TabsTrigger
              value="shippingAndGuarantee"
              className="py-2 text-xs text-start font-semibold text-sero-dark data-[state=active]:bg-primary data-[state=active]:text-foreground"
            >
              Shipping & Guarantee
            </TabsTrigger>
            <TabsTrigger
              value="whatYoureGetting"
              className="py-2 text-xs text-start font-semibold text-sero-dark data-[state=active]:bg-primary data-[state=active]:text-foreground"
            >
              What You&apos;re Getting
            </TabsTrigger>
          </TabsList>

          {(
            [
              "whyYoullLoveIt",
              "shippingAndGuarantee",
              "whatYoureGetting",
            ] as const
          ).map((key) => (
            <TabsContent key={key} value={key}>
              <div className="space-y-4">
                <h3 className="text-sm font-black text-sero-dark">
                  {details[key].title}
                </h3>
                <ul className="space-y-3 text-xs">
                  {details[key].listItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-foreground" />
                      <span className="text-sero-dark">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-black text-sero-dark">
                  {details[key].benefit}
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
