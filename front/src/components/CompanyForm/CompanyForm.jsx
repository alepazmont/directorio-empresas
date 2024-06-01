import { useState } from 'react';
import axios from 'axios';
import './CompanyForm.css';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    contact: '',
    photos: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photos: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('contact', formData.contact);
    Array.from(formData.photos).forEach((file) => {
      data.append('photos', file);
    });

    try {
      await axios.post('/api/companies', data);
      alert('Company registered successfully');
    } catch (error) {
      console.error('Error registering company', error);
    }
  };

  return (
    <form className="company-form" onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Descripción:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Contacto:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
      </div>
      <div>
        <label>Fotos:</label>
        <input type="file" name="photos" multiple onChange={handleFileChange} />
      </div>
      <button type="submit">Registrar Empresa</button>
    </form>
  );
};

export default CompanyForm;
