import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import bgCarousel from './Carousel.module.css'

import imagen1 from '../images/fondosImages/ropadepor.jpg'
import imagen2 from '../images/fondosImages/zapasDepor.jpg'
import imagen3 from '../images/fondosImages/biki.jpg'
import imagen4 from '../images/fondosImages/otono.jpg'


function Carousel() {

  return (
    <>

      <div className={bgCarousel.bgCarousel}>

        <Container>
          <Row>
            <Col xs={12} md={6} lg={3} className={bgCarousel.imageContainer}>
              <Image src={imagen1} className={bgCarousel.imgFluid} />
              <div className={bgCarousel.overlay}>
                <p className={bgCarousel.overlayText}>¡ZAPATILLAS URBANAS!</p>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3} className={bgCarousel.imageContainer}>
              <Image src={imagen2} className={bgCarousel.imgFluid} />
              <div className={bgCarousel.overlay}>
                <p className={bgCarousel.overlayText}>¡ZAPATILLAS DEPORTIVAS!</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className={bgCarousel.imageContainer}>
              <Image src={imagen3} className={bgCarousel.imgFluid} />
              <div className={bgCarousel.overlay}>
                <p className={bgCarousel.overlayText}>¡BIKINIS Y OJOTAS!</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className={bgCarousel.imageContainer}>
              <Image src={imagen4} className={bgCarousel.imgFluid} />
              <div className={bgCarousel.overlay}>
                <p className={bgCarousel.overlayText}>¡SUECOS Y SANDALIAS!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Carousel;