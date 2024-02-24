import React from 'react';

function QuantityButton({ quantity, setQuantity }) {
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <div className="quantity_container">
      <button onClick={decrement} data-cy="dec_btn">-</button>
      <p className="quantity" data-cy="quantity">{quantity}</p>
      <button onClick={increment} data-cy="inc_btn">+</button>
    </div>
  );
}

export default QuantityButton;
