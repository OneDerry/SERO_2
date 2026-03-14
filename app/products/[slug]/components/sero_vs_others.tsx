import Image from "next/image";
import type { Product } from "@/data/products";

interface SeroVsOthersProps {
  product: Product;
}

export function SeroVsOthers({ product }: SeroVsOthersProps) {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Sero Product */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative  border border-foreground rotate-[-5deg] rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
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
          <div className="max-w-sm mx-auto">
            <h2 className="text-2xl md:text-5xl font-extrabold text-sero-dark text-center mb-4">
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
