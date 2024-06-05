import './Contacto.css';

const Contacto = () => {
  return (
    <>      
<div className='seccion-principal'>
    <h2 className='tit-seccion'>Contacto</h2>
    <div className="block-contacto">

      <form className="form-contacto">
        <input
        type="text"
        name="Nombre"
        id="Nombre"
        placeholder="Nombre"
        />
        <input
        type="email"
        name="Email"
        id="Email"
        placeholder="Email"
        />
        <textarea
        type="textarea"
        name="Mensaje"
        id="Mensaje"
        rows="10" cols="50">Escribe tu mensaje</textarea>
        <button>Enviar</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Contacto
