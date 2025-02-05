import React from 'react';
import { ProductList } from '../components/ProductList';

export const Winter = () => {

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold text-center my-4 text-white">Calzados de Invierno</h1>
                <ProductList category="productosInvierno"/> {/* Renderiza la lista de productos */}
            </div>
        </>
    )
}