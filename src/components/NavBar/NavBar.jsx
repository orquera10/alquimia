import React from 'react';
import '../NavBar/navBar.css'
import { Link, NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className='my-3'>
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
            <img src="./img/icon/logo.svg" alt="" className='logoNav'/>
          </Link>
          
          <section
            className="offcanvas offcanvas-start"
            id="menuLateral"
            tabIndex="-1"
          >
            <div className="offcanvas-header justify-content-center" data-bs-theme="dark">
              <button
                className="btn-close d-none"
                type="button"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
                id='botonCerrar'
              ></button>
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
                  <NavLink className="nav-link" aria-current="page" to={"/nosotros"} onClick={()=>{document.getElementById('botonCerrar').click()}}>Quienes Somos?</NavLink>
                </li>
                <li className="nav-item py-1 py-md-1 d-flex ps-3 d-block d-md-none">
                  <img src="./img/icon/iconoInfo.svg" alt="" className='me-3 d-block d-md-none'/>
                  <NavLink className="nav-link" aria-current="page" to={"/terminos"} onClick={()=>{document.getElementById('botonCerrar').click()}}>Terminos y Condiciones</NavLink>
                </li>
                <div className="separador2 mx-3 mt-4 d-block d-md-none"></div>
              </ul>
              

              <div className="d-md-none align-self-center py-3">
                <img src="./img/icon/iconoFacebook.svg" alt="" />
                <img src="./img/icon/iconoInstagram.svg" alt="" className='mx-5'/>
                <img src="./img/icon/iconoWhatsapp.svg" alt="" />
              </div>
            </div>
          </section>
          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

