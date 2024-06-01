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
          <Route exact path="/" component={HomePage} />
          <Route path="/companies/new" component={CompanyForm} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/user" component={UserDashboard} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
