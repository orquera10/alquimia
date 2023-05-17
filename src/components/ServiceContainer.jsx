import React from "react";
import ListCardService from "./ComponentsHomeContainer/ListCardService";
import CardsCategory from "./CardsCategory/CardsCategory";
import BodyViews from "./BodyViews";

const ServiceContainer = () => {
  return (
    <div className="container">
      <BodyViews title="Qué hacemos?">
        <ListCardService />
        <CardsCategory />
      </BodyViews>
    </div>
  );
};

export default ServiceContainer;
