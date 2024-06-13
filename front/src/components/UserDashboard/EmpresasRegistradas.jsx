import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import UserContext from "../../context/UserContext";
import { fetchUnaEmpresa } from "../../services/empresaService";
import { appUrl } from "../../services/ApiUrl/apiUrl";

const EmpresasRegistradas = () => {
  const { user } = useContext(UserContext);
  const usuario = user.data.user;
  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(true); 

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
      } finally {
        setLoading(false);
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
        {loading ? (
          <p>Cargando...</p>
        ) : (
          empresas.length === 0 ? (
            <p>No tienes ninguna empresa registrada</p>
          ) : (
            <ul>
              {empresas.map((empresa, index) => (
                <li key={index}>
                  <a href={`${appUrl}/empresa/${empresa._id}`}>
                    {empresa.nameEmpresa}
                  </a>
                  {!empresa.aprobada && (
                    <i style={{ color: 'gray', fontSize: 'smaller', marginLeft: '10px' }}>
                      Pendiente de aprobación
                    </i>
                  )}
                </li>
              ))}
            </ul>
          )
        )}
      </Card.Body>
    </Card>
  );
};

export default EmpresasRegistradas;
