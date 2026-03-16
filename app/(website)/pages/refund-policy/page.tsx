import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";

export default function RefundPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <div className="relative flex items-center justify-center bg-linear-to-t from-primary-semilight to-background px-6 py-16 md:py-20 mt-10 mb-56">
        <PaintStrides position="bottom" color="primary-semi-light" />
        <div className="text-center max-w-4xl space-y-3">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Refund Policy
          </h1>
          <p className="text-sm text-sero-dark/70 max-w-xl mx-auto">
            All sales are final. Here&apos;s everything you need to know.
          </p>
        </div>
      </div>

      {/* Highlight banner */}
      <section className="px-6 -mt-40 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border-[1.5px] border-foreground bg-foreground text-background p-8 md:p-10 shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              No Return Policy
            </h2>
            <p className="text-sm leading-relaxed text-background/80">
              All sales are final. We do not accept returns or exchanges on any
              items. Please review your order carefully before completing your
              purchase. This policy does not affect your rights should you
              receive a defective, damaged, or incorrectly shipped item.
            </p>
          </div>
        </div>
      </section>

      {/* Policy cards */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-6 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
            <h2 className="text-lg font-black text-sero-dark mb-2">
              Damages &amp; Issues
            </h2>
            <p className="text-sm leading-relaxed">
              Please inspect your order upon reception and contact us
              immediately at{" "}
              <a
                href="mailto:sales@serobeverages.com"
                className="font-black underline decoration-wavy underline-offset-2 hover:text-primary transition-colors"
              >
                sales@serobeverages.com
              </a>{" "}
              if the item is defective, damaged, or if you receive the wrong
              item. We will evaluate the issue and work with you to make it
              right.
            </p>
          </div>

          <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-6 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
            <h2 className="text-lg font-black text-sero-dark mb-2">
              Exchanges
            </h2>
            <p className="text-sm leading-relaxed">
              We do not offer exchanges. If you wish to exchange an item, please
              place a new order. All sales are final.
            </p>
          </div>

          <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-6 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
            <h2 className="text-lg font-black text-sero-dark mb-2">
              Non-Returnable Items
            </h2>
            <p className="text-sm leading-relaxed">
              Due to our no return policy, all of our products&mdash;soda, other
              beverages, and merchandise&mdash;are non-returnable. Once a
              purchase is made, it is considered final. If you have any
              questions or concerns about your specific item, please contact us
              at{" "}
              <a
                href="mailto:sales@serobeverages.com"
                className="font-black underline decoration-wavy underline-offset-2 hover:text-primary transition-colors"
              >
                sales@serobeverages.com
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-6 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
            <h2 className="text-lg font-black text-sero-dark mb-2">Refunds</h2>
            <p className="text-sm leading-relaxed">
              If your order is canceled or, in the case of a defective, damaged,
              or incorrect item, a return is approved under applicable law, we
              will notify you once we have received and inspected the item. If
              approved, the refund will be processed on your original payment
              method within 10 business days. Please allow additional time for
              your bank or credit card company to process and post the refund.
            </p>
          </div>
        </div>
      </section>

      {/* EU Section */}
      <section className=" py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              EU 14-Day Cooling Off Period
            </h2>
            <p className="text-sm leading-relaxed">
              Notwithstanding our no return policy, if the merchandise is being
              shipped into the European Union, you have the right to cancel your
              order within 14 days for any reason, in accordance with applicable
              EU consumer protection laws. In such cases, the item must be in
              its original condition&mdash;unworn or unused, with all tags and
              in its original packaging, along with the receipt or proof of
              purchase. Please note that this right may not apply to items that
              are non-returnable as described above.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative bg-linear-to-b from-primary-semilight to-background py-16 px-6 mb-20">
        <PaintSplash position="top" color="primary-semi-light" />
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-sero-dark">
            Questions?
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto">
            For any refund-related inquiries, reach out to us at{" "}
            <a
              href="mailto:sales@serobeverages.com"
              className="font-black underline decoration-wavy underline-offset-2 hover:text-primary transition-colors"
            >
              sales@serobeverages.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
