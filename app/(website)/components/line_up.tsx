import { PaintStrides } from "@/shared/general/paint_strides";
import { ProductCarousel } from "@/shared/general/ProductCarousel";

export function LineupSection() {
  return (
    <section className="relative bg-linear-to-r from-primary-semilight to-primary-light py-24 md:py-32">
      <div className="">
        <PaintStrides
          position="top"
          color="primary-light"
          mirrored={true}
          gradient={true}
        />
      </div>
      <div className="mb-56">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-6xl font-black mb-2">
            Meet the Lineup
          </h2>
          <p className="text-base text-gray-600">
            4 bold flavours. Zero sugar. No compromise.
          </p>
        </div>

        <ProductCarousel />
      </div>
    </section>
  );
}
