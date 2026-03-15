"use client";

import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import { texts } from "@/data/texts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/common/carousel";
import { Texts } from "./texts";

export function TextsCarousel() {
  const plugin = useRef(
    AutoScroll({
      speed: 0.5,
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
      <CarouselContent className="-ml-4">
        {[...texts, ...texts].map((item, index) => (
          <CarouselItem key={`${item.id}-${index}`} className="pl-8 basis-auto">
            <Texts item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
