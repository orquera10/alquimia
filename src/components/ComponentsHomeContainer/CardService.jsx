import React from 'react';
import Card from 'react-bootstrap/Card';
import '../ComponentsHomeContainer/cardService.css'

const CardService = ({element}) => {
  return (
    <Card className='position-relative border-0'>
      <Card.Img variant="top" src={element.imagen} className='imgTarjeta' />
      <Card.Body className='tarjeta d-flex justify-content-center align-items-center position-absolute w-100 bottom-0 start-0'>
        <Card.Title className='fs-6 m-0 p-0'>{element.nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardService;