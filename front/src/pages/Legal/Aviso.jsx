/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/esm/Container";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Aviso = () => {
  return (
    <div className="body">
      <Container>
        <BreadCrumb page="Aviso legal" />
        <div>
          <h1>Aviso Legal</h1>
          <p>
            El sitio web "EmpresasYa! Directorio de Empresas" es propiedad de
            [Nombre de la empresa/organización].
          </p>
          <p>[Nombre de la empresa/organización]</p>
          <p>Dirección: [Dirección de la empresa]</p>
          <p>Teléfono: [Teléfono de contacto]</p>
          <p>Email: [Email de contacto]</p>
          <p>
            Los derechos de propiedad intelectual del sitio web, su código
            fuente, diseño, estructura de navegación, bases de datos y los
            distintos elementos en él contenidos son propiedad de [Nombre de la
            empresa/organización], a quien corresponde el ejercicio exclusivo de
            los derechos de explotación de los mismos en cualquier forma y, en
            especial, los derechos de reproducción, distribución, comunicación
            pública y transformación.
          </p>
          <p>
            El acceso al sitio web es responsabilidad exclusiva de los usuarios.
            El simple acceso al sitio web no implica entablar ningún tipo de
            relación comercial entre [Nombre de la empresa/organización] y el
            usuario.
          </p>
          <p>
            El acceso y navegación en este sitio web implica aceptar y conocer
            las advertencias legales, condiciones y términos de uso contenidos
            en ella.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Aviso;
