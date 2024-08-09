import { Outlet } from "react-router-dom";

import { useCart } from '../contexts/CartContexts'; // Importa tu contexto

import Footer from "./Footer"
import Header from "./Header";
import Carousel from "./Carousel"

export const Layout = () => {

   const { cartItems } = useCart(); // Obtén los ítems del carrito desde el contexto

if(!cartItems) {
   return <div>Loading...</div>
}
   return (
      <>
        <Header />
         <Carousel />
         <Outlet />

         <Footer />

      </>

   )
}