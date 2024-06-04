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
