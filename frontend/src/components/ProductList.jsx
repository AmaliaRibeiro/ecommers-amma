import React, { useState } from 'react';
import { ProductCard }  from './ProductCard';
import { useCart } from '../contexts/CartContexts';
import styles from './products.module.css';

import calzadoInvierno1 from '../images/ZapatosWinter/botaBeige.jpg';
import calzadoInvierno2 from '../images/ZapatosWinter/BotaRoja.jpg';
import calzadoInvierno3 from '../images/ZapatosWinter/botaDoble.jpg';

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
      {
        id: 3,
        name: 'Calzado Invierno3',
        price: 49.99,
        image: calzadoInvierno3, // URL de imagen de ejemplo
      },
      // Agrega más productos aquí
    ];
  
    const handleAddToCart = (product) => {
      const productWithQuantity = { ...product, quantity: 1 };  // Agrega la cantidad inicial
      addToCart(productWithQuantity);  // Llama a la función para agregar al carrito
    };
  
    return (
        
        <div className={styles.containerCard}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={() => handleAddToCart(product)}  // Pasa el producto y la función para agregarlo al carrito
          />
        ))}
      </div>

    );
  };
  
  