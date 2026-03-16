import { PaintWave } from "@/shared/general/paint_wave";
import { Starburst } from "@/shared/general/starburst";

export default function Care() {
  return (
    <section className="py-14 px-6 mt-48 mb-48 relative bg-linear-to-r from-primary-semilight to-primary-light">
      <PaintWave position="bottom" gradient />
      <PaintWave position="top" gradient mirrored />

      <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
        {/* Rotating starburst with heart */}
        <div className="absolute bottom-64 left-1/2 -translate-x-1/2 mb-10">
          <Starburst>
            <p>❤️</p>
          </Starburst>
        </div>

        {/* Quote */}

        <h2 className="text-4xl md:text-5xl font-black text-foreground">
          &quot;They Actually Care&quot;
        </h2>

        {/* Testimonial */}
        <p className="mt-6 text-sm md:text-base leading-relaxed max-w-7xl ">
          You can just tell the guys behind this actually care. Not just about
          what&apos;s in the can — but about doing it right. I messaged them
          once about an ingredient and got a thoughtful reply within the hour.
          That doesn&apos;t happen with other brands.
        </p>

        {/* Attribution */}
        <p className="mt-4 text-sm font-bold text-foreground">— Rachel D.</p>
      </div>
    </section>
  );
}
