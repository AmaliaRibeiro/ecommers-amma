import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Agregar al carrito o actualizar cantidad si el producto ya está
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingProduct = prevItems.find(item => item.id === product.id);
            if (existingProduct) {
                // Si el producto ya existe, actualizamos la cantidad
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Si no existe, lo agregamos con cantidad 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    // Actualizar la cantidad de un producto
    const updateQuantity = (productId, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto en otros componentes
export const useCart = () => useContext(CartContext);