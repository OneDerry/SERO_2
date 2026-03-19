import Image from "next/image";

export function VsDietSoda() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24">
      <div className="sm:mx-auto sm:max-w-[80%]">
        {/* Mobile: text on top, then images side by side */}
        {/* Desktop: 3-column grid */}
        <div className="flex flex-col md:hidden gap-8">
          {/* VS Center - on top for mobile */}
          <div className="sm:max-w-sm sm:mx-auto">
            <h2 className="text-2xl font-extrabold text-sero-dark text-center mb-4">
              Sero vs &quot;Diet&quot; Soda
            </h2>
            <p className="text-center text-sm max-w-xl mx-auto">
              <span className="font-black">
                The problem with most diet sodas is they taste like denial — and
                finish like regret.
              </span>
              You know the type: flat, metallic, and weirdly addictive in a way
              your body instantly questions. Diet soda promises to be "better,"
              but it&apos;s loaded with artificial sweeteners and aftertaste.
              Sero skips the fake stuff and delivers real flavour you&apos;ll
              actually enjoy.
            </p>
          </div>

          {/* Images side by side */}
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col items-center">
              <div className="relative h-[250px] w-full border border-foreground rotate-[-5deg] rounded-2xl shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
                <Image
                  src="/rocket_soda_pack.webp"
                  alt=""
                  fill
                  className="object-cover border border-foreground rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative border border-foreground rotate-[5deg] rounded-2xl shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
                <Image
                  src="/diet_soda.webp"
                  alt=""
                  width={400}
                  height={400}
                  className="object-cover h-[250px] w-full border border-foreground rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
          {/* Sero Product */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[450px] w-full border border-foreground rotate-[-5deg] rounded-2xl shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/rocket_soda_pack.webp"
                alt=""
                fill
                className="object-cover border border-foreground rounded-2xl"
              />
            </div>
          </div>

          {/* VS Center */}
          <div className="sm:max-w-sm sm:mx-auto">
            <h2 className="text-5xl font-extrabold text-sero-dark text-center mb-4">
              Sero vs &quot;Diet&quot; Soda
            </h2>
            <p className="text-center text-sm max-w-xl mx-auto mb-12">
              <span className="font-black">
                The problem with most diet sodas is they taste like denial — and
                finish like regret.
              </span>
              You know the type: flat, metallic, and weirdly addictive in a way
              your body instantly questions. Diet soda promises to be "better,"
              but it&apos;s loaded with artificial sweeteners and aftertaste.
              Sero skips the fake stuff and delivers real flavour you&apos;ll
              actually enjoy.
            </p>
          </div>

          {/* Competitor */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative border border-foreground rotate-[5deg] rounded-2xl shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/diet_soda.webp"
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
