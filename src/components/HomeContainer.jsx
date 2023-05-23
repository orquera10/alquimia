import React from "react";
import CarruselHome from "./CarouselComponents/Carrusel";
import arrayCarrusel from '../data/Carrusel.json'
import ListCardService from "./ComponentsHomeContainer/ListCardService";
import BodyViews from "./BodyViews";
import CardsCategory from "./CardsCategory/CardsCategory";

const HomeContainer = () => {
  return (
    <div className="container">
      <CarruselHome array={arrayCarrusel} />
      <BodyViews title="Qué hacemos?">
        <ListCardService />
        <CardsCategory />
      </BodyViews>
    </div>
  );
};

export default HomeContainer;
