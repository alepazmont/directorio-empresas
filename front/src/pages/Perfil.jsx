import Container from 'react-bootstrap/esm/Container'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'

import UserContext from '../context/UserContext'
import { useContext } from 'react';


const Perfil = () => {

  const { user } = useContext(UserContext);

  return (
    <div className='landing-page'>
        <div className="content">
          <Container>
            <BreadCrumb page="Perfil" />
            
            <div className="jumbotron">
              <h1 className="display-4 mb-3">Datos de perfil</h1>
              <p className="lead"><b>Nombre:</b> { user.nombre }</p>   
              <p className="lead"><b>Apellidos:</b> { user.apellidos }</p>   
              <p className="lead"><b>Teléfono:</b> { user.telefono }</p>   
              <p className="lead"><b>Email:</b> { user.email }</p>  
              <p className="lead"><b>Tipo de usuario:</b> { user.tipoUsuario }</p>    
            </div>
            
          </Container>
        </div>
      </div>
  )
}

export default Perfil
