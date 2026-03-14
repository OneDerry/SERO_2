import { Button } from "@/shared/common";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-15px)] w-full ">
      <Image
        src="/homeBanner.webp"
        alt="Sero Soda - Zero Sugar, Full Flavour"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bottom-72 flex items-end justify-center pb-24">
        <Button className="rounded-full h-10 w-24  p-2 font-black">
          Shop Now
        </Button>
      </div>
    </section>
  );
}
