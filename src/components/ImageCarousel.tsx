"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image, { type StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type ImageCarouselProps = {
  altLabel: string;
  images: ReadonlyArray<StaticImageData>;
};

export const ImageCarousel = ({ altLabel, images }: ImageCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 18,
    align: "start",
    containScroll: "keepSnaps",
  });

  return (
    <div className="relative w-full max-w-md shrink-0 overflow-hidden rounded-lg shadow lg:w-96">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((img, i) => (
            <Image
              key={img.src}
              src={img}
              alt={`${altLabel} screenshot ${i + 1}`}
              draggable={false}
              placeholder="blur"
              priority={i === 0}
              className="min-w-0 flex-[0_0_100%] object-cover lg:h-69"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-1.5 -translate-y-1/2 cursor-pointer rounded-full p-1 text-black/30 transition-opacity hover:text-black/40"
      >
        <FaChevronLeft className="size-4.5" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer rounded-full p-1 text-black/30 transition-opacity hover:text-black/40"
      >
        <FaChevronRight className="size-4.5" />
      </button>
    </div>
  );
};
