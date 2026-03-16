import { PaintStrides } from "@/shared/general/paint_strides";
import { ProductCard } from "@/shared/general/product_card";
import { products } from "@/data/products";

export default function Sodas() {
  return (
    <div className="relative bg-primary-semilight mt-96">
      <PaintStrides position="top" mirrored color="primary-semi-light" />
      <PaintStrides position="bottom" color="primary-semi-light" />
      <section className="grid grid-cols-4 gap-4 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
