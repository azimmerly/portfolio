"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type ImageCarouselProps = {
  altLabel: string;
  images: ReadonlyArray<StaticImageData>;
};

export const ImageCarousel = ({ altLabel, images }: ImageCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 18,
    align: "start",
    containScroll: "keepSnaps",
  });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative aspect-3/2 w-full">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {images.map((img, index) => (
            <Image
              key={img.src}
              src={img}
              alt={`${altLabel} screenshot ${index + 1}`}
              draggable={false}
              placeholder="blur"
              priority={index === 0}
              className="min-w-0 flex-[0_0_100%] object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 552px"
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-2.5 left-0 flex justify-center gap-1.5">
        {images.map((_, index) => (
          <span
            key={index}
            className={`size-1.5 rounded-full transition-colors ${index === selectedIndex ? "bg-neutral-900/50" : "bg-neutral-900/20"}`}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-1.5 -translate-y-1/2 cursor-pointer rounded-full p-1 text-neutral-900/40 transition-colors hover:text-neutral-900/60"
      >
        <FaChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer rounded-full p-1 text-neutral-900/40 transition-colors hover:text-neutral-900/60"
      >
        <FaChevronRight className="size-5" />
      </button>
    </div>
  );
};
