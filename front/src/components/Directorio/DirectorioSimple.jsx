import './Directorio.css';
import { useEffect, useState } from 'react';
import { fetchEmpresas } from '../../services/empresaService';

const DirectorioSimple = () => {
    const [empresas, setEmpresas] = useState([]);
    const [categoriaFiltro, setCategoriaFiltro] = useState('');
  
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
  
    
  
    const filteredEmpresas = categoriaFiltro
      ? empresas.filter(empresa => empresa.categoria === categoriaFiltro)
      : empresas;
  
    return (
      <div className="directorio-container">
        <div className="filter-container">
          <label htmlFor="categoria">Filtrar por categoría:</label>
          <select id="categoria" value={categoriaFiltro} onChange={(e) => setCategoriaFiltro(e.target.value)}>
            <option value="">Todas</option>
            {[...new Set(empresas.map(empresa => empresa.categoria))].map(categoria => (
              <option key={categoria} value={categoria}>{categoria}</option>
            ))}
          </select>
        </div>
        <table className="directorio-tabla">
          <tbody>
            {filteredEmpresas.map((empresa, index) => (
              <tr key={index}>
                <td><a href={`/empresa/${empresa._id}`}><img src={empresa.logo} alt={empresa.nameEmpresa} className="logo-empresa" /></a></td>
                <td><a href={`/empresa/${empresa._id}`}>{empresa.nameEmpresa}</a></td>
                <td>{empresa.categoria}</td>
                <td>{empresa.direccion}</td>
                <td>{empresa.telefono.join(" ")}</td>
                <td><a href={`mailto:${empresa.email}`}>{empresa.email}</a></td>
                <td><a href={empresa.web} target="_blank" rel="noopener noreferrer">Visitar</a></td>
                <td><a href={`https://maps.google.com/?q=${empresa.direccion}`} target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-map"></i></a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default DirectorioSimple
