/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Map from '../components/Map/Map';
import './HomePage.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import LightTitle from '../components/Title/LightTitle';
import DarkTitle from '../components/Title/DarkTitle';
import DirectorioSimple from '../components/Directorio/DirectorioSimple';

const HomePage = () => {
  const [locations, setLocations] = useState([]);

  return (
<div className="home-page">      
      <Container fluid>
      <Row>
        <Col lg={6} xs={12} className="text-center b-xs col-mapa-inicio">
        <div className="map-container">
          <Map locations={locations} />
        </div>
        </Col> 
        <Col lg={6} xs={12} className="text-center b-xs col-directorio-inicio">
        <DirectorioSimple />
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
