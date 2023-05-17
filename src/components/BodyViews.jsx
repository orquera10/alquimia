import React from "react";
import BtnCotizacion from "./ComponentsHomeContainer/BtnCotizacion";

const BodyViews = (props) => {
    const {title, children} = props;
  return (
    <div>
      <BtnCotizacion />
      <div className="w-100 separador mt-4"></div>
      {title && <h2 className="fs-6 font-weight-bold mt-2 mb-3">{title}</h2>}
      {children}
      <div className="w-100 separador mt-3"></div> 
    </div>
  );
};

export default BodyViews;
