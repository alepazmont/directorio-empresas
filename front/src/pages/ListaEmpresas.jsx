/* eslint-disable no-unused-vars */
import Directorio from '../components/Directorio/Directorio';
import Container from 'react-bootstrap/esm/Container';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';


const ListaEmpresas = () => {

  
    return (
      <div className='landing-page'>
        <div className="content">
          <Container>
            <BreadCrumb page="Directorio de empresas" />

            <Directorio/>
          </Container>
        </div>
      </div>
    );
  };

export default ListaEmpresas
