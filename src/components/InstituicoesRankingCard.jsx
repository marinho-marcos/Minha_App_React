import React from 'react'
import { Container, Row, Col,  } from 'react-bootstrap';

const InstituicoesRankingCard = (props) => {
  return (
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
  )
}

export default InstituicoesRankingCard
