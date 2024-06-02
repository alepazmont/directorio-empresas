import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyForm from './components/CompanyForm/CompanyForm';
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/companies/new" element={<CompanyForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;