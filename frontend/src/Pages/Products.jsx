import React, { useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import Typed from "typed.js";
import styTyp from "./styles/TypingProduct.module.css";
import product from "../components/products.module.css"

export const Products = () => {

  useEffect(() => {
          const typed = new Typed("#typed-text", {
            strings: ["AMMA TU TIENDA ONLINE FAVORITA"],
            typeSpeed: 50, // Velocidad al escribir
            backSpeed: 30, // Velocidad al borrar
            loop: true, // Hacer que se repita
          });
  
      return () => typed.destroy(); // Destruir la instancia al desmontar
    }, []);
  
  return (
    <>
    <div className={styTyp.container}>
      <span id="typed-text" className={styTyp.typedText}></span>
    </div>

      <div className={product.containerProducts}>
        <h2>¿Qué estas buscando?</h2>
        <nav>
            <li>
              <Link className={product.links} to="winter">CALZADOS DE INVIERNO</Link>
            </li>
            <li>
              <Link className={product.links} to="summer">CALZADOS DE VERANO</Link>
            </li>
            <li>
              <Link className={product.links} to="bikinis">BIKINIS</Link>
            </li>
            <li>
              <Link className={product.links} to="deportiva">ROPA DEPORTIVA</Link>
            </li>
          
        </nav>
      </div>
      
      <div>
        {/* Aquí se renderizará el componente correspondiente a la subruta */}
        <Outlet />
      </div>
    </>
  );
}

