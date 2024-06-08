import axios from 'axios';
import { apiUrl } from './ApiUrl/apiUrl';

// Función para obtener el token desde el localStorage
const getToken = () => localStorage.getItem('token');

export const fetchEmpresas = async () => {
  try {
    const token = getToken();
    const route = "/empresas";
    const response = await axios.get(apiUrl + route, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error obteniendo empresas', error);
    throw error;
  }
};

export const approveEmpresa = async (empresaId) => {
  try {
    const token = getToken();
    const response = await axios.patch(`${apiUrl}/empresas/${empresaId}`, 
    { aprobada: true }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error approving empresa:', error);
    throw error;
  }
};
