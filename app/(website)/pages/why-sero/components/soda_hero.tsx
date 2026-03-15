import { Card } from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";
import Image from "next/image";

export default function SodaHero() {
  return (
    <div className="flex relative items-center gap-8 bg-primary-semilight px-12 py-8 mt-10 mb-64">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />
      <div className="flex-1">
        <h1 className="text-7xl max-w-4xl font-black">
          Soda was never the problem.The ingredients were.
        </h1>
        <p className="max-w-4xl">
          We didn&apos;t make a healthy soda. We made soda healthy. Same
          crave-worthy flavour. Zero sugar. Nothing artificial. Everything your
          fridge&apos;s been missing.
        </p>
      </div>
      <div className="shrink-0">
        <Card className="relative w-[900px] h-[900px] shadow-[9px_9px_0_0_rgba(117,211,255,0.9)]">
          <Image
            src="/sero_girls.jpg"
            alt="Sero girls"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </div>
    </div>
  );
}
