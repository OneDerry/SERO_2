import { Card } from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";
import Image from "next/image";

export default function SodaHero() {
  return (
    <div className="relative flex flex-col items-center gap-8 bg-primary-semilight px-4 py-8 mt-10 mb-16 sm:px-8 lg:flex-row lg:px-12 lg:mb-64">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />
      <div className="flex-1">
        <h1 className="text-3xl font-black sm:text-5xl lg:max-w-4xl lg:text-7xl">
          Soda was never the problem.The ingredients were.
        </h1>
        <p className="mt-4 lg:max-w-4xl">
          We didn&apos;t make a healthy soda. We made soda healthy. Same
          crave-worthy flavour. Zero sugar. Nothing artificial. Everything your
          fridge&apos;s been missing.
        </p>
      </div>
      <div className="w-full shrink-0 lg:w-auto">
        <Card className="relative h-[300px] w-full shadow-[9px_9px_0_0_rgba(117,211,255,0.9)] sm:h-[400px] lg:h-[900px] lg:w-[900px]">
          <Image
            src="/sero_girls.jpg"
            alt="Sero girls"
            fill
            className="rounded-lg object-cover"
          />
        </Card>
      </div>
    </div>
  );
}
