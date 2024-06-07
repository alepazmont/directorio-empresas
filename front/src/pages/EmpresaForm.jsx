import { useState } from 'react';
import axios from 'axios';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { apiUrl } from '../services/ApiUrl/apiUrl';
import './EmpresaForm.scss';

const FormularioEmpresa = () => {
  const [formData, setFormData] = useState({
    nameEmpresa: '',
    categoria: '',
    prodServ: 'Productos',
    listaProd: [],
    listaServ: [],
    logo: null,
    galeriaFotos: [],
    direccion: '',
    codigoPostal: '',
    paradaMetro: '',
    locMapa: '',
    telefono: '',
    email: '',
    web: '',
    redes: [],
    condiciones: false,
  });

  const [fileInputs, setFileInputs] = useState([{ id: Date.now() }]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e, index) => {
    const files = Array.from(e.target.files);
    const newGaleriaFotos = [...formData.galeriaFotos];
    newGaleriaFotos[index] = files[0];
    setFormData({ ...formData, galeriaFotos: newGaleriaFotos });
  };

  const handleAddFileInput = () => {
    setFileInputs([...fileInputs, { id: Date.now() }]);
  };

  const handleRemoveFile = (index) => {
    const newGaleriaFotos = formData.galeriaFotos.filter((_, i) => i !== index);
    const newFileInputs = fileInputs.filter((_, i) => i !== index);

    setFormData({ ...formData, galeriaFotos: newGaleriaFotos });
    setFileInputs(newFileInputs.length > 0 ? newFileInputs : [{ id: Date.now() }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === 'galeriaFotos') {
        formData.galeriaFotos.forEach((file, index) => {
          data.append(`galeriaFotos[${index}]`, file);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      await axios.post(`${apiUrl}/empresas/register`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Reset form after submission
      setFormData({
        nameEmpresa: '',
        categoria: '',
        prodServ: 'Productos',
        listaProd: [],
        listaServ: [],
        logo: null,
        galeriaFotos: [],
        direccion: '',
        codigoPostal: '',
        paradaMetro: '',
        locMapa: '',
        telefono: '',
        email: '',
        web: '',
        redes: [],
        condiciones: false,
      });
      setFileInputs([{ id: Date.now() }]);
    } catch (error) {
      console.error('Error al crear la empresa', error);
    }
  };

  return (
    <>
      <div className="container">
        <BreadCrumb page="Registra tu empresa" />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nameEmpresa">Nombre de la Empresa:</label>
            <input
              type="text"
              id="nameEmpresa"
              name="nameEmpresa"
              value={formData.nameEmpresa}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="categoria">Categoría:</label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="prodServ">Producto o Servicio:</label>
            <select
              id="prodServ"
              name="prodServ"
              value={formData.prodServ}
              onChange={handleChange}
            >
              <option value="Productos">Productos</option>
              <option value="Servicios">Servicios</option>
              <option value="Ambos">Ambos</option>
            </select>
          </div>

          <div>
            <label htmlFor="logo">Logo:</label>
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={(e) =>
                setFormData({ ...formData, logo: e.target.files[0] })
              }
              required
            />
          </div>

          <div className="array-input">
            <label htmlFor="galeriaFotos">Galería de Fotos:</label>
            {fileInputs.map((fileInput, index) => (
              <div key={fileInput.id} className="file-input">
                <input
                  type="file"
                  id={`galeriaFoto-${index}`}
                  name={`galeriaFoto-${index}`}
                  onChange={(e) => handleFileChange(e, index)}
                />
                {formData.galeriaFotos[index] && (
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => handleRemoveFile(index)}
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
            {formData.galeriaFotos.length > 0 && (
              <button type="button" onClick={handleAddFileInput}>
                Añadir otra imagen
              </button>
            )}
          </div>

          <div>
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="codigoPostal">Código Postal:</label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="paradaMetro">Parada de Metro:</label>
            <input
              type="text"
              id="paradaMetro"
              name="paradaMetro"
              value={formData.paradaMetro}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="locMapa">Ubicación en el Mapa:</label>
            <input
              type="text"
              id="locMapa"
              name="locMapa"
              value={formData.locMapa}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="web">Web:</label>
            <input
              type="url"
              id="web"
              name="web"
              value={formData.web}
              onChange={handleChange}
            />
          </div>

          <div className="array-input">
            <label htmlFor="redes">Redes Sociales:</label>
            <input
              type="text"
              id="redes"
              name="redes"
              value={formData.redes}
              onChange={handleChange}
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="condiciones"
              name="condiciones"
              checked={formData.condiciones}
              onChange={handleChange}
              required
            />
            <label htmlFor="condiciones">
              Acepto los términos y condiciones
            </label>
          </div>

          <button type="submit">Crear Empresa</button>
        </form>
      </div>
    </>
  );
};

export default FormularioEmpresa;
