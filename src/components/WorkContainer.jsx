import React from "react";
import ImgContainer from "./ImgWork/ImgContainer";
import CardsCategory from "./CardsCategory/CardsCategory";
import BodyViews from "./BodyViews";
import arrayCarousel from "../data/Work.json";
import ScrollToTop from "./ScrollToTop";

const WorkContainer = () => {

  return (
    <div className="container">
      <BodyViews title="Trabajos realizados">
      <div className="d-flex justify-content-center">
        <div className="row">
           {arrayCarousel.map((item, index) => 
            <ImgContainer key={index} data={item} />
           )}
        </div>
      </div>
      <CardsCategory/>
      </BodyViews>
      <ScrollToTop />
    </div>
  );
};

export default WorkContainer;
