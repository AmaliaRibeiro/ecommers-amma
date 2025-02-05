import React from 'react';
import { ProductList } from '../components/ProductList';


export const Bikinis = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-4 text-white">Bikinis 24/25</h1>
            <ProductList products={productosBikinis}/> {/* Renderiza la lista de productos */}
        </div>
    )
}