/* 
import { useEffect, useState } from 'react'; */

import Card from "react-bootstrap/Card"

const ListadoUsuarios = () => {


  

  return (
    <Card className="h-100">
        <Card.Body>
            <Card.Subtitle>Listado de usuarios</Card.Subtitle>
        </Card.Body>
        <ul className="users-list">
          {/* {empresas.map((empresa) => (
            <li key={empresa._id} className="request-item">
              {empresa.nameEmpresa}
              <div className="request-buttons">
                <button
                  className="request-button approve-button"
                  onClick={() => handleApprove(empresa._id)}
                >
                  Aprobar
                </button>
                <button className="request-button cancel-button">
                  Cancelar
                </button>
              </div>
            </li>
          ))} */}
        </ul>
    </Card>
  );
};

export default ListadoUsuarios;