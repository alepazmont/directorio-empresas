import './Directorio.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from "../ApiUrl/apiUrl";


const Directorio = () => {
    const [empresas, setEmpresas] = useState([]);

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



  return (
    <>
            <div className="empresas-lista">
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
          </div>
    </>
  )
}

export default Directorio
