import Carousel from 'react-bootstrap/Carousel';
import arrayCarrusel from '../data/Carrusel.json'

const CarruselHome = () => {
  return (
    <Carousel className='carrusel  mt-3 mb-5'>
      {arrayCarrusel.map(objeto =>
        <Carousel.Item key={objeto.id}>
          <img
            className="d-block w-100"
            src={objeto.imagen}
            alt="First slide"
          />
        </Carousel.Item>
      )}
    </Carousel>
  );
}

export default CarruselHome;