/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Map from '../components/Map/Map';
import './HomePage.css';
import Directorio from '../components/Directorio/Directorio';

const HomePage = () => {
  const [locations, setLocations] = useState([]);

  return (
    <div className="seccion-inicio">
    <h2>Inicio</h2>
      <div className="map-container">
        <Map locations={locations} />
      </div>
          <Directorio />
    </div>
  );
};

export default HomePage;
