import { Carousel, Container } from 'react-bootstrap';

const Carrossel = () => {
  return (
    <Container className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="/img/escola1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="/img/escola2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="/img/escola3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </Container>
  );
};

export default Carrossel;