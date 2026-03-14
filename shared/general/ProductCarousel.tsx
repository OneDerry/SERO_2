"use client";

import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import { products } from "@/data/products";
import { ProductCard } from "@/shared/general/product_card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/common/carousel";

export function ProductCarousel() {
  const plugin = useRef(
    AutoScroll({
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      plugins={[plugin.current]}
      className="mx-auto w-full"
    >
      <CarouselContent className="-ml-4 p-5">
        {[...products, ...products].map((product, index) => (
          <CarouselItem
            key={`${product.id}-${index}`}
            className="pl-4 basis-[75%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Bottom-right arrow buttons */}
      <div className="flex items-center justify-end gap-2 mt-6 pr-8">
        <CarouselPrevious className="static translate-x-0 translate-y-0 shadow-[6px_6px_0_0_rgba(117,234,255,0.3)]" />
        <CarouselNext className="static translate-x-0 translate-y-0 shadow-[6px_6px_0_0_rgba(117,234,255,0.3)]" />
      </div>
    </Carousel>
  );
}
