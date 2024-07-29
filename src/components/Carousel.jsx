import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import bgCarousel from './Carousel.module.css'

import imagen1 from '../images/fondosImages/girlPink.jpg'
import imagen2 from '../images/fondosImages/fondo9.jpg'
import imagen3 from '../images/fondosImages/whiteTenis.jpg'
import imagen4 from '../images/fondosImages/fondo7.jpg'


function Carousel() {
    
  return (
    <>
    <div className={bgCarousel.bgCarousel}>
    <Container>
      <Row>
        <Col>
          <Image src={imagen1} className='img-fluid'/>
        </Col>
        <Col >
          <Image src={imagen2} className='img-fluid' />
        </Col>
        <Col >
          <Image src={imagen3} className='img-fluid' />
        </Col>
        <Col >
          <Image src={imagen4} className='img-fluid'/>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );  
}

export default Carousel;