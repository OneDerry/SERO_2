import { Card } from "@/shared/common";
import Image from "next/image";

export default function Buzz() {
  return (
    <div className="flex items-center gap-8 px-12 py-8 mt-10 mb-64">
      <div className="max-w-5xl space-y-8">
        <h1 className="text-5xl max-w-6xl font-black">
          It&apos;s still early — and it&apos;s already buzzing.
        </h1>
        <p>
          We launched Sero with a few flavours and a lot of hope. What happened
          next?
        </p>
        <p>
          The internet happened . Reviews, reactions, and “Wait — this is zero
          sugar?” replies started pouring in. People didn&apos;t know what they
          were missing until they cracked a can. Now they&apos;re hooked.
        </p>
        <p>(And we&apos;re just getting started.)</p>
      </div>
      <div>
        <Card className="relative w-[800px] h-[1200px] shadow-[9px_9px_0_0_rgba(117,211,255,0.9)]">
          <Image
            src="/buzz.webp"
            alt="Sero soda bottle"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </div>
    </div>
  );
}
