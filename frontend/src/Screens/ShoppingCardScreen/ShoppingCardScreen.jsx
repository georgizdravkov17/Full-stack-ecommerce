import React from 'react';
import { useContext } from 'react';
import ShoppingCardContext from '../../Contexts/shoppingCardContext';

const ShoppingCardScreen = () => {

    const { products } = useContext(ShoppingCardContext);

  return(
      <div className="shopping-card">
          Shopping Card
          <button className="btn" onClick={() => { console.log(products) }}>Show Products</button>
      </div>
  );
}

export default ShoppingCardScreen