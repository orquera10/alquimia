import React from "react";
import Button from 'react-bootstrap/Button';

const BtnCotizacion = () => {
    return (
        <Button variant="primary" className="w-100" onclick="window.open('mailto:recimixar@gmail.com', '_blank');">Solicitar Cotización</Button>
    )
}

export default BtnCotizacion;