import { Card } from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex relative items-center gap-8 max-w-[96%] bg-primary mx-auto">
      <PaintSplash position="top" color="primary" />
      <PaintStrides position="bottom" color="primary" />
      <div className="flex-1">
        <h1>Born in a Boardroom? Nah. Built in a Group Chat.</h1>
        <p>
          All we wanted was a clean, crave-worthy soda. The rest kind of
          spiraled. We didn&apos;t plan to launch a brand. We just wanted a
          drink that didn&apos;t suck.
        </p>
      </div>
      <div className="shrink-0">
        <Card className="relative w-64 h-64">
          <Image
            src="/placeholder-image.jpg"
            alt="Sero soda bottle"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </div>
    </div>
  );
}
