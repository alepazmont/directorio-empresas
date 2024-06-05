import UserCard from '../../components/UserDashboard/UserCard';
import './AdminDashboard.css';
import AprobarSolicitudes from '../../components/AdminDashboard/AprobarSolicitudes';
import UsageStats from '../../components/AdminDashboard/UsageStats';

const AdminDashboard = () => {
  // Aquí se manejará la lógica de aprobación y cancelación de solicitudes
  return (
    <div className="admin-dashboard">
      <h2>Panel de Administracion</h2>
      {/* Mostrar lista de solicitudes */}
      <div className='grid grid-cols-4'>
      <UserCard />
      <UsageStats />
      <AprobarSolicitudes />
      </div>
      
      
    </div>
  );
};

export default AdminDashboard;
