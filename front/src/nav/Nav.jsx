import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
    <img src="https://alepaz.online/proyectoFinal/logo-empresasya.png" />
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
        <Link to="/companies/new">Registra tu empresa</Link>
        </li>
        <li>
        <Link to="/contacto">Contacto</Link>
        </li>
        <li>
        <Link to="/admin">Panel de Administración</Link>
        </li>
        <li>
        <Link to="/user">Panel de Usuario</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
