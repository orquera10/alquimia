import React from "react";
import Carrusel from "../CarouselComponents/Carrusel"

const ImgContainer = (props) => {
  const {data} = props;
  const {images, description, state} = data;


  if (state==="active") {
    return (
      <div className="col col-12 card-work">
        <Carrusel controls={true} array={images} />
        <p className="text-center mt-3 fw-normal">{description}</p>
      </div>
      );
  } else {
    return (
      <div className="col col-12 col-md-6 card-work">
        <Carrusel controls={true} array={images} />
        <p className="text-center mt-3 fw-normal">{description}</p>
      </div>
      );
  }
  
};

export default ImgContainer;
