import React from 'react';

import calzadoInvierno1 from '../images/ZapatosWinter/botaBeige.jpg';
import calzadoInvierno2 from '../images/ZapatosWinter/botaRoja.jpg';
import blackShoes from '../images/ZapatosWinter/botaDoble.jpg';

import style from './products.module.css';

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
        <div className={style.containerCard}>
            <div className={style.Card}>
                <div className={style.imgContainer}>
                    <img src={imageUrl} alt={product.name} className={style.productImg} />
                </div>
                <div className={style.info}>
                    <h3>{product.name}</h3>
                    <p className={style.price}>${product.price.toFixed(2)}</p>
                </div>
                <div className={style.buton}>
                    <button
                        onClick={() => onAddToCart(product)}
                    >
                        Agregar al Carrito
                    </button>
                </div>

            </div>
        </div>
    );
};