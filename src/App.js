import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import Error404 from "./components/Error404";
import HomeContainer from "./components/HomeContainer";
import ServiceContainer from "./components/ServiceContainer";
import WorkContainer from "./components/WorkContainer";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  
  return (
    <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<HomeContainer />} />
            <Route path={"/servicios"} element={<ServiceContainer />} />
            <Route path={"/trabajos"} element={<WorkContainer />} />
            <Route path={"/contacto"} element={<Contact/>} /> 
            <Route path={"/nosotros"} element={<AboutUs />} />
            <Route path={"*"} element={<Error404 />} />           
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;