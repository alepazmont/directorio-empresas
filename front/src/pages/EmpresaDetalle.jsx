/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../services/ApiUrl/apiUrl";
import Container from "react-bootstrap/esm/Container";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import MapaEmpresaDetalle from "../components/Map/MapaEmpresaDetalle";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from 'react-bootstrap/Carousel'

const EmpresaDetalle = () => {
  const { nombre, id } = useParams();
  const [empresa, setEmpresa] = useState(null);

  const [pages] = useState([
    { link: "/directorio", page: "Directorio de empresas" },
    { link: "", page: "Ficha de empresa" },
  ]);

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const route = `/empresas/${id}`; // Suponiendo que la API tiene un endpoint para obtener una empresa por ID
        const response = await axios.get(apiUrl + route);
        setEmpresa(response.data.data); // Asumiendo que la respuesta de la API contiene todos los datos de la empresa
      } catch (error) {
        console.error("Error obteniendo empresa", error);
      }
    };

    fetchEmpresa();
  }, [id]);

  if (!empresa) {
    return <div>Cargando...</div>;
  }

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const isMobile = window.innerWidth <= 768;
  const fotoChunks = chunkArray(empresa.galeriaFotos, isMobile ? 1 : 3);

  return (
    <div className="landing-page">
      <div className="content">
        <Container className="d-company">
          <BreadCrumb pages={pages} />

          <Row>
            <Col lg={12} xs={12} className="d-company-name">
              <div className="jumbotron">
                <div className="d-flex">
                  <div >
                    <img src={empresa.logo} alt={empresa.nameEmpresa} />
                  </div>
                  <div>
                    <h2 className="display-4">{empresa.nameEmpresa}</h2>
                    <p className="lead">{empresa.categoria}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={6} xs={12} className="d-company-info">
              {empresa.listaProd && empresa.listaProd.length > 0 && (
                <p>
                  <strong>Productos:</strong>{" "}
                  {empresa.listaProd.length > 1
                    ? empresa.listaProd.join(", ")
                    : empresa.listaProd[0]}
                </p>
              )}
              {empresa.listaServ && empresa.listaServ.length > 0 && (
                <p>
                  <strong>Servicios:</strong>{" "}
                  {empresa.listaServ.length > 1
                    ? empresa.listaServ.join(", ")
                    : empresa.listaServ[0]}
                </p>
              )}
              <p>
                <strong>Dirección:</strong> {empresa.direccion},{" "}
                {empresa.codigoPostal}
              </p>
              <p>
                <strong>Parada de Metro:</strong> {empresa.paradaMetro}
              </p>
              {empresa.telefono && empresa.telefono.length > 0 && (
                <p>
                  <strong>Teléfono:</strong>{" "}
                  {empresa.telefono.length > 1
                    ? empresa.telefono.join(", ")
                    : empresa.telefono[0]}
                </p>
              )}
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
              </p>
              <p>
                <strong>Web:</strong>{" "}
                <a href={empresa.web} target="_blank" rel="noopener noreferrer">
                  {empresa.web}
                </a>
              </p>
              <p>
                <strong>Redes Sociales:</strong>
              </p>
              {empresa.redes && empresa.redes.length > 0 && (
                <div>
                  <ul>
                    {empresa.redes.map((red, index) => (
                      <li key={index}>
                        <a
                          key={index}
                          href={red}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {red}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Col>
            <Col lg={6} xs={12} className="d-company-map">
              <MapaEmpresaDetalle empresa={empresa} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={12} xs={12} className="d-company-photos">
              <Carousel interval='3000' indicators={false}>
                {empresa.galeriaFotos &&
                  empresa.galeriaFotos.length > 0 &&
                  fotoChunks.map((foto, index) => (
                    <Carousel.Item key={index}>
                      <img key={index} src={foto} alt={`Foto ${index + 1}`} />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EmpresaDetalle;
