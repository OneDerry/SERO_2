import Image from "next/image";

export function VsHealthySoda() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Sero Product */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative  border border-foreground rotate-[-5deg] rounded-2xl shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/doctor_sero.webp"
                alt=""
                width={400}
                height={400}
                className="object-cover h-[450px] w-full border border-foreground rounded-2xl"
              />
            </div>
          </div>

          {/* VS Center */}
          <div className="max-w-sm mx-auto">
            <h2 className="text-2xl md:text-5xl font-extrabold text-sero-dark text-center mb-4">
              Sero vs &quot;Healthy&quot; Soda
            </h2>
            <p className="text-center text-sm max-w-xl mx-auto mb-12">
              <span className="font-black">
                The problem with most zero-sugar sodas is that they taste like a
                trick — and they often are.
              </span>
              You&apos;ve tried them — the chalky, flat, aftertaste-y sodas that
              promise &quot;zero sugar&quot; but taste like regret. Or worse,
              the ones loaded with chemicals you can&apos;t pronounce. We built
              Sero to fix all that.
            </p>
          </div>

          {/* Competitor */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative border border-foreground rotate-[5deg] rounded-2xl shadow-[8px_8px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/gutRot.webp"
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
