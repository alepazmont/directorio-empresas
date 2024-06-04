/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Map from '../components/Map/Map';
import axios from 'axios';
import Directorio from '../components/Directorio/Directorio';
import './ListaEmpresas.css';


const ListaEmpresas = () => {
/*     const [locations, setLocations] = useState([]);

  
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
    }, []); */
  
    return (
      <div className="seccion-empresas">
        <h2>Directorio de Empresas</h2>
{/*         <div className="map-container">
          <Map locations={locations} />
        </div> */}
            <Directorio />
      </div>
    );
  };

export default ListaEmpresas
