import React from 'react';

const blackShoes = '/images/ZapatosWinter/botaDoble.jpg';

import style from './products.module.css';


export const ProductCard = ({ product, onAddToCart }) => {
    if (!product || !product.name || !product.price) {
        return <div>Producto no disponible</div>;
    }

    const imageUrl = product.name || blackShoes;

    return (
        <div className={style.containerCard}>
            <div className={style.Card}>
                <div className={style.imgContainer}>
                    <img src={product.image} alt={product.name} className={style.productImg} />
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
