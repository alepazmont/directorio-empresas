import { useEffect, useState } from 'react';
import { fetchEmpresas } from '../../services/empresaService';

const DirectorioGridPopulares = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const loadEmpresas = async () => {
      try {
        const empresasData = await fetchEmpresas();
        // Filtrar empresas aprobadas y ordenar por popularidad descendente
        const empresasAprobadas = empresasData.filter(empresa => empresa.aprobada);
        const sortedEmpresas = empresasAprobadas.sort((a, b) => b.popularidad - a.popularidad);
        // Tomar las 9 empresas más populares
        const empresasPopulares = sortedEmpresas.slice(0, 9);
        setEmpresas(empresasPopulares);
      } catch (error) {
        console.error('Error obteniendo empresas', error);
      }
    };

    loadEmpresas();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {empresas.map(empresa => (
        <div key={empresa._id} className="p-4 border rounded-lg dark-border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-20 h-20">
              <img src={empresa.logo} alt={empresa.nameEmpresa} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-semibold">{empresa.nameEmpresa}</h2>
              <p className="text-gray-500">{empresa.categoria}</p>
            </div>
          </div>
          <div className="text-sm">
            <p><strong>Dirección:</strong> {empresa.direccion}</p>
            <p><strong>Teléfono:</strong> {empresa.telefono.join(', ')}</p>
            <p><strong>Correo:</strong> <a href={`mailto:${empresa.email}`}>{empresa.email}</a></p>
            <p><strong>Web:</strong> <a href={empresa.web} target="_blank" rel="noopener noreferrer">{empresa.web}</a></p>
          </div>
          <div className="mt-4">
            <a href={`/empresa/${empresa._id}`} className="text-blue-500 hover:text-blue-600">Ver más</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectorioGridPopulares;
