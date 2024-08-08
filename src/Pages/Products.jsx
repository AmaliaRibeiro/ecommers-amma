import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <>
      <h1>Productos</h1>
      
      <nav>
        <ul>
          <li>
            <Link to="winter">Calzados Invierno</Link>
          </li>
          <li>
            <Link to="summer">Calzados Verano</Link>
          </li>
          <li>
            <Link to="bikinis">Bikinis</Link>
          </li>
          <li>
            <Link to="deportiva">Ropa Deportiva</Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* Aquí se renderizará el componente correspondiente a la subruta */}
        <Outlet />
      </div>
    </>
  );
}

