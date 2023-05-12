import React from "react";
import CarouselB from "./CarouselB";

const CarouselContainer = (props) => {
  const {images, description} = props;

  return (
  <div className="col col-12 col-md-6 my-3">
    <CarouselB images={images}/>
    <p className="text-center mt-5 fw-normal">{description}</p>
  </div>
  );
};

export default CarouselContainer;
