import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import QuantityButton from './QuantityButton';

function GroceryItem({ product }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="grocery_card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h5>{product.price}</h5>

  {quantity=== 0 ? <AddToCartButton  setQuantity={setQuantity}/> : <QuantityButton quantity={quantity} setQuantity={setQuantity} />
 }



    </div>
  );
}

export default GroceryItem;
