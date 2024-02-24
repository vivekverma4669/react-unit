import React, { useState } from 'react';
import GroceryItem from './GroceryItem';
import LoadingIndicator from './LoadingIndicator';

function Groceries() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  
  const fetchGroceries = async () => {
    setLoading(true);

    try {
      

    const response = await fetch(
      'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries'
    );
    const data = await response.json();
     console.log(data);

    // Check if 'data' property exists and is an array before setting it
    if (data && Array.isArray(data.data)) {
      setProducts(data.data);
      setShowProducts(true);
    } else {
      console.error('API response does not contain an array of products:', data);
    }
    
  
    setLoading(false);
  }
    catch (error) {
      
    }
  };
  
  
  

  return (
    <div className="grocery_container">
      <h1>Groceries</h1>
      {!showProducts && (
        <button
          className="get-groceries-btn"
          onClick={fetchGroceries}
          data-cy="get-groceries-btn"
        >
          Get Groceries
        </button>
      )}
      {loading ? (
        <LoadingIndicator />
      ) : showProducts ? (
        <div data-cy="grocery-items-container">
          {products.map((product) => (
            <GroceryItem key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Groceries;
