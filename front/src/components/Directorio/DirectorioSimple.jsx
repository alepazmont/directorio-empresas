/* eslint-disable no-unused-vars */
import './Directorio.css';
import { useEffect, useState } from 'react';
import { fetchEmpresas } from '../../services/empresaService';

const DirectorioSimple = () => {
    const [empresas, setEmpresas] = useState([]);
  
    useEffect(() => {
      const loadEmpresas = async () => {
        try {
          const empresasData = await fetchEmpresas();
          // Filtrar empresas aprobadas antes de establecer el estado
          const empresasAprobadas = empresasData.filter(empresa => empresa.aprobada);
          setEmpresas(empresasAprobadas);
        } catch (error) {
          console.error('Error obteniendo empresas', error);
        }
      };
  
      loadEmpresas();
    }, []);
  
    return (
      <div className="directorio-container">
        <table className="directorio-tabla">
          <tbody>
            {empresas.map((empresa, index) => (
              <tr key={index}>
                <td><a href={`/empresa/${empresa._id}`}>{empresa.nameEmpresa}</a></td>
                <td>{empresa.categoria}</td>
                <td>{empresa.direccion}</td>
                <td><a href={`/empresa/${empresa._id}`}>Ver empresa</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default DirectorioSimple
