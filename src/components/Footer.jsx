import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () =>{
    return (
        <div className="container">
            <div className="py-3 d-flex align-items-center justify-content-center w-100">
                <NavLink to={"https://www.facebook.com/profile.php?id=100089481594783&mibextid=ZbWKwL"} target='blank'><img src="./img/icon/iconoFacebookAzul.svg" alt="" className="imgFace"/></NavLink>
                <NavLink to={"https://www.instagram.com/alquimia_construccion/?igshid=ZmZhODViOGI%3D"} target='blank'><img src="./img/icon/iconoInstagramAzul.svg" alt="" className='mx-5 imgInsta'/></NavLink>
                <NavLink to={"https://walink.co/bf26c4"} target='blank'><img src="./img/icon/iconoWPAzul.svg" alt="" className="imgWp"/></NavLink>
            </div>
        </div>
    )
}

export default Footer;