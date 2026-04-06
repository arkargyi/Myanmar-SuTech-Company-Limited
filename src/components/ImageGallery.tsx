import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/lib/i18n';

const images = [
  {
    src: "https://i.imgur.com/cZpaH1E.png",
    alt: "MSC Mill Section"
  },
  {
    src: "https://i.imgur.com/yi5WoHk.png",
    alt: "MSC Power Plant Section"
  },
  {
    src: "https://i.imgur.com/ZMA19OP.png",
    alt: "MSC Evaporator Section"
  },
  {
    src: "https://i.imgur.com/l5OoAla.png",
    alt: "MSC Evaporator Section -2"
  },
  {
    src: "https://i.imgur.com/dHNBkQP.png",
    alt: "MSC EVAPORATOR Section -3"
  }
];

export default function ImageGallery() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle={t("home.gallery.subtitle")} title={t("home.gallery.title")} centered />
        
        <div className="relative mt-12 max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative aspect-[16/9] md:aspect-[21/9]" key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-emerald-900 hover:bg-white transition-colors disabled:opacity-50 z-10"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-emerald-900 hover:bg-white transition-colors disabled:opacity-50 z-10"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
