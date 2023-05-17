import React from "react";
import CardsCategory from "./CardsCategory/CardsCategory";
import BodyViews from "./BodyViews";

const Contact = () => {
  return (
    <div className="container">
      <BodyViews>
        <div className="row p-3" style={{ minHeight: "300px" }}>
          <div className="col col-4 p-2">
            <h2 className="fs-5">Contacto</h2>
            <p className="fw-normal">
              Dirección: La Plata 309, Santiago del Estero
            </p>
            <p className="fw-normal">
              Horario de atención: lunes a viernes de 9 a 18hs
            </p>
          </div>
          <div className="col col-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.8762901636956!2d-64.26412542469727!3d-27.782785730118267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5215b90451a3%3A0x9952c67e61b5aff!2sLa%20Plata%20309%2C%20Santiago%20del%20Estero!5e0!3m2!1ses-419!2sar!4v1683808329636!5m2!1ses-419!2sar"
              title="Mapa"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-100 h-100 rounded-3"
            />
          </div>
        </div>
        <CardsCategory />
      </BodyViews>
    </div>
  );
};

export default Contact;
