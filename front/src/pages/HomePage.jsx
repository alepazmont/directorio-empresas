import './HomePage.css';
import LightTitle from '../components/Title/LightTitle';
import DarkTitle from '../components/Title/DarkTitle';
import MapaEmpresas from '../components/Map/MapaEmpresas';
import Container from 'react-bootstrap/esm/Container';
import DirectorioGridRecientes from '../components/Directorio/DirectorioGridRecientes'
import DirectorioGridPopulares from '../components/Directorio/DirectorioGridPopulares'


const HomePage = () => {

  return (
<div className="home-page">   
<div className='cabecera-mapa'>

  
</div>   

        <MapaEmpresas apiKey="AIzaSyCj09lN8tpjDD7lrEyumuqOGEtG3_utP8k" />


      <div className="bg-purple">
        <Container className='bloque-oscuro'>
          <LightTitle title="Últimas empresas inscritas" />
          <DirectorioGridRecientes />
        </Container>
      </div>
      
      <div>
      <Container className='bloque-claro'>
        <DarkTitle title="Las empresas más populares" />
        <DirectorioGridPopulares />
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
