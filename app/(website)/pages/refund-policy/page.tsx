export default function RefundPolicyPage() {
  return (
    <main className="max-w-lg mx-auto px-6 py-14">
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center mb-6">
        Refund policy
      </h1>

      <div className="space-y-4 text-xs leading-normal">
        <section>
          <h2 className="font-bold mb-1">No Return Policy</h2>
          <p>
            All sales are final. We do not accept returns or exchanges on any
            items. Please review your order carefully before completing your
            purchase. This policy does not affect your rights should you receive
            a defective, damaged, or incorrectly shipped item.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-1">Damages and Issues</h2>
          <p>
            Please inspect your order upon reception and contact us immediately
            at{" "}
            <a
              href="mailto:sales@serobeverages.com"
              className="font-black underline decoration-wavy underline-offset-2 hover:text-primary transition-colors"
            >
              sales@serobeverages.com
            </a>{" "}
            if the item is defective, damaged, or if you receive the wrong item.
            We will evaluate the issue and work with you to make it right.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-1">
            Exceptions / Non-returnable Items
          </h2>
          <p>
            Due to our no return policy, all of our products—soda, other
            beverages, and merchandise—are non-returnable. Once a purchase is
            made, it is considered final. If you have any questions or concerns
            about your specific item, please contact us at{" "}
            <a
              href="mailto:sales@serobeverages.com"
              className="font-black underline decoration-wavy underline-offset-2 hover:text-primary transition-colors"
            >
              sales@serobeverages.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-1">Exchanges</h2>
          <p>
            We do not offer exchanges. If you wish to exchange an item, please
            place a new order. All sales are final.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-1">
            European Union 14-Day Cooling Off Period
          </h2>
          <p>
            Notwithstanding our no return policy, if the merchandise is being
            shipped into the European Union, you have the right to cancel your
            order within 14 days for any reason, in accordance with applicable EU
            consumer protection laws. In such cases, the item must be in its
            original condition—unworn or unused, with all tags and in its
            original packaging, along with the receipt or proof of purchase.
            Please note that this right may not apply to items that are
            non-returnable as described above.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-1">Refunds</h2>
          <p>
            If your order is canceled or, in the case of a defective, damaged, or
            incorrect item, a return is approved under applicable law, we will
            notify you once we have received and inspected the item. If approved,
            the refund will be processed on your original payment method within 10
            business days. Please allow additional time for your bank or credit
            card company to process and post the refund. For any refund-related
            inquiries, please contact us at{" "}
            <a
              href="mailto:sales@serobeverages.com"
              className="font-black underline decoration-wavy underline-offset-2 hover:text-primary transition-colors"
            >
              sales@serobeverages.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
