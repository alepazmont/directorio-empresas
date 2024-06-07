
import { useEffect, useState } from 'react';
import { fetchEmpresas, approveEmpresa } from '../../services/empresaService';

import Card from "react-bootstrap/Card"

const ListadoUsuarios = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const loadEmpresas = async () => {
      try {
        const empresasData = await fetchEmpresas();
        // Filtrar empresas no aprobadas antes de establecer el estado
        const empresasNoAprobadas = empresasData.filter(empresa => !empresa.aprobada);
        setEmpresas(empresasNoAprobadas);
      } catch (error) {
        console.error('Error obteniendo empresas', error);
      }
    };

    loadEmpresas();
  }, []);

  const handleApprove = async (empresaId) => {
    try {
      await approveEmpresa(empresaId);
      setEmpresas(prevEmpresas => prevEmpresas.filter(empresa => empresa._id !== empresaId));
    } catch (error) {
      console.error('Error approving empresa:', error);
    }
  };

  return (
    <Card>
        <Card.Body>
            <Card.Subtitle>Aprobación de solicitudes</Card.Subtitle>
        </Card.Body>
        <ul className="requests-list">
          {empresas.map((empresa) => (
            <li key={empresa._id} className="request-item">
              {empresa.nameEmpresa}
              <div className="request-buttons">
                <button
                  className="request-button approve-button"
                  onClick={() => handleApprove(empresa._id)}
                >
                  Aprobar
                </button>
                <button className="request-button cancel-button">
                  Cancelar
                </button>
              </div>
            </li>
          ))}
        </ul>
    </Card>
  );
};

export default ListadoUsuarios;