import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import './Main.css';

const Main = () => {
  return (
    <main className="mt-4"> {/* margin-top de 1.5rem */}
      <Container>
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
    </main>
  )
}

{/* 
  - adicionado margin-top de 1.5rem  no marcador Main
  - css para o Main.jsx para ajustar o carrossel
  - correção do caminho (public) das imagens
  
*/}


export default Main
