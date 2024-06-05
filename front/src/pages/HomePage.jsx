import './HomePage.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import LightTitle from '../components/Title/LightTitle';
import DarkTitle from '../components/Title/DarkTitle';
import MapaEmpresas from '../components/Map/MapaEmpresas';

const HomePage = () => {

  return (
<div className="home-page">      
      <Container fluid>
      <Row>
        <Col lg={6} xs={12} className="text-center b-xs col-mapa-inicio">
        <div className="map-container">
        <MapaEmpresas apiKey="AIzaSyCj09lN8tpjDD7lrEyumuqOGEtG3_utP8k" />
        </div>
        </Col> 
        <Col lg={6} xs={12} className="text-center b-xs col-directorio-inicio">
        </Col>
        </Row>
      </Container>
      <div className="bg-purple">
        <Container>
          <LightTitle title="Últimas empresas inscritas" />
        </Container>
      </div>
      
      <div>
        <DarkTitle title="Las empresas más populares" />
      </div>
    </div>
  );
};

export default HomePage;
