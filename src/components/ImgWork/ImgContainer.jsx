import React from "react";


const ImgContainer = (props) => {
  const {data} = props;
  const {path, altText, description} = data;

  return (
  <div className="col col-12 col-md-6 my-3">
    <img className="w-100 rounded-4" src={path} alt={altText} />
    <p className="text-center mt-3 fw-normal">{description}</p>
  </div>
  );
};

export default ImgContainer;
