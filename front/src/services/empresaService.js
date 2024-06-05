import axios from 'axios';
import { apiUrl } from './ApiUrl/apiUrl';

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
    const response = await axios.patch(`${apiUrl}/empresas/${empresaId}`, { aprobada: true });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error approving empresa:', error);
    throw error;
  }
};