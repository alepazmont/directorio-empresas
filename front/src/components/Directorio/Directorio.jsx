import './Directorio.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from "../ApiUrl/apiUrl";

const Directorio = () => {
  const [empresas, setEmpresas] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const route = "/empresas";
        const response = await axios.get(apiUrl + route);       
        setEmpresas(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error obteniendo empresas', error);
      }
    };
    
    fetchEmpresas();
  }, []);

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setEmpresas((prevEmpresas) => {
      return [...prevEmpresas].sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === 'ascending' ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? 'fas fa-sort-up' : 'fas fa-sort-down';
    }
    return 'fas fa-sort';
  };

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
        <thead>
          <tr>
            <th>Logotipo</th>
            <th onClick={() => sortData('nameEmpresa')}>
              Nombre <i className={getSortIcon('nameEmpresa')}></i>
            </th>
            <th onClick={() => sortData('categoria')}>
              Categoría <i className={getSortIcon('categoria')}></i>
            </th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Web</th>
            <th>Ver en el mapa</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmpresas.map((empresa, index) => (
            <tr key={index}>
            <td><a href={`/empresa/${empresa._id}`}><img src={empresa.logo} alt={empresa.nameEmpresa} className="logo-empresa" /></a></td>
              <td><a href={`/empresa/${empresa._id}`}>{empresa.nameEmpresa}</a></td>
              <td>{empresa.categoria}</td>
              <td>{empresa.direccion}</td>
              <td>{empresa.telefono}</td>
              <td>{empresa.correo}</td>
              <td><a href={empresa.web} target="_blank" rel="noopener noreferrer">Web</a></td>
              <td><a href={`https://maps.google.com/?q=${empresa.direccion}`} target="_blank" rel="noopener noreferrer">Ver en el mapa</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Directorio;
