import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Register from './Register';

const Header = () => {

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
                <Login/>
                <Register/>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </>
    );
};

export default Header;