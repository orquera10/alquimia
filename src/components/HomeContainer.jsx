import React from "react";
import CarruselHome from "./CarruselHome";
import Button from 'react-bootstrap/Button';


const HomeContainer = () => {
    return (
        <div>
            <CarruselHome/>
            <div className="p-3">
                <Button variant="primary" className="w-100">Solicitar Cotización</Button>{' '}
            </div>
            <div className="w-100 separador mx-3 mt-2"></div>  
            <div className="m-3 grid gap-0 row-gap-3 column-gap-3">
                <div className="d-flex align-items-center justify-content-center border border-3 g-col-6">
                    <img src="https://picsum.photos/150/150/?random" alt=""/>
                </div>
                <div className="d-flex align-items-center justify-content-center border border-3 g-col-6">
                    <img src="https://picsum.photos/150/150/?random" alt=""/>
                </div>
                <div className="d-flex align-items-center justify-content-center border border-3 g-col-6">
                    <img src="https://picsum.photos/150/150/?random" alt=""/>
                </div>
                <div className="d-flex align-items-center justify-content-center border border-3 g-col-6">
                    <img src="https://picsum.photos/150/150/?random" alt=""/>
                </div>
                <div className="d-flex align-items-center justify-content-center border border-3 g-col-6">
                    <img src="https://picsum.photos/150/150/?random" alt=""/>
                </div>
                
            </div> 
            <div className="w-100 separador mx-3 mt-2"></div>           
        </div>
    )
};

export default HomeContainer;