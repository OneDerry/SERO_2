import { Button, Input } from "@/shared/common";
import { PaintStrides } from "@/shared/general/paint_strides";

export function NewsletterSection() {
  return (
    <section className="relative bg-white py-24 md:py-16">
      <PaintStrides position="top" color="light" />

      <div className="mx-auto max-w-[60%] px-6 text-center ">
        <div className="space-y-0 leading-0.5">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sero-dark mb-4">
            Get the Drop on All the Drops
          </h2>
          <p className="text-sm text-gray-600">
            Be first to know when new flavours land. Exclusive offers. No spam.
          </p>
          <p className="text-xs font-bold text-sero-dark mb-8">
            10% off your first order!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-foreground px-6 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          <Button
            type="button"
            size="sm"
            variant="default"
            className="rounded-full text-xs font-black shadow-[3px_4px_0_0_rgba(59,130,246,0.3)] hover:shadow-[1px_1px_0_0_rgba(59,130,246,0.2)]"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
