import { Card } from "@/shared/common";
import Image from "next/image";

export default function SeriousSero() {
  return (
    <div className="flex items-center gap-8 px-12 py-8 mt-10 mb-64">
      <div>
        <Card className="relative w-[800px] h-[700px] shadow-[9px_9px_0_0_rgba(117,211,255,0.9)]">
          <Image
            src="/serious_sero.webp"
            alt="Sero soda bottle"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </div>
      <div className="max-w-5xl space-y-8">
        <h1 className="text-5xl max-w-6xl font-black">
          We don&apos;t take ourselves too seriously. But we take Sero very
          seriously.
        </h1>
        <p>
          We care about what&apos;s in the can, and even more about what&apos;s
          not. No sugar. No artificial sweeteners. No aspartame, no sucralose,
          no guilt.
        </p>
        <p>
          Just bold flavour, clean ingredients, and soda you actually want to
          finish.
        </p>
        <p>We built it for us. And now it&apos;s for everyone.</p>
      </div>
    </div>
  );
}
