import { useEffect, useState } from 'react';
import { fetchEmpresas } from '../../services/empresaService';

const DirectorioGridRecientes = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const loadEmpresas = async () => {
      try {
        const empresasData = await fetchEmpresas();
        // Filtrar empresas aprobadas y ordenar por fecha de creación descendente
        const empresasAprobadas = empresasData.filter(empresa => empresa.aprobada);
        const sortedEmpresas = empresasAprobadas.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // Tomar las 9 empresas más recientes
        const empresasRecientes = sortedEmpresas.slice(0, 8);
        setEmpresas(empresasRecientes);
      } catch (error) {
        console.error('Error obteniendo empresas', error);
      }
    };

    loadEmpresas();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {empresas.map(empresa => (
          <div key={empresa._id} className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">
                    <img src={empresa.logo} alt={empresa.nameEmpresa} className="img-fluid rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h5 className="card-title">{empresa.nameEmpresa}</h5>
                    <p className="card-text text-muted">{empresa.categoria}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p><strong>Dirección:</strong> {empresa.direccion}</p>
                  <p><strong>Teléfono:</strong> {empresa.telefono.join(', ')}</p>
                  <p><strong>Correo:</strong> <a href={`mailto:${empresa.email}`}>{empresa.email}</a></p>
                  <p><strong>Web:</strong> <a href={empresa.web} target="_blank" rel="noopener noreferrer">{empresa.web}</a></p>
                </div>
                <div className="mt-4">
                  <a href={`/empresa/${empresa._id}`} className="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorioGridRecientes;
