import { useState, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { createEmpresa } from "../services/empresaService";

const ItemType = {
  FILE: "file",
  SOCIAL: "social",
};

const DraggableFileInput = ({ id, index, moveFileInput, handleFileChange, handleRemoveFile, url }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemType.FILE,
    hover(item) {
      if (item.index !== index) {
        moveFileInput(item.index, index, "file");
        item.index = index;
      }
    },
  });

  const [, drag] = useDrag({
    type: ItemType.FILE,
    item: { id, index },
  });

  drag(drop(ref));

  return (
    <div ref={ref} style={{ marginBottom: "10px" }}>
      <Form.Control
        type="file"
        accept="image/*"
        onChange={(e) => handleFileChange(e, index)}
      />
      {url && (
        <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
          <img src={url} alt="Preview" style={{ maxWidth: "100px", marginRight: "10px" }} />
          <Button variant="danger" onClick={() => handleRemoveFile(index)}>
            Eliminar
          </Button>
        </div>
      )}
    </div>
  );
};

const DraggableSocialInput = ({ id, index, moveSocialInput, handleSocialChange, handleRemoveSocial, platform, url }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemType.SOCIAL,
    hover(item) {
      if (item.index !== index) {
        moveSocialInput(item.index, index, "social");
        item.index = index;
      }
    },
  });

  const [, drag] = useDrag({
    type: ItemType.SOCIAL,
    item: { id, index },
  });

  drag(drop(ref));

  return (
    <div ref={ref} style={{ marginBottom: "10px" }}>
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="platform"
            placeholder="Plataforma"
            value={platform}
            onChange={(e) => handleSocialChange(e, index)}
          />
        </Col>
        <Col>
          <Form.Control
            type="url"
            name="url"
            placeholder="URL"
            value={url}
            onChange={(e) => handleSocialChange(e, index)}
          />
        </Col>
        <Col xs="auto">
          <Button variant="danger" onClick={() => handleRemoveSocial(index)}>
            Eliminar
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const FormularioEmpresa = () => {
  const [formData, setFormData] = useState({
    nameEmpresa: "",
    categoria: "",
    prodServ: "",
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

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (index === "logo") {
      setFormData((prevState) => ({
        ...prevState,
        logo: file,
        logoPreview: URL.createObjectURL(file),
      }));
    } else {
      const newGaleriaFotos = [...formData.galeriaFotos];
      newGaleriaFotos[index] = file;
      const newFileInputs = [...fileInputs];
      newFileInputs[index].url = URL.createObjectURL(file);
      setFormData((prevState) => ({ ...prevState, galeriaFotos: newGaleriaFotos }));
      setFileInputs(newFileInputs);
    }
  };

  const handleRemoveFile = (index) => {
    const newGaleriaFotos = formData.galeriaFotos.filter((_, i) => i !== index);
    const newFileInputs = fileInputs.filter((_, i) => i !== index);

    setFormData((prevState) => ({ ...prevState, galeriaFotos: newGaleriaFotos }));
    setFileInputs(newFileInputs.length > 0 ? newFileInputs : [{ id: Date.now(), url: "" }]);
  };

  const handleSocialChange = (e, index) => {
    const { name, value } = e.target;
    const newSocialInputs = [...socialInputs];
    newSocialInputs[index][name] = value;
    setSocialInputs(newSocialInputs);
  };

  const handleAddSocialInput = () => {
    setSocialInputs((prevState) => [...prevState, { id: Date.now(), platform: "", url: "" }]);
  };

  const handleRemoveSocial = (index) => {
    const newSocialInputs = socialInputs.filter((_, i) => i !== index);
    setSocialInputs(newSocialInputs.length > 0 ? newSocialInputs : [{ id: Date.now(), platform: "", url: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      if (key === "listaProd" || key === "listaServ") {
        const arrayValue = formData[key]
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== "");
        data.append(key, JSON.stringify(arrayValue));
      } else if (key === "galeriaFotos") {
        formData.galeriaFotos.forEach((file, index) => {
          data.append(`galeriaFotos[${index}]`, file);
        });
      } else if (key === "redes") {
        socialInputs.forEach((red, index) => {
          data.append(`redes[${index}][platform]`, red.platform);
          data.append(`redes[${index}][url]`, red.url);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      await createEmpresa(data);

      setFormData({
        nameEmpresa: "",
        categoria: "",
        prodServ: "",
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

      setAlertMessage("Empresa pendiente de validación.");
      setAlertVariant("success");
      setShowAlert(true);
    } catch (error) {
      console.error("Error al crear la empresa", error);
      setAlertMessage("Error al crear la empresa. Inténtelo de nuevo.");
      setAlertVariant("danger");
      setShowAlert(true);
    }
  };

  const moveFileInput = (dragIndex, hoverIndex) => {
    const newFileInputs = [...fileInputs];
    const [draggedFile] = newFileInputs.splice(dragIndex, 1);
    newFileInputs.splice(hoverIndex, 0, draggedFile);
    setFileInputs(newFileInputs);

    const newGaleriaFotos = [...formData.galeriaFotos];
    const [draggedFoto] = newGaleriaFotos.splice(dragIndex, 1);
    newGaleriaFotos.splice(hoverIndex, 0, draggedFoto);
    setFormData((prevState) => ({ ...prevState, galeriaFotos: newGaleriaFotos }));
  };

  const moveSocialInput = (dragIndex, hoverIndex) => {
    const newSocialInputs = [...socialInputs];
    const [draggedSocial] = newSocialInputs.splice(dragIndex, 1);
    newSocialInputs.splice(hoverIndex, 0, draggedSocial);
    setSocialInputs(newSocialInputs);
    };
    
    const [pages] = useState([
    { link: "/admin", page: "Panel de administración" },
    { link: "", page: "Registra tu empresa" },
    ]);
    
    return (
    <DndProvider backend={HTML5Backend}>
    <div className="landing-page">
    <div className="content">
    <Container>
    <BreadCrumb pages={pages} />
    <Row>
    <Col lg={6} xs={12}>
    {showAlert && (
    <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
    {alertMessage}
    </Alert>
    )}
    
    <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre de la Empresa:</Form.Label>
                <Form.Control
                  type="text"
                  id="nameEmpresa"
                  name="nameEmpresa"
                  value={formData.nameEmpresa}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="categoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                  type="text"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="prodServ">
                <Form.Label>Producto o Servicio</Form.Label>
                <Form.Select
                  name="prodServ"
                  value={formData.prodServ}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Productos">Productos</option>
                  <option value="Servicios">Servicios</option>
                  <option value="Ambos">Ambos</option>
                </Form.Select>
              </Form.Group>

              {(formData.prodServ === "Productos" || formData.prodServ === "Ambos") && (
                <Form.Group className="mb-3" controlId="listaProd">
                  <Form.Label>Lista de Productos (separados por comas)</Form.Label>
                  <Form.Control
                    type="text"
                    name="listaProd"
                    value={formData.listaProd}
                    onChange={handleChange}
                  />
                </Form.Group>
              )}

              {(formData.prodServ === "Servicios" || formData.prodServ === "Ambos") && (
                <Form.Group className="mb-3" controlId="listaServ">
                  <Form.Label>Lista de Servicios (separados por comas)</Form.Label>
                  <Form.Control
                    type="text"
                    name="listaServ"
                    value={formData.listaServ}
                    onChange={handleChange}
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3" controlId="logo">
                <Form.Label>Logo</Form.Label>
                <div className="logo-upload">
                  <Form.Control
                    type="file"
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
              </Form.Group>

              <Form.Group className="mb-3 array-input">
                <Form.Label>Galeria de Fotos</Form.Label>
                <p className="mb-1 sublabel">Ordena la galería de fotos arrastrando los elementos</p>
                {fileInputs.map((fileInput, index) => (
                  <DraggableFileInput
                    key={fileInput.id}
                    id={fileInput.id}
                    index={index}
                    url={fileInput.url}
                    handleFileChange={handleFileChange}
                    handleRemoveFile={handleRemoveFile}
                    moveFileInput={moveFileInput}
                  />
                ))}
                <Button
                  type="button"
                  className="array-action-btn"
                  onClick={() => setFileInputs([...fileInputs, { id: Date.now(), url: "" }])}
                >
                  Añadir Foto
                </Button>
              </Form.Group>

              <Form.Group className="mb-3" controlId="direccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="codigoPostal">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  name="codigoPostal"
                  value={formData.codigoPostal}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="paradaMetro">
                <Form.Label>Parada de Metro</Form.Label>
                <Form.Control
                  type="text"
                  name="paradaMetro"
                  value={formData.paradaMetro}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="locMapa">
                <Form.Label>Localización en el Mapa</Form.Label>
                <Form.Control
                  type="text"
                  name="locMapa"
                  value={formData.locMapa}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="web">
                <Form.Label>Sitio web</Form.Label>
                <Form.Control
                  type="text"
                  name="web"
                  value={formData.web}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 array-input">
                <Form.Label>Redes Sociales</Form.Label>
                {socialInputs.map((socialInput, index) => (
                  <DraggableSocialInput
                    key={socialInput.id}
                    id={socialInput.id}
                    index={index}
                    platform={socialInput.platform}
                    url={socialInput.url}
                    handleSocialChange={handleSocialChange}
                    handleRemoveSocial={handleRemoveSocial}
                    moveSocialInput={moveSocialInput}
                  />
                ))}
                <Button
                  type="button"
                  className="array-action-btn"
                  onClick={handleAddSocialInput}
                >
                  Añadir Red Social
                </Button>
              </Form.Group>

              <Form.Group className="mb-3" controlId="condiciones">
                <Form.Check
                  type="checkbox"
                  name="condiciones"
                  checked={formData.condiciones}
                  onChange={handleChange}
                  label="Acepto los términos y condiciones"
                  required
                />
              </Form.Group>

              <Button type="submit" className="request-button approve-button">
                Registrar Empresa
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
</DndProvider>    

  );
};

export default FormularioEmpresa;
