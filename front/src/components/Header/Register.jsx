import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';





const Register = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
      return (
      <>
          <Button variant="primary" onClick={handleShow} className='btn-register'>
          Registro
          </Button>
  
          <Modal show={show} onHide={handleClose} className='modal-login'>
  
              <Modal.Header closeButton>
                  <Modal.Title>Registro</Modal.Title>
              </Modal.Header>
  
              <Modal.Body>
              
                  <Form>
                        <Form.Group className="mb-3" controlId="nombre">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control type="text" placeholder="Introduce tu nombre" id='nombre'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="apellidos">
                          <Form.Label>Apellidos</Form.Label>
                          <Form.Control type="text" placeholder="Introduce tus apellidos" id='apellidos' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="telefono">
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control type="tel" placeholder="Introduce tu telefono" id='telefono'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control type="password" placeholder="Introduce tu contraseña" id='password' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                          <Form.Label>Correo electrónico</Form.Label>
                          <Form.Control type="email" placeholder="Introduce tu email" id='email'/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label controlId='tipo'>Tipo de usuario</Form.Label>
                            <Form.Select className="mb-3" id='tipo'>
                                <option>Selecciona una opción</option>
                                <option value="propietario">Propietario</option>
                                <option value="gestor">Gestor</option>
                                <option value="agencia publicitaria">Agencia publicitaria</option>
                                <option value="otro">Otro</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Check
                            type='checkbox'
                            id='terms'
                            className='mb-3'
                            label='Acepto los términos y condiciones'
                        />
  
                      <Button variant="primary" type="submit">
                          Registrarse
                      </Button>
                  </Form>
              
              </Modal.Body>
              
          </Modal>
          </>
      );
  }
  
  export default Register;