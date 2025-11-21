import { Container, Row, Col } from "react-bootstrap";
import { PiStudentFill } from "react-icons/pi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg mt-5 py-4">
      <Container>
        <Row className="align-items-center">
          {/* ÍCONE E TÍTULO */}
          <Col md={6} className="d-flex align-items-center">
            <PiStudentFill size={28} className="me-1" />
            <div>
              <h5 className="footer-title mb-1">Censo Escolar</h5>
            </div>
          </Col>

          {/* LINKS ÚTEIS */}
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <h6 className="footer-links-title">Links úteis</h6>
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">Instituições</a>
            <a href="#" className="footer-link">Contato</a>
          </Col>
        </Row>

        <hr />

        <p className="footer-copy text-center mb-0">
          © {new Date().getFullYear()} Censo Escolar
        </p>
      </Container>
    </footer>
  );
};

export default Footer
