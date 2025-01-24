import React from 'react';
import { useCart } from '../contexts/CartContexts'

export const CartPage = () => {

    const { cartItems } = useCart();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Carrito</h1>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="flex items-center mb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" /> {/* Muestra la imagen */}
                            <div>
                                <p className="font-bold">{item.name}</p>
                                <p>${item.price.toFixed(2)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};