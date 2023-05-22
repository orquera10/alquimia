import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carruselHome.css'

const CarruselHome = (props) => {
  const {array, controls} = props;
  return (
    <Carousel controls={controls || false} className='carrusel mt-3 mb-5'>
      {array.map(objeto =>
        <Carousel.Item key={objeto.id}>
          <img
            className="d-block w-100"
            src={objeto.path}
            alt="First slide"
          />
        </Carousel.Item>
      )}
    </Carousel>
  );
}

export default CarruselHome;