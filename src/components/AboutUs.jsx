import React from "react";
import Button from "react-bootstrap/Button";
import CarruselHome from "./ComponentsHomeContainer/CarruselHome";
import CardsCategory from "./CardsCategory/CardsCategory";

const AboutUs = () => {
  return (
    <div className="container">
      <Button variant="primary" className="w-100">
        Solicitar Cotización
      </Button>
      <div className="w-100 separador mt-4"></div>
      <h2 className="fs-6 font-weight-bold mt-2 mb-3">¿Quiénes somos?</h2>
      <p className="fw-normal">
        Alquimia nace de la necesidad de ofrecer un servicio de calidad tanto a
        empresas, como al público general, nace del sueño de tener en la región
        una empresa que brindes soluciones en todos los procesos de su proyecto,
        nace de la esencia misma de la palabra, la posibilidad de
        transformación, de cambio, de mejoramiento, haciendo hincapié en hacer
        de los cambios una buena experiencia, con resultados finales excelentes,
        y cuidando cada detalle
      </p>
      <CarruselHome />
      <CardsCategory />
      <div className="w-100 separador mt-3"></div>
    </div>
  );
};

export default AboutUs;
