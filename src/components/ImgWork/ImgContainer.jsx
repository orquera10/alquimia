import React from "react";
import Carrusel from "../CarouselComponents/Carrusel"

const ImgContainer = (props) => {
  const {data} = props;
  const {images, description} = data;

  return (
  <div className="col col-12 col-md-6">
    <Carrusel controls={true} array={images} />
    <p className="text-center mt-3 fw-normal">{description}</p>
  </div>
  );
};

export default ImgContainer;
