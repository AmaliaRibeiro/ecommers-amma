import React, { useEffect } from "react";
import Typed from "typed.js";
import styTyp from "./styles/TypingEffect.module.css";
import BuySteps from "../components/BuySteps"
import Sale from "../components/Sale";

export const Home = () => {
    useEffect(() => {
        const typed = new Typed("#typed-text", {
          strings: ["ZAPATILLAS URBANAS", "BIKINIS EXCLUSIVAS", "ROPA DEPORTIVA", "A PEDIDO Y EN STOCK"],
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

<BuySteps />
<Sale />
</>
  );
};
