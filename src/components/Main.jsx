import Carousel from 'react-bootstrap/Carousel';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Carrossel from './Carrossel.jsx';
import instituicoesEnsino from '../datasets/censoescolar.js';
import './Main.css';

const Main = () => {

  let instituicoesEnsinoJson = [...instituicoesEnsino];

  return (
    <main className="mt-4"> {/* margin-top de 1.5rem */}
      
      <Carrossel/>

      {/* ADICIONANDO CARDS */}

      <Container>
        <Row>
          {instituicoesEnsinoJson.map((instituicoesEnsino) => {
            return (
              <Col className="mb-4">
                <Card>
                  <div className="card-img-wrapper">
                    <Card.Img variant="top" src={instituicoesEnsino.urlImagem} className="card-img-fixed"/>
                  </div>
                  <Card.Body>
                    <Card.Title>{instituicoesEnsino.nome}</Card.Title>
                    <Card.Text>
                      Município: {instituicoesEnsino.municipio}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          
        </Row>
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
