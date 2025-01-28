import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import product from "../components/products.module.css"

export const Products = () => {
  return (
    <>
      <div className={product.containerProducts}>
        <h1>Productos</h1>

        <nav>
          <ul>
            <li>
              <Link className={product.links} to="winter">CALZADOS DE INVIERNO</Link>
            </li>
            <li>
              <Link className={product.links} to="summer">CALZADOS DE VERANO</Link>
            </li>
            <li>
              <Link className={product.links} to="bikinis">BIKINIS</Link>
            </li>
            <li>
              <Link className={product.links} to="deportiva">ROPA DEPORTIVA</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {/* Aquí se renderizará el componente correspondiente a la subruta */}
        <Outlet />
      </div>
    </>
  );
}

