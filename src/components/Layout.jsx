import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import BgHeader from "./Header.module.css"

export const Layout = () => {
 return (
    <>
    <div className={BgHeader.bgLayout}>
     <Container >
        
     <nav >
    
        <Row className={BgHeader.divisorVertical} >
        
          <Col><Link className={BgHeader.a} to= "/">Home</Link></Col>
          <Col><Link className={BgHeader.a} to= "/about-us"> Nosotros</Link></Col>
          <Col><Link className={BgHeader.a} to= "/products"> Productos</Link></Col>
          <Col><Link className={BgHeader.a} to= "/offers"> Ofertas</Link></Col>
          <Col><Link className={BgHeader.a} to= "/cart"> Carrito </Link></Col>
          <Col><Link className={BgHeader.a} to= "/contact"> Contacto</Link></Col>
    
       </Row>
       </nav>
     </Container>
     </div>
       <Outlet/>

       <footer>
         <h2>Este es el footer</h2>
       </footer>
     
    </>
    
 )
}