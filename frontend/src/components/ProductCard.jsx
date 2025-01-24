import React from 'react';

import calzadoInvierno1 from '../images/fondosImages/whiteShoes.jpg';
import calzadoInvierno2 from '../images/fondosImages/blackShoes.jpg';
import blackShoes from '../images/fondosImages/blackShoes.jpg';

const imageMap = {
    'Calzado Invierno': calzadoInvierno1,
    'Calzado Invierno2': calzadoInvierno2,
};

export const ProductCard = ({ product, onAddToCart }) => {

    const imageUrl = imageMap[product.name] || blackShoes;

    console.log('Image URL:', imageUrl); 

    if (!product) {
        return <div>Producto no disponible</div>; // Mostrar un mensaje si no hay producto
      }

    return (
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={imageUrl} alt={product.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">${product.price.toFixed(2)}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    onClick={() => onAddToCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Agregar al Carrito
                </button>
            </div>
            
        </div>
        
    );
};