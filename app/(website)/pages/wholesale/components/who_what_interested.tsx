import { Button } from "@/shared/common";
import { CircleCheck } from "lucide-react";

const whoItems = [
  { text: "Started as a group chat. Still feels like one." },
  { text: "We take Sero seriously — not ourselves." },
  { text: "No labs. No weird formulas. Just flavour." },
  { text: "Built by taste buds, not brand decks." },
  { text: "No suits. No boardroom. No fake buzzwords" },
  { text: "We didn't tweak soda. We rebuilt it." },
];

const whatItems = [
  { text: "We fixed what big soda wouldn't." },
  { text: "Every order still feels personal." },
  { text: "We fixed what big soda wouldn't." },
  { text: "Every order still feels personal." },
  { text: "We fixed what big soda wouldn't." },
  { text: "Every order still feels personal." },
];

export default function WhoWhatInterested() {
  return (
    <main>
      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center text-sero-dark mb-10">
          Who we&apos;re looking for
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {whoItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-3 py-1"
            >
              <span className="flex items-center gap-2 text-sm md:text-base">
                <span>{item.text}</span>
              </span>
              <CircleCheck className="size-5 shrink-0 text-foreground" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center text-sero-dark mb-10">
          What we&apos;re looking for
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {whatItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-3 py-1"
            >
              <span className="flex items-center gap-2 text-sm md:text-base">
                <span>{item.text}</span>
              </span>
              <CircleCheck className="size-5 shrink-0 text-foreground" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center text-sero-dark mb-10">
          Interested?
        </h2>
        <div className="max-w-4xl mx-auto">
          <p>
            Tell us a bit about your business and we&apos;ll follow up fast.
            Let&apos;s make something great happen. Whether you run a single
            storefront or manage a national chain, we&apos;re ready to connect.
            Fill out the form below, and our team will get back to you with
            everything you need to start stocking Sero.
          </p>
          <p>We&apos;ll bring the flavor—you bring it to the people.</p>

          <Button>Contact Us</Button>
        </div>
      </section>
    </main>
  );
}
