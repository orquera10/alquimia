import React from "react";
import CarouselContainer from "./CarouselWork/CarouselContainer";
import Button from 'react-bootstrap/Button';
import carouselContent from "../data/CarouselWork.json"

const WorkContainer = () => {
  const {carousel1, carousel2} = carouselContent;

  return (
    <div className="container">
      <Button variant="primary" className="w-100">
        Solicitar Cotización
      </Button>
      <div className="w-100 separador mt-4"></div>
      <h2 className="fs-6 font-weight-bold mt-2 mb-3">Trabajos realizados</h2>
      <div className="d-flex justify-content-center">
        <div className="container-fluid row">
          <CarouselContainer images={carousel1.images} description={carousel1.description} />
          <CarouselContainer images={carousel2.images} description={carousel2.description} />
        </div>
      </div>
      <div className="w-100 separador mt-3"></div> 
    </div>
  );
};

export default WorkContainer;
