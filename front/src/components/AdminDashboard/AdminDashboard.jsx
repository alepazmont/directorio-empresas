import UserCard from '../Dashboard/dashboard-components/UserCard';
import './AdminDashboard.css';
import UsageStats from './admin-components/UsageStats';

const AdminDashboard = () => {
  // Aquí se manejará la lógica de aprobación y cancelación de solicitudes
  return (
    <div className="admin-dashboard">
      <h2>Panel de Administracion</h2>
      {/* Mostrar lista de solicitudes */}
      <UserCard />
      <UsageStats />
      <ul className="requests-list">
        <li className="request-item">
          Solicitud 1
          <div className="request-buttons">
            <button className="request-button approve-button">Aprobar</button>
            <button className="request-button cancel-button">Cancelar</button>
          </div>
        </li>
        <li className="request-item">
          Solicitud 2
          <div className="request-buttons">
            <button className="request-button approve-button">Aprobar</button>
            <button className="request-button cancel-button">Cancelar</button>
          </div>
        </li>
        {/* Agrega más solicitudes según sea necesario */}
      </ul>
    </div>
  );
};

export default AdminDashboard;
