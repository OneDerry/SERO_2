import Image from "next/image";
import type { Product } from "@/data/products";

interface SeroVsOthersProps {
  product: Product;
}

export function SeroVsOthers({ product }: SeroVsOthersProps) {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24">
      <div className="sm:mx-auto sm:max-w-[90%]">
        {/* Mobile: text on top, then images side by side */}
        {/* Desktop: 3-column grid */}
        <div className="flex flex-col md:hidden gap-8">
          {/* VS Center - on top for mobile */}
          <div className="sm:max-w-sm sm:mx-auto">
            <h2 className="text-2xl font-extrabold text-sero-dark text-center mb-4">
              Sero vs Other &ldquo;Healthy&rdquo; Sodas
            </h2>
            <p className="text-center text-sm max-w-xl mx-auto">
              Most better-for-you sodas cut the sugar but forget the flavour. Or
              worse — they&apos;re loaded with lab-grown sweeteners, weird
              aftertaste, and ingredients that make your gut say &ldquo;no
              thanks.&rdquo; Sero skips the compromises.No sugar. No chemicals.
              No bitter finish. Just soda done right.
            </p>
          </div>

          {/* Images side by side */}
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col items-center">
              <div className="relative border border-foreground rotate-[-5deg] rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover h-[250px] w-full border border-foreground rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative border border-foreground rotate-[5deg] rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
                <Image
                  src="/gutRot.webp"
                  alt={product.name}
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
            <div className="relative border border-foreground rotate-[-5deg] rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover h-[450px] w-full border border-foreground rounded-2xl"
              />
            </div>
          </div>

          {/* VS Center */}
          <div className="sm:max-w-sm sm:mx-auto">
            <h2 className="text-5xl font-extrabold text-sero-dark text-center mb-4">
              Sero vs Other &ldquo;Healthy&rdquo; Sodas
            </h2>
            <p className="text-center text-sm max-w-xl mx-auto mb-12">
              Most better-for-you sodas cut the sugar but forget the flavour. Or
              worse — they&apos;re loaded with lab-grown sweeteners, weird
              aftertaste, and ingredients that make your gut say &ldquo;no
              thanks.&rdquo; Sero skips the compromises.No sugar. No chemicals.
              No bitter finish. Just soda done right.
            </p>
          </div>

          {/* Competitor */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative border border-foreground rotate-[5deg] rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
              <Image
                src="/gutRot.webp"
                alt={product.name}
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
