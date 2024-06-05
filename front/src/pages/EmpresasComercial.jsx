import Container from "react-bootstrap/esm/Container"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PurpleTitle from "../components/Title/PurpleTitle"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Card from "react-bootstrap/Card"

const EmpresasComercial = () => {
    return (
        <div className="landing-page">

            <div className="content">
                
                <Container>
                    <BreadCrumb page="Registra tu empresa" />
                    <PurpleTitle title="Lo que EmpresasYa! te ofrece" />
                    <Row className="register-company-cards"> 
                        <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="text-center">
                                    <Card.Img variant="top" src="/images/localiza.webp" />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    Sitúa tu empresa en el mapa
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="text-center">
                                    <Card.Img variant="top" src="/images/muestra.webp" />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    Muestra tus productos/servicios
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="text-center">
                                    <Card.Img variant="top" src="/images/facilita.webp" />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    Publica tus datos de contacto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} xs={6} className="d-flex justify-content-center mb-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="text-center">
                                    <Card.Img variant="top" src="/images/potencia.webp" />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    Potencia tu visibilidad 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                     <Row>
                        <Col lg={12} xs={12}>

                            <p className="m-5">¿Quieres que tu empresa alcance un nuevo nivel de exposición y oportunidades? ¡Regístrala hoy en <b>EmpresasYa!</b> y empieza a disfrutar de los beneficios de estar presente en la plataforma más dinámica y conectada del sector!</p>
                            <p className="m-5">No pierdas la oportunidad de hacer que tu empresa sea vista y reconocida. Únete a nosotros y da el primer paso hacia un futuro lleno de posibilidades. ¡Estamos aquí para ayudarte a triunfar!</p>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
         
      </div>
    )
  }
  
  export default EmpresasComercial