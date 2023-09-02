import React, { useEffect, useState } from "react";
import Nav_bar from "./components/Nav_bar/Nav_bar";
import { Navigate, Route, Routes } from "react-router-dom";
import Shopping from "./pages/Shopping/Shopping";
import Trolley from "./pages/Trolley/Trolley";
import ProductosProvider from "./Context/ContextProducts/ProductsProvider";

import "./index.css";
import { ShoppingCartProvider } from "./Context/ContextShoppingCart/ShoppingCartProvider";
import Margarita from "./pages/Margarita/Margarita";
import FrontPage from "./images/front-page.jpg";
import perfil from "./images/perfil-wine.avif";


function App() {
  
  const [showNavBar, setShowNavBar] = useState(false);
  const [routes, setRoutes] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const coverImage = document.querySelector('.app-img-major');
      if (coverImage) {
        const coverBottom = coverImage.getBoundingClientRect().bottom;
     
        if(coverBottom <=280){
          setRoutes(true)
        }else{
          setRoutes(false)
        }
        if (coverBottom <= 150) {
          setShowNavBar(true);
        } else {
          setShowNavBar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <ProductosProvider>
      <ShoppingCartProvider>
        <div className="container-app">
          <div className="app-img-major">
            <img src={FrontPage} alt="front page" />

            <div className="app-img-secondary">
              <img src={perfil} alt="" /> 
              <span>Distrubuidora. Acme </span>
            </div>
            
          </div>

          <div className={`container-navBar ${showNavBar ? "visible" : ""}`}>
            <Nav_bar />
            <hr className="app-hr" />
          </div>
   

    {routes ?    <div className="flex justify-center rutas">
          
          {/* Here begins the container */}
          <div className="max-w-screen-xl mx-auto px-4 ">
            <Routes>
              <Route className="app-effect" path="/" element={<Shopping />} />

              <Route className="app-effect"path="/Vodka/:name" element={<Margarita />} />

              <Route path="/Trolley" element={<Trolley />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

          </div>
        
          {/* Here ends the container*/}
        </div> : <div className="containerDefault"></div>}
        <footer>
        <p className="age-notice">Por favor, consume con responsabilidad. +18 años.</p>
        <p>
            <a href="#">Términos y Condiciones</a> |
            <a href="#">Política de Privacidad</a> |
            <a href="#">Contacto</a>
        </p>
       
        <p>&copy; 2023 Tu Empresa de Licor. Todos los derechos reservados.</p>
    </footer>
        </div>
        
      </ShoppingCartProvider>
    </ProductosProvider>
  );
}

export default App;
