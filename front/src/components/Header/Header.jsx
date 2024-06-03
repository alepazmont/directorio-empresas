import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';

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
                <Nav.Link href="/" className="nav-item">Inicio</Nav.Link>
                <Nav.Link href="/companies" className="nav-item">Empresas</Nav.Link>
                <Nav.Link href="/contacto" className="nav-item">Contacto</Nav.Link>               
              </Nav>
              <Nav>
                <Login/>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </>
    );
};

export default Header;