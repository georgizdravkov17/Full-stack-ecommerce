import React from 'react'
import { useContext } from 'react';
import ProductsContext from '../../Contexts/productsContext';

const  ProductsScreen = () =>  {

  const { products } = useContext(ProductsContext);

  return (
    <div>ProductsScreen
        <button onClick={() => { console.log(products); }}>Show products</button>
    </div>

  )
}

export default ProductsScreen