/* eslint-disable no-unused-vars */
import './Login.css';

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../services/login";
import UserContext from "../context/UserContext";

const Login = () => {
  const [email, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        email,
        password,
      });
      setUser(user); // Guarda el usuario en el contexto y en el localStorage
      navigate('/admin');
    } catch (error) {
      setErrorMessage("Error iniciando sesión");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      console.log("Error iniciando sesión", error);
    }
  };

  return (
    <div className="seccion-login">
      <h2>Login</h2>
      {/* <Notification message={errorMessage} /> */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          name="Usermail"
          placeholder="Correo de usuario"
          onChange={(e) => setUsermail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          name="Password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
