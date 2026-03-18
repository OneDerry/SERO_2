import { Card } from "@/shared/common";
import Image from "next/image";

export default function SeriousSero() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 py-8 mt-10 mb-16 sm:px-8 lg:flex-row lg:px-12 lg:mb-64">
      <div className="w-full lg:w-auto">
        <Card className="relative h-[300px] w-full shadow-[9px_9px_0_0_rgba(117,211,255,0.9)] sm:h-[400px] lg:h-[700px] lg:w-[800px]">
          <Image
            src="/serious_sero.webp"
            alt="Sero soda bottle"
            fill
            className="rounded-lg object-cover"
          />
        </Card>
      </div>
      <div className="max-w-5xl space-y-4 sm:space-y-8">
        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
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
