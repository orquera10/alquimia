import React from "react";
import CarruselHome from "./ComponentsHomeContainer/CarruselHome";
import ListCardService from "./ComponentsHomeContainer/ListCardService";
import BtnCotizacion from "./ComponentsHomeContainer/BtnCotizacion";

const HomeContainer = () => {
    
    return (
        <div className="container">
            <CarruselHome/>
            <BtnCotizacion/>
            <div className="w-100 separador mt-4"></div>
            <h2 className="fs-6 font-weight-bold mt-2 mb-3">Que hacemos?</h2>
            <ListCardService/>
            <div className="w-100 separador mt-3"></div>          
        </div>
    )
};

export default HomeContainer;
