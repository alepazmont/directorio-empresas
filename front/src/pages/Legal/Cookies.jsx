import Container from "react-bootstrap/esm/Container";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Cookies = () => {
  return (
    <div className="body">
      <Container>
        <BreadCrumb page="Política de cookies" />
        <div>
          <h1>Política de Cookies</h1>
          <p>
            Utilizamos cookies propias y de terceros para mejorar la experiencia
            de navegación y ofrecer contenidos de interés. Al continuar con la
            navegación entendemos que se acepta nuestra política de cookies.
          </p>
          <h2>¿Qué son las cookies?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que un sitio web guarda en
            su ordenador o dispositivo móvil cuando usted visita el sitio. Las
            cookies se utilizan, por ejemplo, para permitir que un sitio web
            reconozca el dispositivo del usuario, facilite la navegación,
            recopile información estadística y mejorar los servicios.
          </p>
          <h2>Tipos de cookies utilizadas</h2>
          <ul>
            <li>
              Cookies técnicas: Necesarias para el funcionamiento del sitio web
              y para proporcionar los servicios ofrecidos.
            </li>
            <li>
              Cookies analíticas: Permiten analizar el comportamiento de los
              usuarios de forma anónima y medir la actividad del usuario.
            </li>
            <li>
              Cookies de personalización: Permiten al usuario acceder al
              servicio con características predefinidas en función de una serie
              de criterios.
            </li>
          </ul>
          <h2>Configuración del usuario para cookies</h2>
          <p>
            El usuario puede configurar su navegador para rechazar todas las
            cookies. Sin embargo, esto puede afectar a la experiencia de
            navegación y a la utilización de algunos servicios o funcionalidades
            del sitio web.
          </p>
          <p>
            Puede obtener más información sobre las cookies y su uso en la Guía
            sobre el uso de cookies de la Agencia Española de Protección de
            Datos.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Cookies;
