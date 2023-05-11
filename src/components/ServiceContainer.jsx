import React from "react";
import Button from 'react-bootstrap/Button';
import CardService from "./ComponentsHomeContainer/CardService";
import arrayServices from "../data/Servicios.json"

const ServiceContainer = () => {
    
    return (
        <div className="container">
            <Button variant="primary" className="w-100">Solicitar Cotización</Button>{' '}
            <div className="w-100 separador mt-4"></div>
            <h2 className="fs-6 font-weight-bold">Que hacemos?</h2>
            <div className="row">{
                arrayServices.map(service =>
                {
                    if (service.id % 2 === 0) {
                        return (
                        <div key={service.id} className="col-6 mb-2 ps-1">
                            <CardService element={service} />
                        </div>
                        )
                    } else{
                        return (
                        <div key={service.id} className="col-6 mb-2 pe-1">
                            <CardService element={service} />
                        </div>
                        )
                    }
                })}
            </div>
            <div className="w-100 separador mb-4"></div>          
        </div>
    )
};

export default ServiceContainer;