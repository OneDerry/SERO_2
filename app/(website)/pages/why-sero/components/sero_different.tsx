import { CircleCheck } from "lucide-react";

const manifestoItems = [
  { emoji: "💬", text: "Started as a group chat. Still feels like one." },
  { emoji: "🤝", text: "We take Sero seriously — not ourselves." },
  { emoji: "🧪", text: "No labs. No weird formulas. Just flavour." },
  { emoji: "👅", text: "Built by taste buds, not brand decks." },
  { emoji: "🚫", text: "No suits. No boardroom. No fake buzzwords" },
  { emoji: "🧃", text: "We didn't tweak soda. We rebuilt it." },
  { emoji: "✅", text: "We fixed what big soda wouldn't." },
  { emoji: "📦", text: "Every order still feels personal." },
  { emoji: "✅", text: "We fixed what big soda wouldn't." },
  { emoji: "📦", text: "Every order still feels personal." },
];

export default function SeroDifferent() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-black text-center text-sero-dark mb-10">
        What makes Sero different
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {manifestoItems.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-3 py-1">
            <span className="flex items-center gap-2 text-sm md:text-base">
              <span>{item.emoji}</span>
              <span>{item.text}</span>
            </span>
            <CircleCheck className="size-5 shrink-0 text-foreground" />
          </div>
        ))}
      </div>
    </section>
  );
}
