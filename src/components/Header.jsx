import { Link } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import BgHeader from "./Header.module.css"

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useCart } from '../contexts/CartContexts'; // Importa tu contexto

import DropdownMenu from './DropdownMenu'


function Header() {

    const { cartItems } = useCart(); // Obtén los ítems del carrito desde el contexto

   const productMenuItems = [
      { text: 'Calzados Invierno', href: '/products/winter' },
      { text: 'Calzados Verano', href: 'products/summer' },
      { text: 'Bikinis', href: '/products/bikinis' },
      { text: 'Ropa deportiva', href: 'products/deportiva' },
   ];

if(!cartItems) {
   return <div>Loading...</div>
}
   return (
      <>
         <div className={BgHeader.bgLayout}>
            <Container >

               <nav >

                  <Row className={BgHeader.divisorVertical} >

                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/">Home</Link></Col>

                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/about-us"> Nosotros</Link></Col>

                     <Col>
                        <Link to="/products">
                           <DropdownMenu
                              label="Productos"
                              items={productMenuItems}
                           />
                        </Link>
                     </Col>

                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/offers"> Ofertas</Link></Col>

                     <Col>
                      <Link className={`${BgHeader.a}  text-base sm:text-lg md:text-xl lg:text-2xl flex items-center`}
                        to="/cart"
                     >
                        <PiShoppingCartSimpleFill className="mr-2" />
                        Carrito
                        {cartItems.length > 0 && (
                           <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                              {cartItems.length}
                           </span>
                        )}
                     </Link>
                     </Col>

                     <Col><Link className={`${BgHeader.a}  text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/contact"> Contacto</Link></Col>

                  </Row>
               </nav>
            </Container>
         </div>
</>
   )
}

export default Header;