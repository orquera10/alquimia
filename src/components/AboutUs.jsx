import React from "react";
import CarruselHome from "./CarouselComponents/Carrusel";
import CardsCategory from "./CardsCategory/CardsCategory";
import BodyViews from "./BodyViews";
import InfoCard from "./AboutUsComponents/InfoCard";
import arrayCarrusel from "../data/Carrusel.json";
import ScrollToTop from "./ScrollToTop";

const AboutUs = () => {
  return (
    <div className="container">
      <BodyViews title="">
        <div className="d-flex flex-column card-nos mb-5">
          <InfoCard
            title="Nuestra historia"
            text="Alquimia nace de la necesidad de ofrecer un servicio de calidad tanto a empresas como al público en general. Surge del sueño de tener en la región una empresa que brinde soluciones en todos los procesos de su proyecto. Nace de la esencia misma de la palabra, la posibilidad de transformación, cambio y mejoramiento, haciendo hincapié en convertir los cambios en una buena experiencia, con resultados finales excelentes y cuidando cada detalle."
          />
          <div className="d-flex flex-column flex-md-row gap-md-5">
            <InfoCard
              title="Misión"
              text="Nos comprometemos a trabajar incansablemente para lograr la
              plena satisfacción del cliente, alcanzar la excelencia en
              nuestro desempeño, fomentar la innovación constante, impulsar un
              crecimiento sostenible y abrazar una responsabilidad social
              integral."
            />
            <InfoCard
              title="Visión"
              text="Queremos ser una empresa de confianza, donde sus proyectos
              obtengan resultados de excelencia a través de una asesoría
              constante y la guía de profesionales especializados en cada
              rubro, garantizando un desempeño óptimo y resultados de calidad.
              Queremos ser la solución integral para todas sus necesidades en
              la realización de su proyecto."
            />
          </div>
        </div>
        <CarruselHome array={arrayCarrusel} />
        <CardsCategory />
      </BodyViews>
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
