import { PaintWave } from "@/shared/general/paint_wave";
import { Starburst } from "@/shared/general/starburst";

export default function Average() {
  return (
    <section className="py-14 px-6 mt-48 mb-48 relative bg-linear-to-l from-primary-semilight to-primary-light">
      <PaintWave position="top" gradient />
      <PaintWave position="bottom" gradient mirrored />
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        {/* Rotating starburst with heart */}
        <Starburst>
          <p>🔥</p>
        </Starburst>

        {/* Quote */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          &quot;Not Your Average Brand&quot;
        </h2>

        {/* Testimonial */}
        <p className="mt-6 text-sm md:text-base leading-relaxed max-w-2xl text-muted-foreground">
          I don&apos;t know who these guys are, but they seriously nailed it.
          The flavours are next level — and the brand just feels... different.
          Like, in a good way. You can tell it wasn&apos;t made in some
          corporate lab.&quot;
        </p>

        {/* Attribution */}
        <p className="mt-4 text-sm font-bold text-foreground">— Drew M.</p>
      </div>
    </section>
  );
}
