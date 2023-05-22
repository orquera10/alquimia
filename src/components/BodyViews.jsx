import React from "react";
import BtnCotizacion from "./ComponentsHomeContainer/BtnCotizacion";

const BodyViews = (props) => {
  const { title, children } = props;
  return (
    <div>
      <div className="position-sicky zindex-sticky top-0">
        <BtnCotizacion />
        <div className="w-100 separador mt-4"></div>
        {title && <h2 className="fs-6 font-weight-bold mt-2 mb-3">{title}</h2>}
      </div>
      {children}
    </div>
  );
};

export default BodyViews;
