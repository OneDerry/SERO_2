import Image from "next/image";
import { Starburst } from "@/shared/general/starburst";

export function NextCard() {
  const next = [
    {
      id: 1,
      title: "Corner Store Cool",
      image: "/corner_stone.webp",
      paragraph:
        "We're coming for your corner store. You know, the place where you grab gum, chips, and questionable energy drinks. Soon, you'll be able to swap that sugar bomb for something that actually tastes good and makes you feel good. Zero sugar, full flavor—right next to the lottery tickets.",
    },
    {
      id: 2,
      title: "Big Box Energy",
      image: "/big_box.webp",
      paragraph:
        "Major retailers? We're on their radar. It won't be long before Sero shows up on shelves next to the big guys—except without the crash, chemicals, or regret. We're bringing bold flavor and clean ingredients to an aisle near you. Target acquired. (Literally. Hopefully.)",
    },
    {
      id: 3,
      title: "Stadium Status",
      image: "/stadium.webp",
      paragraph:
        "Picture this: You're at the game. The crowd's roaring. You're holding a cold can of Sero. Yeah, that's the vibe. We're working to get into sports venues, concerts, and anywhere people scream, cheer, and need a drink that keeps up. No beer belly required.",
    },
  ];
  return (
    <div className="space-y-12 mb-40">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
          So What&apos;s Next?
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          We&apos;re just getting started. Sero is already making waves, and our
          next move is bringing that same zero-sugar, full-flavor experience to
          the places you shop, chill, and cheer. Keep an eye out—we&apos;re
          popping up where it matters most:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
        {next.map((n) => (
          <article
            key={n.id}
            className="relative rounded-xl border-[1.5px] border-foreground bg-card shadow-[8px_8px_0_0_rgba(117,211,255,0.9)] overflow-visible"
          >
            {/* Starburst number badge */}
            <div className="absolute -top-12 -left-16 z-10 text-background">
              <Starburst>{n.id}</Starburst>
            </div>

            <div className="p-4 space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center px-2 pb-4">
                <h2 className="text-xl font-extrabold text-foreground">
                  {n.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  {n.paragraph}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
