import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
import Error404 from "./components/Error404";
import HomeContainer from "./components/HomeContainer";

function App() {
  
  return (
    <BrowserRouter>
          {/* <NavBar /> */}
          <Routes>
            <Route path={"/"} element={<HomeContainer />} />
            {/* <Route path={"/servicios"} element={<ServiceContainer />} />
            <Route path={"/trabajos"} element={<WorkContainer />} />
            <Route path={"/contacto"} element={<Contact/>} /> 
            <Route path={"/nosostros"} element={<AboutUs />} /> */}
            <Route path={"*"} element={<Error404 />} />           
          </Routes>
          {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;