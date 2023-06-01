import React from "react";
import CarruselHome from "./CarouselComponents/Carrusel";
import CardsCategory from "./CardsCategory/CardsCategory";
import BodyViews from "./BodyViews";
import arrayCarrusel from '../data/Carrusel.json'
import ScrollToTop from "./ScrollToTop";

const AboutUs = () => {
  return (
    <div className="container">
      <BodyViews title="">
        <div className="d-flex flex-column card-nos mb-5">
          <div className="sombra">
            <h2 className="fs-6 font-weight-bold mt-4 mb-1 text-center">Nuestra historia</h2>
            <p className="fw-normal">
              Alquimia nace de la necesidad de ofrecer un servicio de calidad tanto a empresas como al público en general. Surge del sueño de tener en la región una empresa que brinde soluciones en todos los procesos de su proyecto. Nace de la esencia misma de la palabra, la posibilidad de transformación, cambio y mejoramiento, haciendo hincapié en convertir los cambios en una buena experiencia, con resultados finales excelentes y cuidando cada detalle.
            </p>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="w-100 sombra me-md-5">
              <h2 className="fs-6 font-weight-bold mt-4 mb-1 text-center ">Misión</h2>
              <p className="fw-normal">
                Nos comprometemos a trabajar incansablemente para lograr la plena satisfacción del cliente, alcanzar la excelencia en nuestro desempeño, fomentar la innovación constante, impulsar un crecimiento sostenible y abrazar una responsabilidad social integral.
              </p>
            </div>
            <div className="w-100 sombra ms-md-5">
              <h2 className="fs-6 font-weight-bold mt-4 mb-1 text-center ">Visión</h2>
              <p className="fw-normal">
                Queremos ser una empresa de confianza, donde sus proyectos obtengan resultados de excelencia a través de una asesoría constante y la guía de profesionales especializados en cada rubro, garantizando un desempeño óptimo y resultados de calidad. Queremos ser la solución integral para todas sus necesidades en la realización de su proyecto.
              </p>
            </div>
          </div>
        </div>
        <CarruselHome array={arrayCarrusel}/>
        <CardsCategory />
      </BodyViews>
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
