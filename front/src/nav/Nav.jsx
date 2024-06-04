import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="menuNav">
    <img src="https://alepaz.online/proyectoFinal/logo-empresasya.png" />
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
        <Link to="/directorio">Directorio de Empresas</Link>
        </li>
        <li>
        <Link to="/empresas">Registra tu empresa</Link>
        </li>
        <li>
        <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
