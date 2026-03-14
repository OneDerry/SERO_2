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
  Button,
} from "@/shared/common";

interface ProductRecommendationsProps {
  currentSlug: string;
}

export function ProductRecommendations({
  currentSlug,
}: ProductRecommendationsProps) {
  const otherProducts = products.filter((p) => p.slug !== currentSlug);

  const plugin = useRef(
    AutoScroll({
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  return (
    <section className="space-y-4 py-12">
      <div>
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-sero-dark text-center mb-4">
            Your Fridge Deserves a Lineup Like This
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Four flavours. Zero sugar. No wrong choices.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
          plugins={[plugin.current]}
        >
          <CarouselContent className="-ml-4 p-5">
            {[...otherProducts, ...otherProducts].map((product, index) => (
              <CarouselItem
                key={`${product.id}-${index}`}
                className="pl-4 basis-[75%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-between mt-6 px-12">
            <div>
              <Button
                size="sm"
                className="rounded-xl font-black shadow-[6px_6px_0_0_rgba(117,234,255,0.3)]"
              >
                View All
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 shadow-[6px_6px_0_0_rgba(117,234,255,0.3)]" />
              <CarouselNext className="static translate-x-0 translate-y-0 shadow-[6px_6px_0_0_rgba(117,234,255,0.3)]" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
