import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import UserContext from "../../context/UserContext";
import { fetchUnaEmpresa } from "../../services/empresaService";
import { appUrl } from "../../services/ApiUrl/apiUrl";

const EmpresasRegistradas = () => {
  const { user } = useContext(UserContext);
  const usuario = user.data.user;
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const empresasData = await Promise.all(
          usuario.empresasCreadas.map(async (empresaId) => {
            const empresa = await fetchUnaEmpresa(empresaId);
            return empresa;
          })
        );
        setEmpresas(empresasData);
      } catch (error) {
        console.error("Error obteniendo empresas", error);
      }
    };

    fetchEmpresas();
  }, [usuario.empresasCreadas]);

  return (
    <Card>
      <Card.Header>
        <Card.Subtitle>Empresas registradas</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <ul>
          {empresas.map((empresa, index) => (
            <li key={index}>
              <a href={`${appUrl}/empresa/${empresa._id}`}>{empresa.nameEmpresa}</a>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default EmpresasRegistradas;
