import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CompanyPage.css';

const CompanyPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`/api/companies/${id}`);
        setCompany(response.data);
      } catch (error) {
        console.error('Error fetching company data', error);
      }
    };

    fetchCompany();
  }, [id]);

  if (!company) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="seccion-empresa-individual">
    <h2>Crear empresa</h2>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <p className="contact">Contacto: {company.contact}</p>
      <div className="photos">
        {company.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Company ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
