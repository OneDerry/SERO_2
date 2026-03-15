import { Card } from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";
import Image from "next/image";

export default function StoreHero() {
  return (
    <div className="flex relative items-center gap-8 bg-primary-semilight px-12 py-8 mt-10 mb-64">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />
      <div className="flex-1">
        <h1 className="text-7xl max-w-4xl font-black">
          Born in a Boardroom? Nah. Built in a Group Chat.
        </h1>
        <p className="max-w-4xl">
          All we wanted was a clean, crave-worthy soda. The rest kind of
          spiraled. We didn&apos;t plan to launch a brand. We just wanted a
          drink that didn&apos;t suck.
        </p>
      </div>
      <div className="shrink-0">
        <Card className="relative w-[1000px] h-[700px] shadow-[9px_9px_0_0_rgba(117,211,255,0.9)]">
          <Image
            src="/hero.webp"
            alt="Sero soda bottle"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </div>
    </div>
  );
}
