import UserCard from '../../components/UserDashboard/UserCard';
import './AdminDashboard.css';
import AprobarSolicitudes from '../../components/AdminDashboard/AprobarSolicitudes';
import UsageStats from '../../components/AdminDashboard/UsageStats';
import Container from "react-bootstrap/esm/Container";
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const AdminDashboard = () => {
  // Aquí se manejará la lógica de aprobación y cancelación de solicitudes
  return (
    <div className="body">
      <Container>
      <BreadCrumb page="Panel de administración" />
      {/* Mostrar lista de solicitudes */}
      <div className='grid grid-cols-4'>
      <UserCard />
      <UsageStats />
      <AprobarSolicitudes />
      </div>
      
      </Container>
    </div>
  );
};

export default AdminDashboard;
