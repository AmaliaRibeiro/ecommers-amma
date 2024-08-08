import React, { useState } from 'react';
import { ProductCard }  from './ProductCard';
import { useCart } from '../contexts/CartContexts';

import calzadoInvierno1 from '../images/fondosImages/fondo5.jpg';
import calzadoInvierno2 from '../images/fondosImages/fondo7.jpg';

export const ProductList = () => {

    const { addToCart } = useCart();

    // Ejemplo de productos
    const products = [
      {
        id: 1,
        name: 'Calzado Invierno',
        price: 59.99,
        image: calzadoInvierno1, // URL de imagen de ejemplo
      },
      {
        id: 2,
        name: 'Calzado Invierno2',
        price: 49.99,
        image: calzadoInvierno2, // URL de imagen de ejemplo
      },
      // Agrega más productos aquí
    ];
  
  
    return (
        
        <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart} 
          />
        ))}
      </div>

    );
  };
  
  