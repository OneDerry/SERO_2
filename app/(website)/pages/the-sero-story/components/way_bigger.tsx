import { PaintWave } from "@/shared/general/paint_wave";
import { Starburst } from "@/shared/general/starburst";

export default function WayBigger() {
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

        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          &quot;Way Bigger Than Big Soda&quot;
        </h2>

        {/* Testimonial */}
        <p className="mt-6 text-sm md:text-base leading-relaxed">
          There&apos;s something kind of wild about how much better this is than
          the stuff from billion-dollar soda companies. And the best part? You
          get the sense it was built by a few good people trying to do something
          cool.
        </p>

        {/* Attribution */}
        <p className="mt-4 text-sm font-bold text-foreground">— Jason T.</p>
      </div>
    </section>
  );
}
