import React from 'react';
import { ProductList } from '../components/ProductList';

export const Winter = () => {

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold text-center my-4">Productos de Invierno</h1>
                <ProductList /> {/* Renderiza la lista de productos */}
            </div>
        </>
    )
}