import Image from "next/image";

export function VsSero() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Sero Product */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[450px] w-full  border border-foreground rotate-[-5deg] rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/citrus_twist_pack.webp"
                alt=""
                fill
                className="object-cover border border-foreground rounded-2xl"
              />
            </div>
          </div>

          {/* VS Center */}
          <div className="max-w-sm mx-auto">
            <h2 className="text-2xl md:text-5xl font-extrabold text-sero-dark text-center mb-4">
              Sero vs Regular Soda
            </h2>
            <p className="text-center text-sm max-w-xl mx-auto mb-12">
              <span className="font-black">
                The problem with regular soda is that it tastes great — and
                wrecks everything else.
              </span>{" "}
              40+ grams of sugar in a single can. Blood sugar spikes.
              Mid-afternoon crashes. Not to mention the guilt. Sero gives you
              everything you like about soda — the fizz, the flavour, the
              satisfaction — without wrecking your day (or your metabolism).
            </p>
          </div>

          {/* Competitor */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative border border-foreground rotate-[5deg] rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/sugar_blast.webp"
                alt=""
                width={400}
                height={400}
                className="object-cover h-[450px] w-full border border-foreground rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
