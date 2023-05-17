import React from "react";
import ImgContainer from "./ImgWork/ImgContainer";
import imgContent from "../data/Work.json"
import CardsCategory from "./CardsCategory/CardsCategory";
import BodyViews from "./BodyViews";

const WorkContainer = () => {
  const {work1, work2} = imgContent;

  return (
    <div className="container">
      <BodyViews title="Trabajos realizados">
      <div className="d-flex justify-content-center">
        <div className="row">
          <ImgContainer data={work1} />
          <ImgContainer data={work2} />
        </div>
      </div>
      <CardsCategory/>
      </BodyViews>
    </div>
  );
};

export default WorkContainer;
