import { Card } from "@/shared/common";
import Image from "next/image";

export default function SeriousSero() {
  return (
    <div className="flex items-center gap-8">
      <div>
        <Card className="relative w-64 h-64">
          <Image
            src="/placeholder-image.jpg"
            alt="Sero soda bottle"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </div>
      <div>
        <h1>
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
