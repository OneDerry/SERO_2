import { Card } from "@/shared/common";
import Image from "next/image";

export default function Buzz() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 py-8 mt-10 mb-16 sm:px-8 lg:flex-row lg:px-12 lg:mb-64">
      <div className="max-w-5xl space-y-4 sm:space-y-8">
        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
          It&apos;s still early — and it&apos;s already buzzing.
        </h1>
        <p>
          We launched Sero with a few flavours and a lot of hope. What happened
          next?
        </p>
        <p>
          The internet happened . Reviews, reactions, and "Wait — this is zero
          sugar?" replies started pouring in. People didn&apos;t know what they
          were missing until they cracked a can. Now they&apos;re hooked.
        </p>
        <p>(And we&apos;re just getting started.)</p>
      </div>
      <div className="w-full lg:w-auto">
        <Card className="relative h-[400px] w-full shadow-[9px_9px_0_0_rgba(117,211,255,0.9)] sm:h-[600px] lg:h-[1200px] lg:w-[800px]">
          <Image
            src="/buzz.webp"
            alt="Sero soda bottle"
            fill
            className="rounded-lg object-cover"
          />
        </Card>
      </div>
    </div>
  );
}
