import {useState, useEffect, createContext} from 'react';
import { getAllProducts } from '../Core/Services/productsServices';

const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
        .then((response) => {
            setProducts(response.data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, []);

    return(
        <ShoppingCardContext.Provider value={{products, setProducts}}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

export default ShoppingCardContext;