import React from 'react';

function AddToCartButton({setQuantity}) {
  
  const addToCart = () => {
    setQuantity(1);
  }

  return (
    <button onClick={addToCart} data-cy="add-to-cart-btn">
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
