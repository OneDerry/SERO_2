import { PaintSplash } from "@/shared/general/paint_splash";
import { ProductCarousel } from "@/shared/general/ProductCarousel";

export default function ButForNow() {
  return (
    <section className="bg-linear-to-b from-primary-semilight to-white relative pt-16">
      <PaintSplash position={"top"} color={"primary-semi-light"} />

      <h2 className="text-2xl md:text-4xl font-extrabold text-sero-dark text-center mb-4">
        But for now...
      </h2>
      <p className="text-center max-w-2xl text-xs mx-auto mb-8">
        The only place to crack open a can of Sero is right here. Shop our first
        four flavors, get them delivered straight to your door, and be one of
        the first to taste what everyone else will be lining up for later.
      </p>

      <ProductCarousel />
    </section>
  );
}
