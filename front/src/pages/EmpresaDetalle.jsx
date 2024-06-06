/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../services/ApiUrl/apiUrl";
import Container from "react-bootstrap/esm/Container";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";


const EmpresaDetalle = () => {
  const { nombre, id } = useParams();
  const [empresa, setEmpresa] = useState(null);

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

  return (
    <div className="body">
      <Container>
      <BreadCrumb page="Ficha de empresa" />
        <h2>{empresa.nameEmpresa}</h2>
        <div className="empresa-datos">
          <div className="logo-empresa">
            <img src={empresa.logo} alt={empresa.nameEmpresa} />
          </div>
          <div className="info-empresa">
            <p>
              <strong>Categoría:</strong> {empresa.categoria}
            </p>
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
          </div>
        </div>
        <div className="galeria-fotos">
          <h3>Galería de Fotos</h3>
          <div className="fotos">
            {empresa.galeriaFotos &&
              empresa.galeriaFotos.length > 0 &&
              empresa.galeriaFotos.map((foto, index) => (
                <img key={index} src={foto} alt={`Foto ${index + 1}`} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EmpresaDetalle;
