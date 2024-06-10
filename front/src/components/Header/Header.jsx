import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const Header = () => {
    const { user, logout } = useContext(UserContext);
    return (
      <>
      <div className='header'>
          <Navbar expand="lg" variant="dark">
          
          <Container>
            <Navbar.Brand><img src="/images/logo-empresasya.png"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <ul>
                <li><Nav.Link href="/" className="nav-item">Inicio</Nav.Link></li>
                <li><Nav.Link href="/directorio" className="nav-item">Directorio de empresas</Nav.Link></li>
                <li><Nav.Link href="/empresas" className="nav-item">Registra tu empresa</Nav.Link></li>
                <li><Nav.Link href="/contacto" className="nav-item">Contacto</Nav.Link>  </li>
                </ul>             
              </Nav>
              <Nav className='btn-nav'>
                {
                  user ? (
                    <ul>
                      <li className='btn-nav-item'><Link className='btn btn-option-user btn-option-user-first' to="/admin">Panel de adminitración</Link></li>
                      <li className='btn-nav-item'><Link className='btn btn-option-user' to="/perfil">Perfil</Link></li>
                      <li className='btn-nav-item'><Link className='btn btn-option-user' to="/" onClick={logout}>Logout</Link></li>
                    </ul> 
                  ) : (
                    <ul>
                    <li className='btn-nav-item'><Login/></li>
                    <li className='btn-nav-item'><Register/></li>
                    </ul>
                  )
                }
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </>
    );
};

export default Header;