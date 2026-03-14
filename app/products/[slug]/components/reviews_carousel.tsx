"use client";

import { Star } from "lucide-react";
import type { ProductDetails } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Card,
} from "@/shared/common";
import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

interface ReviewsCarouselProps {
  reviews: ProductDetails["reviews"];
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const plugin = useRef(
    AutoScroll({
      speed: 1,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  return (
    <section className="">
      <div className="">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-6">
          Zero Sugar, 100% Fans
        </h2>

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
            {[...reviews, ...reviews].map((review, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <Card className=" backdrop-blur-sm rounded-xl p-4 h-full flex flex-col gap-6 shadow-[4px_6px_0_0_rgba(117,211,255,0.9)]">
                  {/* Stars */}
                  <div className="flex gap-1 items-center justify-center">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-black text-black" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-sm flex-1">
                    {" "}
                    <span className="text-lg font-bold">
                      &ldquo;{review.highlight}&rdquo;
                    </span>
                    {review.text}
                  </p>

                  {/* Reviewer */}
                  <p className="text-sm font-semibold text-center">
                    — {review.name}
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-end gap-2 mt-8 mr-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0 shadow-[6px_6px_0_0_rgba(117,234,255,0.3)]" />
            <CarouselNext className="static translate-x-0 translate-y-0 shadow-[6px_6px_0_0_rgba(117,234,255,0.3)]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
