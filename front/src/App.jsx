import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserProvider } from "./context/UserContext"
import './App.scss'

import Login from './components/Header/Login'
import CompanyForm from './components/CompanyForm/CompanyForm'
import AdminDashboard from "./components/AdminDashboard/AdminDashboard"
import UserDashboard from "./components/UserDashboard/UserDashboard"
import Dashboard from './components/Dashboard/Dashboard'

import HomePage from './pages/HomePage'
import Contacto from './pages/Contacto'
import Perfil from './pages/Perfil'
import EmpresasComercial from './pages/EmpresasComercial'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/empresas" element={<EmpresasComercial />} />
          <Route path="/empresas/crear" element={<CompanyForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/panel" element={<Dashboard />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
