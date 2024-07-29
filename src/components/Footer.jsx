import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook} from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import BgHeader from "./Header.module.css"
import bgFooter from './Footer.module.css'

const iconsStyles = { color: 'white', fontSize: '50px', padding: '8px' }

function Footer() {

    return (
        <>

            <div className={bgFooter.bgFooter}>

                <div>
                    <div className={bgFooter.followConteiner}>
                        <h1 className={bgFooter.bgTitle}>Seguinos en nuestras redes sociales</h1>
                        <a href="https://www.instagram.com/amma_ribeiro_zapatos/" target="_blank"><FaInstagram style={iconsStyles} /></a>
                        <a href="https://www.facebook.com/profile.php?id=100080571537645" target="_blank"><FaFacebook style={iconsStyles} /></a>
                    </div>
                    <Container>
                        <Row className={BgHeader.divisorVertical} >

                            <Col><Link className={BgHeader.a} to="/">Home</Link></Col>
                            <Col><Link className={BgHeader.a} to="/about-us"> Como comprar</Link></Col>
                            <Col><Link className={BgHeader.a} to="/products"> Productos</Link></Col>
                            <Col><Link className={BgHeader.a} to="/offers"> Preguntas frecuentes</Link></Col>
                            <Col><Link className={BgHeader.a} to="/cart"> Tabla de talles </Link></Col>

                        </Row>
                    </Container>
                    <div className={bgFooter.followContact}>
                        <CgMail style={iconsStyles} /><p className={bgFooter.bgSubtitle}> amalita9421@gmail.com</p>
                        <CiLocationOn style={iconsStyles} /><p className={bgFooter.bgSubtitle}>Posadas-Misiones-Venta exclusiva online</p>
                        
                    </div>
                    <div className={bgFooter.finally}>
                            <Row>
                                <Col>Copyright By Amma Shoes-2023</Col>
                                <Col>Todos los derechos reservados</Col>
                            </Row>
                        </div>
                </div>
            </div>

        </>

    )
}

export default Footer;