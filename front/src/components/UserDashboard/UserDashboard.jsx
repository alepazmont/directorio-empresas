import './UserDashboard.css';

const UserDashboard = () => {
  // Aquí se manejará la lógica del panel de usuario
  return (
    <div className="user-dashboard">
      <h2>Panel de Usuario</h2>
      {/* Mostrar lista de empresas del usuario */}
      <ul className="company-list">
        <li className="company-item">Empresa 1</li>
        <li className="company-item">Empresa 2</li>
        {/* Agrega más empresas según sea necesario */}
      </ul>
    </div>
  );
};

export default UserDashboard;