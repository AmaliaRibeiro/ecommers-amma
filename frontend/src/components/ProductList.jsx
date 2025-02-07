import React, { useState } from 'react';
import { ProductCard }  from './ProductCard';
import { useCart } from '../contexts/CartContexts';
import styles from './products.module.css';
import { categories } from '../data/products';


export const ProductList = () => {

    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('productosInvierno') 
    
    const products = categories[selectedCategory];

    const handleAddToCart = (product) => {
      const productWithQuantity = { ...product, quantity: 1 };  // Agrega la cantidad inicial
      addToCart(productWithQuantity);  // Llama a la función para agregar al carrito
    };
  
    return (
        <>
         <div>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="productosInvierno">productosInvierno</option>
        <option value="productosVerano">productosVerano</option>
        <option value="productosBikinis">productosBikini</option>
        <option value="productosDeportivos">productosDeportivos</option>
      </select>

        <div className={styles.containerCard}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={() => handleAddToCart(product)}  // Pasa el producto y la función para agregarlo al carrito
          />
        ))}
      </div>
      </div>
      </>
    );
  };
  
  