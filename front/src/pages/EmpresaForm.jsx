import { useState, useRef } from "react";
import axios from "axios";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { apiUrl } from "../services/ApiUrl/apiUrl";
import "./EmpresaForm.scss";

const FormularioEmpresa = () => {
  const [formData, setFormData] = useState({
    nameEmpresa: "",
    categoria: "",
    prodServ: "Productos",
    listaProd: "",
    listaServ: "",
    logo: null,
    logoPreview: null,
    galeriaFotos: [],
    direccion: "",
    codigoPostal: "",
    paradaMetro: "",
    locMapa: "",
    telefono: "",
    email: "",
    web: "",
    redes: [],
    condiciones: false,
  });

  const [fileInputs, setFileInputs] = useState([{ id: Date.now(), url: "" }]);
  const [socialInputs, setSocialInputs] = useState([
    { id: Date.now(), platform: "", url: "" },
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (index === "logo") {
      setFormData({
        ...formData,
        logo: file,
        logoPreview: URL.createObjectURL(file),
      });
    } else {
      const newGaleriaFotos = [...formData.galeriaFotos];
      newGaleriaFotos[index] = file;
      const newFileInputs = [...fileInputs];
      newFileInputs[index].url = URL.createObjectURL(file);
      setFormData({ ...formData, galeriaFotos: newGaleriaFotos });
      setFileInputs(newFileInputs);
    }
  };

  const handleAddFileInput = () => {
    setFileInputs([...fileInputs, { id: Date.now(), url: "" }]);
  };

  const handleRemoveFile = (index) => {
    const newGaleriaFotos = formData.galeriaFotos.filter((_, i) => i !== index);
    const newFileInputs = fileInputs.filter((_, i) => i !== index);

    setFormData({ ...formData, galeriaFotos: newGaleriaFotos });
    setFileInputs(
      newFileInputs.length > 0 ? newFileInputs : [{ id: Date.now(), url: "" }]
    );
  };

  const handleSocialChange = (e, index) => {
    const { name, value } = e.target;
    const newSocialInputs = [...socialInputs];
    newSocialInputs[index][name] = value;
    setSocialInputs(newSocialInputs);
  };

  const handleAddSocialInput = () => {
    setSocialInputs([
      ...socialInputs,
      { id: Date.now(), platform: "", url: "" },
    ]);
  };

  const handleRemoveSocial = (index) => {
    const newSocialInputs = socialInputs.filter((_, i) => i !== index);
    setSocialInputs(
      newSocialInputs.length > 0
        ? newSocialInputs
        : [{ id: Date.now(), platform: "", url: "" }]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
  
    for (const key in formData) {
      if (key === "listaProd" || key === "listaServ") {
        const arrayValue = formData[key]
          .split(',')
          .map(item => item.trim()) // Eliminar espacios adicionales
          .filter(item => item !== ''); // Eliminar elementos vacíos
        data.append(key, arrayValue);
      } else if (key === "galeriaFotos") {
        formData.galeriaFotos.forEach((file, index) => {
          data.append(`galeriaFotos[${index}]`, file);
        });
      } else if (key === "redes") {
        formData.redes.forEach((red, index) => {
          data.append(`redes[${index}][platform]`, red.platform);
          data.append(`redes[${index}][url]`, red.url);
        });
      } else {
        data.append(key, formData[key]);
      }
    }
  
    try {
      await axios.post(`${apiUrl}/empresas/register`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Reset form after submission
      setFormData({
        nameEmpresa: "",
        categoria: "",
        prodServ: "Productos",
        listaProd: "",
        listaServ: "",
        logo: null,
        logoPreview: null,
        galeriaFotos: [],
        direccion: "",
        codigoPostal: "",
        paradaMetro: "",
        locMapa: "",
        telefono: "",
        email: "",
        web: "",
        redes: [],
        condiciones: false,
      });
      setFileInputs([{ id: Date.now(), url: "" }]);
      setSocialInputs([{ id: Date.now(), platform: "", url: "" }]);
    } catch (error) {
      console.error("Error al crear la empresa", error);
    }
  };
  

  const moveItem = (dragIndex, hoverIndex, type) => {
    const newItems = type === "file" ? [...fileInputs] : [...socialInputs];
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);

    if (type === "file") {
      setFileInputs(newItems);
      const newGaleriaFotos = [...formData.galeriaFotos];
      const [draggedFile] = newGaleriaFotos.splice(dragIndex, 1);
      newGaleriaFotos.splice(hoverIndex, 0, draggedFile);
      setFormData({ ...formData, galeriaFotos: newGaleriaFotos });
    } else {
      setSocialInputs(newItems);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
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
            <label htmlFor="prodServ">Productos o Servicios:</label>
            <select
              id="prodServ"
              name="prodServ"
              value={formData.prodServ}
              onChange={handleChange}
            >
              <option value="">Seleccione una opción</option>
              <option value="Productos">Productos</option>
              <option value="Servicios">Servicios</option>
              <option value="Ambos">Ambos</option>
            </select>
          </div>

          {formData.prodServ !== "Servicios" && (
            <div>
              <label htmlFor="listaProd">Lista de Productos:</label>
              <p className="mb-1 sublabel">Separa tus productos por comas</p>
              <input
                type="text"
                id="listaProd"
                name="listaProd"
                value={formData.listaProd}
                onChange={handleChange}
                required={formData.prodServ === "Productos" || formData.prodServ === "Ambos"}
              />
            </div>
          )}

          {formData.prodServ !== "Productos" && (
            <div>
              <label htmlFor="listaServ">Lista de Servicios:</label>
              <p className="mb-1 sublabel">Separa tus servicios por comas</p>
              <input
                type="text"
                id="listaServ"
                name="listaServ"
                value={formData.listaServ}
                onChange={handleChange}
                required={formData.prodServ === "Servicios" || formData.prodServ === "Ambos"}
              />
            </div>
          )}

          <div>
            <label htmlFor="logo">Logo:</label>
            <div className="logo-upload">
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={(e) => handleFileChange(e, "logo")}
                required
              />
              {formData.logoPreview && (
                <div className="image-preview">
                  <img src={formData.logoPreview} alt="Logo preview" />
                </div>
              )}
            </div>
          </div>

          <div className="array-input">
            <label htmlFor="galeriaFotos" className="m-0">Galería de Fotos:</label>
            <p className="mb-1 sublabel">Ordena la galería de fotos arrastrando los elementos</p>
            {fileInputs.map((fileInput, index) => (
              <FileInput
                key={fileInput.id}
                id={fileInput.id}
                index={index}
                fileInput={fileInput}
                handleFileChange={handleFileChange}
                handleRemoveFile={handleRemoveFile}
                moveItem={moveItem}
              />
            ))}
            <button type="button" onClick={handleAddFileInput}>
              Añadir otra imagen
            </button>
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
            {socialInputs.map((socialInput, index) => (
              <SocialInput
                key={socialInput.id}
                id={socialInput.id}
                index={index}
                socialInput={socialInput}
                handleSocialChange={handleSocialChange}
                handleRemoveSocial={handleRemoveSocial}
                moveItem={moveItem}
              />
            ))}
            <button type="button" onClick={handleAddSocialInput}>
              Añadir otra red social
            </button>
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
    </DndProvider>
  );
};

const FileInput = ({
  id,
  index,
  fileInput,
  handleFileChange,
  handleRemoveFile,
  moveItem,
}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "file",
    hover: (item) => {
      if (item.index !== index) {
        moveItem(item.index, index, "file");
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "file",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={ref} className="file-input" style={{ opacity }}>
      <input
        type="file"
        id={`galeriaFoto-${index}`}
        name={`galeriaFoto-${index}`}
        onChange={(e) => handleFileChange(e, index)}
      />
      {fileInput.url && (
        <>
          <div className="image-preview">
            <img src={fileInput.url} alt={`preview-${index}`} />
          </div>
          <button
            type="button"
            className="remove-button"
            onClick={() => handleRemoveFile(index)}
          >
            &times;
          </button>
        </>
      )}
    </div>
  );
};

const SocialInput = ({
  id,
  index,
  socialInput,
  handleSocialChange,
  handleRemoveSocial,
  moveItem,
}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "social",
    hover: (item) => {
      if (item.index !== index) {
        moveItem(item.index, index, "social");
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "social",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={ref} className="social-input" style={{ opacity }}>
      <div className="create-red">
        <div className="redSocial">
          <select
            name="platform"
            value={socialInput.platform}
            onChange={(e) => handleSocialChange(e, index)}
          >
            <option value="">Seleccione una red social</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>
          <input
            type="url"
            name="url"
            value={socialInput.url}
            placeholder="URL"
            onChange={(e) => handleSocialChange(e, index)}
          />
        </div>
        {socialInput.url && (
          <button
            type="button"
            className="remove-button"
            onClick={() => handleRemoveSocial(index)}
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default FormularioEmpresa;
