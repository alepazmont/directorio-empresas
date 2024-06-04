import { Card } from '@tremor/react';

const AprobarSolicitudes = () => {
  return (
    <Card
    className="max-w-xs"
    decoration="top"
    decorationColor="indigo"
  >
    <div className="mx-auto max-w-2xl">
    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Aprobación de solicitudes</p>
      <ul className="requests-list">
        <li className="request-item">
          Solicitud 1
          <div className="request-buttons">
            <button className="request-button approve-button">Aprobar</button>
            <button className="request-button cancel-button">Cancelar</button>
          </div>
        </li>
        <li className="request-item">
          Solicitud 2
          <div className="request-buttons">
            <button className="request-button approve-button">Aprobar</button>
            <button className="request-button cancel-button">Cancelar</button>
          </div>
        </li>
        {/* Agrega más solicitudes según sea necesario */}
      </ul>
    </div>
    </Card>

  )
}

export default AprobarSolicitudes
