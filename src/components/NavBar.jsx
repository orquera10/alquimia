// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import '../components/navBar.css'

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
          <a href="*" className="navbar-brand text-info fw-semibold fs-4">Emprinnos</a>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menuLateral"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <section
            className="offcanvas offcanvas-start"
            id="menuLateral"
            tabindex="-1"
          >
            <div class="offcanvas-header" data-bs-theme="dark">
              <h5 className="offcanvas-title text-info">EMPRINNOS</h5>
              {/* <button
                className="btn-close"
                type="button"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
              ></button> */}
            </div>
            
            <div
              className="offcanvas-body d-flex flex-column justify-content-between px-0"
            >
              <ul className="navbar-nav fs-5 justify-content-evenly">
                <li className="nav-item p-3 py-md-1">
                  <a href="*" className="nav-link">HOME</a>
                </li>
                <li class="nav-item p-3 py-md-1">
                  <a href="*" className="nav-link">PROJECTS</a>
                </li>
                <li class="nav-item p-3 py-md-1">
                  <a href="*" className="nav-link">ABOUT</a>
                </li>
                <li class="nav-item p-3 py-md-1">
                  <a href="*" className="nav-link">CONTACT</a>
                </li>
              </ul>
              

              <div class="d-lg-none align-self-center py-3">
                <a href="*"><i className="bi bi-twitter px-2 text-info fs-2"></i></a>
                <a href="*"><i className="bi bi-facebook px-2 text-info fs-2"></i></a>
                <a href="*"><i className="bi bi-github px-2 text-info fs-2"></i></a>
                <a href="*"><i className="bi bi-whatsapp px-2 text-info fs-2"></i></a>
              </div>
            </div>
          </section>
          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;