import Carousel from 'react-bootstrap/Carousel';

function CarruselHome() {
  return (
    <Carousel className='carrusel p-3'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/carruselHome(1).png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/carruselHome(2).png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/carruselHome(3).png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/carruselHome(4).png"
          alt="Four slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/carruselHome(5).png"
          alt="Five slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselHome;