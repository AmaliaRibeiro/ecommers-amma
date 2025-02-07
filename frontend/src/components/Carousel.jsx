import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import bgCarousel from './Carousel.module.css'

const imagen1 = '/images/fondosImages/ropadepor.jpg'
const imagen2 = '/images/fondosImages/zapasDepor.jpg'
const imagen3 = '/images/fondosImages/biki.jpg'
const imagen4 = '/images/fondosImages/otono.jpg'


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