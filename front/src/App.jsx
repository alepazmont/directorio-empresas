// App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../src/nav/Nav";
import HomePage from "./pages/HomePage";
import Contacto from "./pages/Contacto";
import CompanyForm from "./components/CompanyForm/CompanyForm";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./pages/Login";
import UserNav from "./nav/UserNav";
import { UserProvider } from "./context/UserContext";
import Perfil from "./pages/Perfil";
import ListaEmpresas from "./pages/ListaEmpresas";
import Registro from "./components/Registro/Registro";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <UserNav />
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/empresas" element={<ListaEmpresas />} />
          <Route path="/empresas/crear" element={<CompanyForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/panel" element={<Dashboard />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
