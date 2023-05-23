import React from "react";
import CarruselHome from "./CarouselComponents/Carrusel";
import arrayCarrusel from '../data/Carrusel.json'
import ListCardService from "./ComponentsHomeContainer/ListCardService";
import BodyViews from "./BodyViews";


const HomeContainer = () => {
  return (
    <div className="container">
      <CarruselHome array={arrayCarrusel} />
      <BodyViews title="Qué hacemos?">
        <ListCardService />
      </BodyViews>
    </div>
  );
};

export default HomeContainer;
