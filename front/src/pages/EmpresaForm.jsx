import { useState } from "react";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import { apiUrl } from "../services/ApiUrl/apiUrl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Alert from 'react-bootstrap/Alert';


const FormularioEmpresa = () => {
  const [formData, setFormData] = useState({
    nameEmpresa: "",
    categoria: "",
    prodServ: "Productos",
    listaProd: [],
    listaServ: [],
    logo: null,
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

  const [fileInputs, setFileInputs] = useState([{ id: Date.now() }]);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e, index) => {
    const files = Array.from(e.target.files);
    const newGaleriaFotos = [...formData.galeriaFotos];
    newGaleriaFotos[index] = files[0];
    setFormData({ ...formData, galeriaFotos: newGaleriaFotos });
  };

  const handleRemoveFile = (index) => {
    const newGaleriaFotos = formData.galeriaFotos.filter((_, i) => i !== index);
    const newFileInputs = fileInputs.filter((_, i) => i !== index);

    setFormData({ ...formData, galeriaFotos: newGaleriaFotos });
    setFileInputs(
      newFileInputs.length > 0 ? newFileInputs : [{ id: Date.now() }]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === "galeriaFotos") {
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
          "Content-Type": "multipart/form-data",
        },
      });
      // Reset form after submission
      setFormData({
        nameEmpresa: "",
        categoria: "",
        prodServ: "Productos",
        listaProd: [],
        listaServ: [],
        logo: null,
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
      setFileInputs([{ id: Date.now() }]);

      setAlertMessage("Empresa pendiente de validación.");
      setAlertVariant("success");
      setShowAlert(true);
    } catch (error) {
      console.error("Error al crear la empresa", error);
      setAlertMessage("Empresa no creada correctamente.");
      setAlertVariant("danger");
      setShowAlert(true);
    }
  };

  const [pages] = useState([
    {link: '/admin', page: 'Panel de administración' },
    {link: '', page: 'Registra tu empresa' }
  ]);

  return (
    <>
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
			
            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="nameEmpresa">
                <Form.Label>Nombre de la Empresa:</Form.Label>
                <Form.Control
                  type="text"
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
                >
                  <option value="Productos">Productos</option>
                  <option value="Servicios">Servicios</option>
                  <option value="Ambos">Ambos</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="logo">
                <Form.Label>Logo</Form.Label>
                <Form.Control
                  type="file"
                  name="logo"
                  onChange={(e) =>
                    setFormData({ ...formData, logo: e.target.files[0] })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 array-input" controlId="prodServ">
                <Form.Label>Galeria de Fotos</Form.Label>
                {fileInputs.map((fileInput, index) => (
                  <div key={fileInput.id} className="d-flex">
                    <Form.Control
                      type="file"
                      name={`galeriaFoto-${index}`}
                      onChange={(e) => handleFileChange(e, index)}
						multiple
                    />

					
					{formData.galeriaFotos && formData.galeriaFotos.length > 0 && (
						<Button
							type="button"
							variant="danger"
							className="btn mt-2"
							onClick={() => handleRemoveFile(index)}
						>
							Eliminar
					</Button>
					)}
                  </div>
                ))}
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
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="locMapa">
                <Form.Label>Ubicación en el Mapa</Form.Label>
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
                <Form.Label>Web</Form.Label>
                <Form.Control
                  type="url"
                  name="web"
                  value={formData.web}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3 array-input" controlId="redes">
                <Form.Label>Redes Sociales</Form.Label>
                <Form.Control
                  type="text"
                  name="redes"
                  value={formData.redes}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="condiciones">
                <Form.Check
                  type="checkbox"
                  name="condiciones"
                  label="Acepto los términos y condiciones"
                  checked={formData.condiciones}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Crear Empresa
              </Button>
            </Form>
			</Col>
			</Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default FormularioEmpresa;
