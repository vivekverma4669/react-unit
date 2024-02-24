import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:8080/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);


  return (
    <div data-testid = "product-details" >
      <div>

      {/* show product details here */}
      {product && (
          <div>
            <div data-testid="product_name">{product.name}</div>
            <div data-testid="product_price">{product.price}</div>
          </div>
        )}
      </div>
    </div>
  )
}



