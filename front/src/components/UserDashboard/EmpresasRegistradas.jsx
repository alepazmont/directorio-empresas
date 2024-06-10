import { useContext } from "react";
import Card from "react-bootstrap/Card"
import UserContext from "../../context/UserContext";

const EmpresasRegistradas = () => {

  const { user } = useContext(UserContext);
  const usuario = user.data.user;

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Subtitle>Empresas registradas</Card.Subtitle>
        <Card.Body>
          <p ><b>Nombre Completo:</b> {usuario.nombre} {usuario.apellido}</p>
          <p ><b>Teléfono:</b> {usuario.telefono}</p>
          <p ><b>Email:</b> {usuario.email}</p>
          <p ><b>Tipo de usuario:</b> {usuario.tipoUsuario}</p>
        </Card.Body>
      </Card.Body>

    </Card>
  )
}

export default EmpresasRegistradas