import React from 'react';
import { useCart } from '../contexts/CartContexts'

import style from './styles/cart.module.css'

export const CartPage = () => {

    const { cartItems, updateQuantity, removeFromCart } = useCart();

    // Función para manejar el cambio de cantidad
    const handleQuantityChange = (id, event) => {
        const newQuantity = Math.max(1, parseInt(event.target.value, 10)); // Asegúrate de que la cantidad no sea menor a 1
        updateQuantity(id, newQuantity);
    };

    return (
        <>
        <h1 className={style.cartTitle}>Carrito</h1>
        <div className={style.containerCart}>
            {cartItems.length === 0 ? (
                <p className={style.cartText}>El carrito está vacío.</p>
            ) : (
                <table className={style.cartTable}>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td className={style.cartProduct}>
                                    <img src={item.image} alt={item.name} className={style.cartImg} />
                                    <p>{item.name}</p>
                                </td>
                                <td>${parseFloat(item.price).toFixed(2)}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        className={style.cartQuantity}
                                        onChange={(e) => handleQuantityChange(item.id, e)}
                                    />
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Totales del carrito */}
            <div className={style.cartTotals}>
                <p><strong>Subtotal:</strong> ${
                    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
                }</p>
                <p><strong>Envío:</strong> Introduce tu dirección para calcular</p>
                <hr />
                <p className={style.cartTotal}><strong>Total:</strong> ${
                    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
                }</p>
                <button className={style.cartBtn}>FINALIZAR COMPRA</button>
            </div>
        </div>
    </>
);
};

