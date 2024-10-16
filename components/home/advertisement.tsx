"use client";
import * as React from "react";
import Image from "next/image";
import EmblaCarouselFade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Images from "@/public/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Advertisement = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const fadePlugin = React.useRef(EmblaCarouselFade());

  return (
    <Carousel plugins={[autoplayPlugin.current, fadePlugin.current]}>
      <CarouselContent>
        {Images.map((src, index) => (
          <CarouselItem key={index}>
            <Image
              src={src}
              alt="products"
              className="w-full max-h-96 object-fill"
              priority={true}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
