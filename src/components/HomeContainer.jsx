import React from "react";
import CarruselHome from "./ComponentsHomeContainer/CarruselHome";
import ListCardService from "./ComponentsHomeContainer/ListCardService";
import BodyViews from "./BodyViews";

const HomeContainer = () => {
  return (
    <div className="container">
      <CarruselHome />
      <BodyViews title="Qué hacemos?">
        <ListCardService />
      </BodyViews>
    </div>
  );
};

export default HomeContainer;
