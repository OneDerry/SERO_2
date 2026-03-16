"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/common";
import { PaintSplash } from "@/shared/general/paint_splash";
import { sharedReviews } from "@/data/products";
import { Star } from "lucide-react";

export default function FastReplies() {
  return (
    <main className="relative bg-primary-semilight py-8 mt-8">
      <PaintSplash position="top" color="primary-semi-light" />
      <PaintSplash position="bottom" color="primary-semi-light" />

      <section className="">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-6">
          Fast Replies. Zero Artificial Vibes.
        </h2>

        <section className="">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {sharedReviews.map((review, i) => (
                <CarouselItem key={i} className="basis-full p-8 py-12">
                  <div className="text-center py-8 space-y-4 border-2 border-foreground bg-background rounded-2xl shadow-[6px_6px_0_0_rgba(117,211,255,0.9)]">
                    {/* Stars */}
                    <div className="flex gap-1 items-center justify-center">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-black text-black"
                        />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-base md:text-2xl font-black px-16">
                      {review.highlight} &mdash; {review.text}
                    </p>

                    {/* Reviewer */}
                    <p className="text-lg font-black">{review.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-end gap-2 mt-4 mr-8">
              <CarouselPrevious className="static translate-x-0 translate-y-0 shadow-[6px_6px_0_0_rgba(255,255,255,0.9)]" />
              <CarouselNext className="static translate-x-0 translate-y-0 shadow-[6px_6px_0_0_rgba(255,255,255,0.9)]" />
            </div>
          </Carousel>
        </section>
      </section>
    </main>
  );
}
