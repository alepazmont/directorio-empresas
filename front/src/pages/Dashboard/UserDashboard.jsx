import './UserDashboard.css';
import Container from "react-bootstrap/esm/Container";
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const UserDashboard = () => {
  // Aquí se manejará la lógica del panel de usuario
  return (
    <div className="body">
      <Container>
      <BreadCrumb page="Panel de administración" />
      <ul className="company-list">
        <li className="company-item">Empresa 1</li>
        <li className="company-item">Empresa 2</li>
      </ul>
      </Container>
    </div>
  );
};

export default UserDashboard;