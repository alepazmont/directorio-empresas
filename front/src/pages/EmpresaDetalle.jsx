import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../services/ApiUrl/apiUrl";
import Container from "react-bootstrap/esm/Container";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import MapaEmpresaDetalle from "../components/Map/MapaEmpresaDetalle";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink/* ,FaWhatsapp */ } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Lightbox from "bs5-lightbox";

const EmpresaDetalle = () => {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState(null);

  const [pages] = useState([
    { link: "/directorio", page: "Directorio de empresas" },
    { link: "", page: "Ficha de empresa" },
  ]);

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const route = `/empresas/${id}`;
        const response = await axios.get(apiUrl + route);
        setEmpresa(response.data.data);
      } catch (error) {
        console.error("Error obteniendo empresa", error);
      }
    };

    fetchEmpresa();
  }, [id]);

  useEffect(() => {
    if (empresa) {
      const lightboxElements = document.querySelectorAll('[data-toggle="lightbox"]');
      lightboxElements.forEach(
        el => el.addEventListener('click', Lightbox.initialize)
      );
    }
  }, [empresa]);

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

  const isMobile = window.innerWidth <= 992;
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
                  <div>
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
                <a
                  href={empresa.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {empresa.web}
                </a>
              </p>
              <p>
                <strong>Redes Sociales:</strong>
              </p>
              {empresa.redes && empresa.redes.length > 0 && (
                <div>
                  <ul className="d-company--social-links">
                    {empresa.redes.map((red, index) => (
                      <li key={index}>
                        <a
                          href={red.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {red.redSocial === "Twitter" && (
                            <FontAwesomeIcon icon={faTwitter} />
                          )}
                          {red.redSocial === "Facebook" && (
                            <FontAwesomeIcon icon={faFacebook} />
                          )}
                          {red.redSocial === "Instagram" && (
                            <FontAwesomeIcon icon={faInstagram} />
                          )}
                          {red.redSocial === "LinkedIn" && (
                            <FontAwesomeIcon icon={faLinkedin} />
                          )}
                          {red.redSocial === "YouTube" && (
                            <FontAwesomeIcon icon={faYoutube} />
                          )}
                          {/* Mostrar un icono genérico en caso de no coincidir con ninguna red social conocida */}
                          {[
                            "Twitter",
                            "Facebook",
                            "Instagram",
                            "LinkedIn",
                            "YouTube",
                          ].indexOf(red.redSocial) === -1 && (
                            <FontAwesomeIcon icon={faLink} />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {empresa.whatsapp && (
                <p>
                  <a
                    href={`https://wa.me/${empresa.telWhatsapp}?text=Hola%20${empresa.nameEmpresa},%20tengo%20una%20consulta`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                    style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
                  >
                    {/* <FontAwesomeIcon icon={FaWhatsapp} /> */} Contactar por WhatsApp
                  </a>
                </p>
              )}
            </Col>
            <Col lg={6} xs={12} className="d-company-map">
              <MapaEmpresaDetalle empresa={empresa} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={12} xs={12} className="d-company-photos">
              <Carousel indicators={false}  interval={null}>
                {fotoChunks.map((fotoChunk, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-around">
                      {fotoChunk.map((foto, idx) => (
                        <a key={idx} href={foto} data-toggle="lightbox" data-gallery="photos-gallery">

                          <img
                            key={idx}
                            src={foto}
                            alt={`Foto ${index * 3 + idx + 1}`}
                          />
                       </a>
                      ))}
                    </div>
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
