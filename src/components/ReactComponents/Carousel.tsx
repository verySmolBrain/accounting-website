import React, { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { LazyLoadImage } from "@components/ReactComponents/CarouselLazyLoadImage";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@components/ReactComponents/CarouselArrowButtons";

type Props = {
  slides: string[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<Props> = ({ slides, options }) => {
  const [emblaRed, emblaApi] = useEmblaCarousel(options);
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView(slidesInView => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off("slidesInView", updateSlidesInView);
      }

      const inView = emblaApi
        .slidesInView()
        .filter(index => !slidesInView.includes(index));
      return slidesInView.concat(inView);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    updateSlidesInView(emblaApi);
    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);
  }, [emblaApi, updateSlidesInView]);

  return (
    <div className="flex w-screen flex-row items-center justify-center">
      <div className="relative left-14 z-10 flex items-center">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="w-full max-w-4xl">
        <div className="overflow-hidden" ref={emblaRed}>
          <div className="flex">
            {slides.map((imgSrc, index) => (
              <LazyLoadImage
                key={index}
                index={index}
                imgSrc={imgSrc}
                inView={slidesInView.indexOf(index) > -1}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative right-14 z-10 flex items-center">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default Carousel;
