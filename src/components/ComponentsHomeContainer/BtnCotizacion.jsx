import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {IoLogoWhatsapp} from "react-icons/io"

const BtnCotizacion = () => {
  return (
    <NavLink to={"https://walink.co/bf26c4"} target="blank" className="text-decoration-none">
      <Button
        variant="primary"
        className="w-100 d-flex gap-3 justify-content-center align-items-center"
      >
        {/* <img src="./img/icon/iconoWP.svg" alt="" className="imgWP" /> */}
        <IoLogoWhatsapp color="#25D366" size="1.5em"/>
        <span>Solicitar Cotización</span>
      </Button>
    </NavLink>
  );
};

export default BtnCotizacion;
