import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getCompanies = () => api.get('/companies');
export const getCompany = (id) => api.get(`/companies/${id}`);
export const createCompany = (data) => api.post('/companies', data);
export const approveCompany = (id) => api.post(`/companies/${id}/approve`);
export const rejectCompany = (id) => api.post(`/companies/${id}/reject`);
