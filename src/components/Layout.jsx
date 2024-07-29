import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import BgHeader from "./Header.module.css"

import Footer from "./Footer"
import Carousel from "./Carousel"

export const Layout = () => {
   return (
      <>
         <div className={BgHeader.bgLayout}>
            <Container >

               <nav >

                  <Row className={BgHeader.divisorVertical} >

                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
                     to="/">Home</Link></Col>
                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
                     to="/about-us"> Nosotros</Link></Col>
                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
                     to="/products"> Productos</Link></Col>
                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
                     to="/offers"> Ofertas</Link></Col>
                     <Col><Link className={`${BgHeader.a} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`} 
                     to="/cart"> Carrito </Link></Col>
                     <Col><Link className={`${BgHeader.a}  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
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