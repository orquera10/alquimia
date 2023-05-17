import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const BtnCotizacion = () => {
  return (
    <NavLink to={"https://walink.co/bf26c4"} target="blank" className="text-decoration-none">
      <Button
        variant="primary"
        className="w-100 d-flex gap-3 justify-content-center align-items-center"
      >
        <img src="./img/icon/iconoWP.svg" alt="" className="imgWp" />
        <span>Solicitar Cotización</span>
      </Button>
    </NavLink>
  );
};

export default BtnCotizacion;
