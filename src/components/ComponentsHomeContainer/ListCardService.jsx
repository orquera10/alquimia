import React from "react";
import CardService from "./CardService";
import arrayServices from "../../data/Servicios.json"


const ListCardService = () => {
    return (
        <div className="row">{
            arrayServices.map(service => {
                if (service.id % 2 === 0) {
                    return (
                        <div key={service.id} className="col-6 mb-2 mb-md-4 ps-1 ps-md-3">
                            <CardService element={service} />
                        </div>
                    )
                } else {
                    return (
                        <div key={service.id} className="col-6 mb-2 mb-md-4 pe-1 pe-md-3">
                            <CardService element={service} />
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default ListCardService;