import { Card } from '@tremor/react';


const UserCard = () => {
  return (
    <Card
    className="max-w-xs"
    decoration="top"
    decorationColor="indigo"
  >
    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Datos de usuario</p>
    <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">NombreUsuario</p>
  </Card>
  )
}

export default UserCard