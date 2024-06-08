import axios from 'axios';
import { apiUrl } from './ApiUrl/apiUrl';

const getAuthToken = () => {
  return localStorage.getItem('token'); // O la clave donde estés guardando el token
};

export const fetchEmpresas = async () => {
  try {
    const route = "/empresas";
    const response = await axios.get(apiUrl + route);
    return response.data.data;
  } catch (error) {
    console.error('Error obteniendo empresas', error);
    throw error;
  }
};

export const approveEmpresa = async (empresaId) => {
  try {
    const response = await axios.patch(`${apiUrl}/empresas/${empresaId}`, { aprobada: true }, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error approving empresa:', error);
    throw error;
  }
};