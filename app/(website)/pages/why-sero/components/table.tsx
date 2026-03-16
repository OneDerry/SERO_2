import { cn } from "@/lib/utils";
import Image from "next/image";

const rows = [
  "No Sugar, No Crash",
  "No Artificial Sweeteners",
  "Tastes Like a Real Soda",
  "Guilt-Free Daily Sipping",
  "Ingredient Transparency",
  "Crave-Worthy Flavours",
];

const columns = [
  { name: "SERO", image: "/logo.avif", highlight: true },
  { name: "Diet Sodas", emoji: "\u26A0\uFE0F", highlight: false },
  { name: "Other Natural Sodas", emoji: "\uD83D\uDE10", highlight: false },
  { name: "Regular Sodas", emoji: "\u274C", highlight: false },
];

// [SERO, Diet Sodas, Other Natural Sodas, Regular Sodas]
type Status = "check" | "x" | "warn" | "meh";
type Cell = { status: Status; text: string };

const data: Cell[][] = [
  [
    { status: "check", text: "Yes — 0g sugar, 0g carbs" },
    { status: "check", text: "No sugar, but loaded with aspartame/sucralose" },
    { status: "check", text: "Varies — sometimes low sugar" },
    { status: "x", text: "Up to 40g per can" },
  ],
  [
    { status: "check", text: "Stevia only" },
    { status: "x", text: "Artificial (aspartame, etc.)" },
    { status: "check", text: "Natural, but can taste flat" },
    { status: "x", text: "Tons of refined sugar" },
  ],
  [
    { status: "check", text: "Full flavour, no aftertaste" },
    { status: "warn", text: "Often has chemical aftertaste" },
    { status: "meh", text: "Subtle or bland flavour" },
    { status: "check", text: "Yes, but at a cost" },
  ],
  [
    { status: "check", text: "100% daily drinkable" },
    { status: "warn", text: "Dubious for regular use" },
    { status: "meh", text: "Not crave-worthy daily" },
    { status: "x", text: "Occasional indulgence only" },
  ],
  [
    { status: "check", text: "Clean label, nothing shady" },
    { status: "x", text: "Hard to decode labels" },
    { status: "check", text: "Mostly clean" },
    { status: "x", text: "Sugar, phosphoric acid, etc." },
  ],
  [
    { status: "check", text: "Bold, nostalgic flavours you'll crave" },
    { status: "x", text: "Limited or outdated options" },
    { status: "meh", text: "Niche or hit-and-miss" },
    { status: "check", text: "Classic — but overdone" },
  ],
];

export function LookingTable() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24">
      <div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-sero-dark text-center mb-12">
          What You&apos;re Actually Looking For
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground" />
                {columns.map((col) => (
                  <th
                    key={col.name}
                    className={cn(
                      "p-4 text-center text-sm font-bold border-[1.5px] border-foreground",
                      col.highlight
                        ? "bg-primary text-white"
                        : "text-sero-dark",
                    )}
                  >
                    <p className="flex items-center justify-center w-full">
                      {"image" in col && col.image ? (
                        <Image
                          src={col.image}
                          alt={col.name}
                          width={150}
                          height={50}
                        />
                      ) : (
                        <>
                          {col.name} {col.emoji}
                        </>
                      )}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-[1.5px] border-foreground">
              {rows.map((row, i) => (
                <tr
                  key={row}
                  className={
                    i % 2 === 0
                      ? "bg-white border-[1.5px] border-foreground"
                      : "bg-gray-50 border"
                  }
                >
                  <td className="p-4 text-sm font-medium text-sero-dark border-[1.5px] border-foreground">
                    {row}
                  </td>
                  {data[i].map((cell, j) => (
                    <td
                      key={j}
                      className={cn(
                        "p-4 text-center border-[1.5px] border-foreground",
                        j === 0 && "bg-primary",
                      )}
                    >
                      <p className="inline-flex items-center gap-2 justify-center">
                        {cell.status === "check" && (
                          <span className="inline-flex shrink-0 w-6 h-6 rounded-full bg-green-500 items-center justify-center text-white text-xs">
                            &#10003;
                          </span>
                        )}
                        {cell.status === "x" && (
                          <span className="inline-flex shrink-0 w-6 h-6 rounded-full bg-red-500 items-center justify-center text-white text-xs">
                            &#10007;
                          </span>
                        )}
                        {cell.status === "warn" && (
                          <span className="shrink-0 text-lg">
                            &#9888;&#65039;
                          </span>
                        )}
                        {cell.status === "meh" && (
                          <span className="shrink-0 text-lg">&#128528;</span>
                        )}
                        <span className="text-sm text-left">{cell.text}</span>
                      </p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
