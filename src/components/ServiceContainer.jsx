import React from "react";
import Button from 'react-bootstrap/Button';
import ListCardService from "./ComponentsHomeContainer/ListCardService";

const ServiceContainer = () => {
    
    return (
        <div className="container">
            <Button variant="primary" className="w-100">Solicitar Cotización</Button>{' '}
            <div className="w-100 separador mt-4"></div>
            <h2 className="fs-6 font-weight-bold mt-2 mb-3">Que hacemos?</h2>
            <ListCardService/>
            <div className="w-100 separador mt-3"></div>         
        </div>
    )
};

export default ServiceContainer;