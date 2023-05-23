import React from "react";
import CarruselHome from "./CarouselComponents/Carrusel";
import CardsCategory from "./CardsCategory/CardsCategory";
import BodyViews from "./BodyViews";
import arrayCarrusel from '../data/Carrusel.json'
import ScrollToTop from "./ScrollToTop";

const AboutUs = () => {
  return (
    <div className="container">
      <BodyViews title="¿Quiénes somos?">
        <p className="fw-normal">
          Alquimia nace de la necesidad de ofrecer un servicio de calidad tanto
          a empresas, como al público general, nace del sueño de tener en la
          región una empresa que brindes soluciones en todos los procesos de su
          proyecto, nace de la esencia misma de la palabra, la posibilidad de
          transformación, de cambio, de mejoramiento, haciendo hincapié en hacer
          de los cambios una buena experiencia, con resultados finales
          excelentes, y cuidando cada detalle
        </p>
        <CarruselHome array={arrayCarrusel}/>
        <CardsCategory />
      </BodyViews>
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
