import Image from "next/image";

export function SimplePieces() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 mt-96">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Sero Product */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[650px] w-[650px]  border border-foreground rotate-[-5deg] rounded-2xl shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/sero_hoodie.webp"
                alt="Sero Hoodie"
                fill
                className="object-cover border border-foreground rounded-2xl"
              />
            </div>
          </div>

          {/* VS Center */}
          <div className="max-w-sm mx-auto">
            <h2 className="text-2xl md:text-5xl font-extrabold text-sero-dark text-center mb-4">
              Simple pieces that don&apos;t need explaining.
            </h2>
          </div>

          {/* Competitor */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[650px] w-[650px] border border-foreground rotate-[5deg] rounded-2xl shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/sero_cap.webp"
                alt="Sero Cap"
                fill
                className="object-cover border border-foreground rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
