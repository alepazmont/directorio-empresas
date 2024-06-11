import Container from "react-bootstrap/esm/Container"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import InfoComercial from "../components/InfoComercial/InfoComercial"
import { useContext, useState } from "react"
import UserContext from "../context/UserContext"
import { Link } from "react-router-dom"

const EmpresasComercial = () => {
    const { user } = useContext(UserContext);
    const usuario = user.data.user;

    const [pages] = useState([
        { link: '', page: 'Registra tu empresa' }
      ]);

    return (
        <div className="landing-page">

            <div className="content">
                
                <Container>
                    <BreadCrumb pages={pages} />
                    <InfoComercial/>
                     
                    <Row>
                        <Col lg={12} xs={12}>

                            <p className="m-5">¿Quieres que tu empresa alcance un nuevo nivel de exposición y oportunidades? ¡Regístrala hoy en <b>EmpresasYa!</b> y empieza a disfrutar de los beneficios de estar presente en la plataforma más dinámica y conectada del sector!</p>
                            <p className="m-5">No pierdas la oportunidad de hacer que tu empresa sea vista y reconocida. Únete a nosotros y da el primer paso hacia un futuro lleno de posibilidades. ¡Estamos aquí para ayudarte a triunfar!</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} xs={12} className="text-center">
                        
                        {
                            user && !usuario.admin
                             && 
                            <Link className="btn" to="/empresas/crear">Registrar empresa</Link> 
                        }
                        </Col>
                    </Row>
                    
                </Container>
            </div>
         
      </div>
    )
  }
  
  export default EmpresasComercial