import { createContext, useEffect, useState } from 'react';
import { getAllProducts } from '../Core/Services/productsServices';

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
       getAllProducts()
       .then((response) => {
           setProducts(response.data);
       }).catch(err => {
           console.log(err);
       }) 
    }, [])

   return (
       <ProductsContext.Provider value={{ products, setProducts }}>
           {children}
       </ProductsContext.Provider>
   );
}

export default ProductsContext;