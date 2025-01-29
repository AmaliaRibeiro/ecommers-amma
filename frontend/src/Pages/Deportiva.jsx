import React from 'react';
import { ProductList } from '../components/ProductList';

export const Deportiva = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-4 text-white">Ropa deportiva Seamless</h1>
            <ProductList /> {/* Renderiza la lista de productos */}
        </div>
    )
}