import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carruselWork.css"

const CarouselB = (props) => {
  const { images } = props;
  return (
    <Carousel className="carrusel rounded">
      {images.map((item, index) => 
        <Carousel.Item className="rounded overflow-hidden text-center" key={index} style={{height: "200px"}}>
          <img className="w-100 d-block rounded" src={item.path} alt={item.altText} />
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default CarouselB;
