import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import "./Perfil.css";
import Container from "react-bootstrap/esm/Container";

const Perfil = () => {
  return (
    <div className="body">
      <Container>
        <BreadCrumb page="Perfil" />
      </Container>
    </div>
  );
};

export default Perfil;
