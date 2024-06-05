import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserNav = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="userNav">
     {user ? (
        <ul>
          <li><Link to="/admin">Panel de adminitración</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
          <Link to="/" onClick={logout}>Logout</Link>
        </ul>
      ) : (
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registro">Regístrate</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default UserNav;
