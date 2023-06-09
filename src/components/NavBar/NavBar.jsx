import React from 'react';
import '../NavBar/navBar.css'
import { Link, NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className='mb-3 position-sticky top-0 shadow-sm' style={{zIndex:3}}>
      <nav className="navbar navbar-expand-md navbar-dark">
        
        <div className="container">
          
          <button
            id='botonMenu'
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menuLateral"
          >
            <img src="./img/icon/MenuBurguer.svg" alt="" />
          </button>
          <Link to={"/"}>
            <img src="./img/icon/Logo.svg" alt="" className='logoNav'/>
          </Link>
          
          <section
            className="offcanvas offcanvas-start"
            id="menuLateral"
            tabIndex="-1"
          >
            <div className="offcanvas-header justify-content-center" data-bs-theme="dark">
              <button
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
                id='botonCerrar'
              ><i className="bi bi-x-lg fs-5"></i></button>
              <Link to={"/"} onClick={()=>{document.getElementById('botonCerrar').click()}}>
                <div className="w-100 d-flex justify-content-center mt-5">
                  <img src="./img/icon/logoTexto.svg" alt="" />
                  <img src="./img/icon/logoImg.svg" alt="" className='ms-3' />
                </div>
              </Link>
            </div>
            
            <div className="offcanvas-body d-flex flex-column justify-content-between px-0">
              
              <ul className="navbar-nav fs-5 justify-content-evenly">
                <div className="separador2 mx-3 mb-4 d-block d-md-none"></div>
                <li className="nav-item py-1 py-md-1 d-flex ps-3 d-none d-md-block">
                  <NavLink className="nav-link" aria-current="page" to={"/"} onClick={()=>{document.getElementById('botonCerrar').click()}}>Home</NavLink>
                </li>
                <li className="nav-item py-1 py-md-1 d-flex ps-3">
                  <img src="./img/icon/iconoService.svg" alt="" className='me-3 d-block d-md-none'/>
                  <NavLink className="nav-link" aria-current="page" to={"/servicios"} onClick={()=>{document.getElementById('botonCerrar').click()}}>Servicios</NavLink>
                </li>
                <li className="nav-item py-1 py-md-1 d-flex ps-3">
                  <img src="./img/icon/iconoTrabajos.svg" alt="" className='me-3 d-block d-md-none'/>
                  <NavLink className="nav-link" aria-current="page" to={"/trabajos"} onClick={()=>{document.getElementById('botonCerrar').click()}}>Trabajos Realizados</NavLink>
                </li>
                <li className="nav-item py-1 py-md-1 d-flex ps-3">
                  <img src="./img/icon/iconoContacto.svg" alt="" className='me-3 d-block d-md-none'/>
                  <NavLink className="nav-link" aria-current="page" to={"/contacto"} onClick={()=>{document.getElementById('botonCerrar').click()}}>Contacto</NavLink>
                </li>
                <div className="separador2 mx-3 my-4 d-block d-md-none"></div>
                <li className="nav-item py-1 py-md-1 d-flex ps-3">
                  <img src="./img/icon/iconoAyuda.svg" alt="" className='me-3 d-block d-md-none'/>
                  <NavLink className="nav-link" aria-current="page" to={"/nosotros"} onClick={()=>{document.getElementById('botonCerrar').click()}}>¿Quiénes Somos?</NavLink>
                </li>
                <div className="separador2 mx-3 mt-4 d-block d-md-none"></div>
              </ul>
              

              <div className="d-md-none align-self-center py-3">
                <NavLink to={"https://www.facebook.com/profile.php?id=100089481594783&mibextid=ZbWKwL"} target='blank'><img src="./img/icon/iconoFacebook.svg" alt="" /></NavLink>
                <NavLink to={"https://www.instagram.com/alquimia_construccion/?igshid=ZmZhODViOGI%3D"} target='blank'><img src="./img/icon/iconoInstagram.svg" alt="" className='mx-5'/></NavLink>
                <NavLink to={"https://walink.co/bf26c4"} target='blank'><img src="./img/icon/iconoWP.svg" alt="" /></NavLink>
              </div>
            </div>
          </section>
          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

