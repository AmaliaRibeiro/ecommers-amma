import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import bgCarousel from './Carousel.module.css'

import imagen3 from '../images/fondosImages/welcome to amma.png'



function Carousel() {
    
  return (
    <>
    
    <div className={bgCarousel.bgCarousel}>
    
    <Container>
      <Row>
        <Col>
         
        </Col>
        <Col >
          
        </Col>
        <Col >
        <Image src={imagen3} className='img-fluid' />
        </Col>
        <Col >
          
        </Col>
        <Col >
          
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );  
}

export default Carousel;