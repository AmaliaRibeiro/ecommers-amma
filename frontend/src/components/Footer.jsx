import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { FaWhatsapp } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import bgNavbar from "./Navbar.module.css"
import bgFooter from './Footer.module.css'

const iconsStyles = { color: 'white', fontSize: '50px', padding: '8px' }

function Footer() {

    return (
        <>

            <div className={bgFooter.bgFooter}>

                <div>
                    <div className={bgFooter.followContainer}>
                        <h1 className={bgFooter.bgTitle}>Seguinos en nuestras redes sociales</h1>
                        <a href="https://www.instagram.com/amma_ribeicoiro_zapatos/" target="_blank"><FaInstagram style={iconsStyles} /></a>
                        <a href="https://www.facebook.com/profile.php?id=100080571537645" target="_blank"><FaFacebook style={iconsStyles} /></a>
                        <a href="https://wa.me/5493764210156" target="_blank"><FaWhatsapp style={iconsStyles} /></a>
                    </div>
                    <Container>
                        <Row className={bgNavbar.divisorVertical} >

                            <Col><Link className={bgNavbar.a} to="/">Home</Link></Col>
                            <Col><Link className={bgNavbar.a} to="/about-us"> Como comprar</Link></Col>
                            <Col><Link className={bgNavbar.a} to="/products"> Productos</Link></Col>
                            <Col><Link className={bgNavbar.a} to="/offers"> Preguntas frecuentes</Link></Col>
                            <Col><Link className={bgNavbar.a} to="/cart"> Tabla de talles </Link></Col>

                        </Row>
                    </Container>

                    <div className={bgFooter.followContact}>
                        <div className={bgFooter.contactItem}>
                            <CgMail style={iconsStyles} />
                            <p className={bgFooter.bgSubtitle}> amalita9421@gmail.com</p>
                        </div>
                        <div className={bgFooter.contactItem}>
                            <CiLocationOn style={iconsStyles} />
                            <p className={bgFooter.bgSubtitle}>Posadas-Misiones-Venta exclusiva online</p>
                        </div>
                    </div>

                    <div className={bgFooter.finally}>

                        <Col className={bgFooter.textItem}>Copyright By Amma Shoes-2023</Col>
                        <Col className={bgFooter.textItem}>Todos los derechos reservados</Col>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Footer;