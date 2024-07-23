// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useCallback } from "react";

type PropType = {
  imgSrc: string;
  inView: boolean;
  index: number;
};

export const LazyLoadImage: React.FC<PropType> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { imgSrc, inView } = props;
  //   const [hasLoaded, setHasLoaded] = useState(false);

  //   const setLoaded = useCallback(() => {
  //     setHasLoaded(true);
  //   }, [inView, setHasLoaded]);

  return (
    <div className="min-w-full">
      <div className="min-w-full object-cover">
        <img
          className="aspect-video w-[100%] object-cover"
          //   onLoad={setLoaded}
          src={imgSrc}
          alt="Carousel Image"
          data-src={imgSrc}
        />
      </div>
    </div>
  );
};
