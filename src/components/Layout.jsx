import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import BgHeader from "./Header.module.css"

import Footer from "./Footer"
import DropdownMenu from './DropdownMenu'
import Carousel from "./Carousel"

export const Layout = () => {

   const productMenuItems = [
      { text: 'Calzados Invierno', href: '/products/winter' },
      { text: 'Calzados Verano', href: 'products/summer' },
      { text: 'Bikinis', href: '/products/bikinis' },
      { text: 'Ropa deportiva', href: 'products/deportiva' },
   ];

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

                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/cart"> Carrito </Link></Col>

                     <Col><Link className={`${BgHeader.a}  text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/contact"> Contacto</Link></Col>

                  </Row>
               </nav>
            </Container>
         </div>
         <Carousel />
         <Outlet />

         <Footer />

      </>

   )
}