import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Directorio from "../components/Directorio/Directorio";
import "./ListaEmpresas.css";
import Container from "react-bootstrap/esm/Container";

const ListaEmpresas = () => {
  return (
    <div className="body">
      <Container>
        <BreadCrumb page="Directorio de empresas" />
        <Directorio />
      </Container>
    </div>
  );
};

export default ListaEmpresas;
