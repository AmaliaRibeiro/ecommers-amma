import { Link } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import BgNavbar from "./Navbar.module.css"

const AmmaLogo = '/images/fondosImages/ammaLogo.png';

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useCart } from '../contexts/CartContexts'; // Importa tu contexto

import DropdownMenu from './DropdownMenu'


function Navbar() {

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
         <div className={BgNavbar.bgLayout}>
            <Container >

               <nav >

                  <Row className={BgNavbar.divisorVertical} >
                  <Col className={BgNavbar.navItem}>
                     <Link className={`${BgNavbar.a} text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/">
                           <img src={AmmaLogo}
                           alt= "logo" 
                           className={BgNavbar.logo}/>
                           </Link>
                        </Col>
                     <Col  className={BgNavbar.navItem}>
                     <Link className={`${BgNavbar.a} text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/">Home</Link></Col>

                     <Col className={BgNavbar.navItem} ><Link className={`${BgNavbar.a} text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/about-us"> Nosotros</Link></Col>

                     <Col className={BgNavbar.navItem}>
                        <Link className={`${BgNavbar.a} text-base sm:text-lg md:text-xl lg:text-2xl`} 
                        to="/products">
                           <DropdownMenu
                              className={BgNavbar.menu}
                              label="Productos"
                              items={productMenuItems}
                           />
                        </Link>
                     </Col>

                     <Col className={BgNavbar.navItem}>
                     <Link className={`${BgNavbar.a} text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/offers"> Ofertas</Link>
                     </Col>

                     

                     <Col className={BgNavbar.navItem}><Link className={`${BgNavbar.a}  text-base sm:text-lg md:text-xl lg:text-2xl`}
                        to="/contact"> Contacto</Link></Col>

                     <Col className={BgNavbar.navItem}>
                      <Link className={`${BgNavbar.a}  text-base sm:text-lg md:text-xl lg:text-2xl items-center`}
                        to="/cart"
                     >
                        
                        <PiShoppingCartSimpleFill />
                        
                        {cartItems.length > 0 && (
                           <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                              {cartItems.length}
                           </span> 
                        )}
                     </Link>
                     </Col>
                  </Row>
               </nav>
            </Container>
         </div>
</>
   )
}

export default Navbar;