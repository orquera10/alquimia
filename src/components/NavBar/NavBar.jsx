// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import '../NavBar/navBar.css'
import { Link, NavLink} from "react-router-dom";

function NavBar() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container fluid>
        
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Brand href="#"><img src="./img/icon/logo.svg" alt="" /></Navbar.Brand>
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0 barraNav"
    //         // style={{ minHeight: '95vh' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">Home</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //       </Nav>
          
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        
        <div className="container-fluid">
          
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
            <img src="./img/icon/logo.svg" alt="" />
          </Link>
          
          <section
            className="offcanvas offcanvas-start"
            id="menuLateral"
            tabindex="-1"
          >
            <div className="offcanvas-header" data-bs-theme="dark">
              <Link to={"/"} onClick={()=>{document.getElementById('botonMenu').click()}}>
                <div className="w-100 d-flex justify-content-center mt-5">
                  <img src="./img/icon/logoTexto.svg" alt="" />
                  <img src="./img/icon/logoImg.svg" alt="" className='ms-3' />
                </div>
              </Link>
            </div>
            
            <div className="offcanvas-body d-flex flex-column justify-content-between px-0">
              
              <ul className="navbar-nav fs-5 justify-content-evenly">
                <div className="separador2 mx-2"></div>
                {/* <li className="nav-item p-3 py-md-1">
                  <NavLink className="nav-link my-2 active" aria-current="page" to={"/"} onClick={()=>{document.getElementById('botonMenu').click()}}>Home</NavLink>
                </li> */}
                <li class="nav-item p-3 py-md-1 d-flex">
                  <img src="./img/icon/iconoService.svg" alt="" className='me-3'/>
                  <NavLink className="nav-link" aria-current="page" to={"/servicios"} onClick={()=>{document.getElementById('botonMenu').click()}}>Servicios</NavLink>
                </li>
                <li class="nav-item p-3 py-md-1 d-flex">
                  <img src="./img/icon/iconoTrabajos.svg" alt="" className='me-3'/>
                  <NavLink className="nav-link" aria-current="page" to={"/"} onClick={()=>{document.getElementById('botonMenu').click()}}>Trabajos Realizados</NavLink>
                </li>
                <li class="nav-item p-3 py-md-1 d-flex">
                  <img src="./img/icon/iconoContacto.svg" alt="" className='me-3'/>
                  <NavLink className="nav-link" aria-current="page" to={"/"} onClick={()=>{document.getElementById('botonMenu').click()}}>Contacto</NavLink>
                </li>
                <div className="separador2 mx-2"></div>
                <li class="nav-item p-3 py-md-1 d-flex">
                  <img src="./img/icon/iconoAyuda.svg" alt="" className='me-3'/>
                  <NavLink className="nav-link" aria-current="page" to={"/"} onClick={()=>{document.getElementById('botonMenu').click()}}>Quienes Somos?</NavLink>
                </li>
                <li class="nav-item p-3 py-md-1 d-flex">
                  <img src="./img/icon/iconoInfo.svg" alt="" className='me-3'/>
                  <NavLink className="nav-link" aria-current="page" to={"/"} onClick={()=>{document.getElementById('botonMenu').click()}}>Terminos y Condiciones</NavLink>
                </li>
                <div className="separador2 mx-2"></div>
              </ul>
              

              <div class="d-lg-none align-self-center py-3">
                {/* <a href="*"><i className="bi bi-facebook px-2 text-info fs-2 text-white"></i></a>
                <a href="*"><i className="bi bi-instagram px-2 text-info fs-2 text-white"></i></a>
                <a href="*"><i className="bi bi-whatsapp px-2 text-info fs-2 text-white"></i></a> */}
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

