import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./context/UserContext";
import './App.scss';
import HomePage from './pages/HomePage';
import CompanyForm from './components/CompanyForm/CompanyForm';
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import EmpresasComercial from './pages/EmpresasComercial';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/companies/new" element={<CompanyForm />} />
          <Route path='/empresas' element={<EmpresasComercial />} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/user" element={<UserDashboard/>} />
        </Routes>
      </div>
    </Router>
    </UserProvider>
  );
};

export default App;
