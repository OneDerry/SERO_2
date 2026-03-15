import { Card } from "@/shared/common";
import Image from "next/image";

export default function CouldNot() {
  return (
    <div className="flex items-center gap-8 px-12 py-8 mt-10 mb-64">
      <div>
        <h1>We couldn’t find it, so we made it.</h1>
        <p>
          We wanted a soda that actually fit the way we live — something fizzy,
          refreshing, and crave-worthy without 40 grams of sugar or a periodic
          table of fake ingredients.
        </p>
        <p>
          What we found were “healthy” sodas that tasted like lies. “Diet” sodas
          that finished like regret. “Natural” sodas that somehow had more
          preservatives than our old gym shoes.
        </p>
        <p>So yeah — we started Sero.</p>
      </div>
      <div>
        <Card className="relative w-[800px] h-[700px] shadow-[9px_9px_0_0_rgba(117,211,255,0.9)]">
          <Image
            src="/could_not.webp"
            alt="Sero soda bottle"
            fill
            className="object-cover rounded-lg"
          />
        </Card>
      </div>
    </div>
  );
}
