import { useEffect, useState } from 'react';
import axios from 'axios';
import Map from '../components/Map/Map';
import './HomePage.css';
import Directorio from '../components/Directorio/Directorio';
/* import { apiUrl } from "../components/ApiUrl/apiUrl";
 */
const HomePage = () => {
  const [locations, setLocations] = useState([]);
  /* const [empresas, setEmpresas] = useState([]);

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
  }, []); */

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/api/companies');
        const locs = response.data.map(company => ({
          lat: company.latitude,
          lng: company.longitude,
        }));
        setLocations(locs);
      } catch (error) {
        console.error('Error fetching company locations', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="seccion-inicio">
    <h2>Inicio</h2>
      <div className="map-container">
        <Map locations={locations} />
      </div>
{/*       <div className="empresas-lista">
            {empresas.map((empresa, index) => (
              <div className="card-empresas-inicio" key={index}>
                <img src={empresa.logo} alt={empresa.nameEmpresa} />
                <div className="card-empresas-inicio-content">
                  <h3>{empresa.nameEmpresa}</h3>
                  <p className="categoria-empresa">Categoría: {empresa.categoria}</p>
                  <p className="direccion-empresa">{empresa.direccion}, CP: {empresa.codigoPostal}</p>
                </div>
              </div>
            ))}
          </div> */}
          <Directorio />
    </div>
  );
};

export default HomePage;
