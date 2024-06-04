import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Nav from "../src/nav/Nav";
import HomePage from "./pages/HomePage";
import Contacto from "./pages/Contacto";
import CompanyForm from "./components/CompanyForm/CompanyForm";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./pages/Login";
import UserNav from "./nav/UserNav";
import { UserProvider } from "./context/UserContext";
import Perfil from "./pages/Perfil";
import ListaEmpresas from "./pages/ListaEmpresas";
import Registro from "./components/Registro/Registro";
import '@fortawesome/fontawesome-free/css/all.min.css';
import EmpresaDetalle from "./pages/EmpresaDetalle";
import EmpresasComercial from "./pages/EmpresasComercial";
import AuthRoute from "./components/AuthRoute/AuthRoute";

const App = () => {
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    axios.get("https://directorio-empresas.vercel.app/user/get")
      .then(response => {
        setListUsers(response.data)
      })
  }, [])

  return (
    <UserProvider>
      <Router>
        <UserNav />
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/directorio" element={<ListaEmpresas />} />
          <Route path="/empresas" element={<EmpresasComercial />} />
          <Route path="/empresas/crear" element={<CompanyForm />} />
          <Route path="/login" element={<Login listUsers={listUsers} />} />
          <Route path="/admin" element={
            <AuthRoute component={<AdminDashboard />} />
          } />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/panel" element={
            <AuthRoute component={<Dashboard />} />
          } />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/empresa/:id" element={<EmpresaDetalle />} />
          <Route path="/perfil" element={
            <AuthRoute component={<Perfil />} />
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
