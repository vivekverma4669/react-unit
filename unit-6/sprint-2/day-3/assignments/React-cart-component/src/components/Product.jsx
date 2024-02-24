// import module.css here;
import styles from  './product.module.css';
import { useEffect } from 'react';

const Product = ({name,price,quantity,id,handleQty}) => {
  return (
      <div data-testid="product-container"  className={styles.product_container} >
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment"    onClick={() => handleQty(id, 1)}>+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button data-testid="quantity-decrement"    onClick={() => handleQty(id, -1)} disabled={quantity <= 0}>-</button>
      </div>
    
  );
};


export default Product;
