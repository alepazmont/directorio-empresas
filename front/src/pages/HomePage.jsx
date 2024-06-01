import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Map from '../components/Map/Map';
import './HomePage.css';

const HomePage = () => {
  const [locations, setLocations] = useState([]);

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
    <div className="home-page">
      <h1>Bienvenido a EmpresasYa!</h1>
      <Link to="/companies/new">Registra tu nueva empresa</Link>
      <Link to="/admin">Panel de Administración</Link>
      <Link to="/user">Panel de Usuario</Link>
      <div className="map-container">
        <Map locations={locations} />
      </div>
    </div>
  );
};

export default HomePage;
