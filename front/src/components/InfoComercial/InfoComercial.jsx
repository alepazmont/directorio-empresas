
import PurpleTitle from "../Title/PurpleTitle"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Card from "react-bootstrap/Card"

const InfoComercial = () => {
    return (
        <>
        <PurpleTitle title="Lo que EmpresasYa! te ofrece" />
        <Row className="register-company-cards"> 
            <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Header className="text-center">
                        <Card.Img variant="top" src="/images/localiza.webp" />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                        Sitúa tu empresa en el mapa
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Header className="text-center">
                        <Card.Img variant="top" src="/images/muestra.webp" />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                        Muestra tus productos/servicios
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Header className="text-center">
                        <Card.Img variant="top" src="/images/facilita.webp" />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                        Publica tus datos de contacto
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Header className="text-center">
                        <Card.Img variant="top" src="/images/potencia.webp" />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                        Potencia tu visibilidad 
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
        </>
    );
};

export default InfoComercial;