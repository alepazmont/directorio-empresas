/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Map from '../components/Map/Map';
import axios from 'axios';
import Directorio from '../components/Directorio/Directorio';
import './ListaEmpresas.css';


const ListaEmpresas = () => {

  
    return (
<div className='seccion-principal'>
    <h2 className='tit-seccion'>Directorio de Empresas</h2>
            <Directorio />
      </div>
    );
  };

export default ListaEmpresas
