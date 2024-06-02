import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../src/nav/Nav'
import HomePage from './pages/HomePage';
import Contacto from './pages/Contacto';
import CompanyForm from './components/CompanyForm/CompanyForm';
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";

const App = () => {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/companies/new" element={<CompanyForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </Router>
  );
};

export default App;