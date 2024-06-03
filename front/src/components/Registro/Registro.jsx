import './Registro.css';

const Registro = () => {
    return (
        <> 
    <div className='seccion-registro'>
      <h2>Registro de usuario</h2>
      <div className="block-registro">
      <form className="form-registro">
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
        <input
        type="password"
        name="Password"
        id="Password"
        />
        <button>Enviar</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Registro
