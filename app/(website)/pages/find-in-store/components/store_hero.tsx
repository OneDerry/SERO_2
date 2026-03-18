import { Card } from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";
import Image from "next/image";

export default function StoreHero() {
  return (
    <div className="relative flex flex-col items-center gap-8 bg-primary-semilight px-4 py-8 mt-10 mb-24 sm:px-8 lg:flex-row lg:px-16 lg:mb-72">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />
      <div className="flex-1">
        <h1 className="text-3xl font-black sm:text-5xl lg:max-w-4xl lg:text-7xl">
          Born in a Boardroom? Nah. Built in a Group Chat.
        </h1>
        <p className="mt-4 lg:max-w-4xl">
          All we wanted was a clean, crave-worthy soda. The rest kind of
          spiraled. We didn&apos;t plan to launch a brand. We just wanted a
          drink that didn&apos;t suck.
        </p>
      </div>
      <div className="w-full shrink-0 lg:w-auto">
        <Card className="relative h-[300px] w-full shadow-[9px_9px_0_0_rgba(117,211,255,0.9)] sm:h-[400px] lg:h-[700px] lg:w-[1000px]">
          <Image
            src="/hero.webp"
            alt="Sero soda bottle"
            fill
            className="rounded-lg object-cover"
          />
        </Card>
      </div>
    </div>
  );
}
