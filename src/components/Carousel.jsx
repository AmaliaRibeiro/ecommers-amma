import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import bgCarousel from './Carousel.module.css'

import imagen1 from '../images/fondosImages/bikinis4.jpg'
import imagen2 from '../images/fondosImages/zapatos5.jpg'
import imagen3 from '../images/fondosImages/ropafit2.jpg'
import imagen4 from '../images/fondosImages/accesorios1.jpg'


function Carousel() {
    
  return (
    <>
    
    <div className={bgCarousel.bgCarousel}>
    
    <Container>
      <Row>
      <Col xs={12} sm={6} md={3}>
        <Image src={imagen1} className={bgCarousel.imgFluid} />
        </Col>
        <Col xs={12} sm={6} md={3}>
        <Image src={imagen2} className={bgCarousel.imgFluid} />
        </Col>
        <Col xs={12} sm={6} md={3}>
        <Image src={imagen3} className={bgCarousel.imgFluid} />
        </Col>
        <Col xs={12} sm={6} md={3}>
        <Image src={imagen4} className={bgCarousel.imgFluid} />
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );  
}

export default Carousel;