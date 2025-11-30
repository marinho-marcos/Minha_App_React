import Carousel from 'react-bootstrap/Carousel';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Carrossel from './Carrossel.jsx';
import dadosCenso from '../datasets/dados_censo_pb.json';
import './Main.css';

// Definimos uma imagem padrão (já que o censo não tem campo para as fotos)
let imagemPadrao = "https://br.freepik.com/fotos-gratis/grupo-de-criancas-com-professora-caminhando-no-corredor-da-escola_13996170.htm#fromView=search&page=1&position=2&uuid=f986d231-d985-4e0e-bac8-2b18309864b5&query=escola";

const Main = () => {

  // realiza a cópia dos dados do arquivo json, ordena pela qntd matricula e pega os 3 primeiros
  let top3Escolas = [...dadosCenso].sort((a, b) => b.qt_mat_bas - a.qt_mat_bas).slice(0, 3);

  // mapa das imagens das 3 primeiras instituições
  let galeriaEscolas = {
    "25133500": "https://lh3.googleusercontent.com/p/AF1QipPKqi-9cfBDa3fF1SKCltDyUHyZyU1nGGFs-Nrd=s680-w680-h510", // Procure uma foto real no Google e cole o link aqui
    "25096850": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx9Xuk32niEYwx3RSlll8YOTSjejyhIfd97bQeq5-YmFMKY_z38-ND3f2LXzgprGFjq3HoCXKTTVlesab21Uy_5ShX6CrgjKdR2WX7feWf-2D5nfaGdM3d5v10BMlbfp1nn83PJbQ=s680-w680-h510",
    "25139401": "https://www.blogdobgpb.com.br/wp-content/uploads/2022/05/images-4.jpeg" 
  };

  return (
    <main className="mt-4"> {/* margin-top de 1.5rem */}
      
      <Carrossel/>

      {/* ADICIONANDO CARDS */}

      <Container>
        <h3 className="my-4 text-center">Destaques do Censo 2024</h3>
        <Row>
          {top3Escolas.map((escola) => {

            // Lógica para escolher a imagem:
            // Tenta achar a foto no dicionário pelo ID. Se não achar, usa a padrão.
            let imagemFinal = galeriaEscolas[escola.co_entidade] || imagemPadrao;

            return (
              <Col className="mb-4">
                <Card>
                  <div className="card-img-wrapper">
                    <Card.Img variant="top" src={imagemFinal} className="card-img-fixed"/>
                  </div>
                  <Card.Body>
                    <Card.Title>{escola.no_entidade}</Card.Title>
                    <Card.Text>
                      <strong>Município:</strong> {escola.no_municipio} <br/>
                      <strong>Matrículas:</strong> {escola.qt_mat_bas}
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


export default Main
