/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/esm/Container";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import PurpleTitle from "../components/Title/PurpleTitle";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

const EmpresasComercial = () => {
  return (
    <div className="body">
        <Container>
          <BreadCrumb page="Registra tu empresa" />
          <PurpleTitle title="Lo que EmpresasYa! te ofrece" />
          <Row>
            <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Header className="text-center">
                  <Card.Img variant="top" src="/images/localiza.webp" />
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Header className="text-center">
                  <Card.Img variant="top" src="/images/muestra.webp" />
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Header className="text-center">
                  <Card.Img variant="top" src="/images/facilita.webp" />
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
              <Card style={{ width: "18rem" }}>
                <Card.Header className="text-center">
                  <Card.Img variant="top" src="/images/potencia.webp" />
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12} xs={12}>
              <p></p>
            </Col>
          </Row>
          <a href="/empresas/crear">Crear empresa</a>
        </Container>
      </div>
  );
};

export default EmpresasComercial;
