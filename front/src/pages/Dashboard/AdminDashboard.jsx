import UserCard from '../../components/UserDashboard/UserCard';
import './AdminDashboard.scss';
import AprobarSolicitudes from '../../components/AdminDashboard/AprobarSolicitudes';
import UsageStats from '../../components/AdminDashboard/UsageStats';
import Container from "react-bootstrap/esm/Container";
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Graficos from '../../components/AdminDashboard/Graficos';
import ListadoUsuarios from '../../components/AdminDashboard/ListadoUsuarios';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const AdminDashboard = () => {
  // Aquí se manejará la lógica de aprobación y cancelación de solicitudes
  return (
    <div className='landing-page'>
      <div className='content'>
        <Container>
          <BreadCrumb page="Panel de administración" />
        {/* Mostrar lista de solicitudes */}
          <Row>
            <Col lg={3} xs={6} className='mb-5'>
              <UserCard />
            </Col>
            <Col lg={3} xs={6} className='mb-5'>
              <UsageStats />
            </Col>
            <Col lg={6} xs={12} className='mb-5'>
              <Graficos />
            </Col>
          </Row>
          <Row>
            <Col lg={6}  xs={12} className='mb-5'>
              <ListadoUsuarios />
            </Col>
            <Col lg={6}  xs={12} className='mb-5'>
              <AprobarSolicitudes /> 
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AdminDashboard;
