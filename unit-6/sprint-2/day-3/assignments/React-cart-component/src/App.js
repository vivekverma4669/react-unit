import "./App.css";
import Product from './components/Product';
import React, {useState} from 'react';


const data = [
  {
    id: 1,
    name: "Noodles",
    price: 30,
    quantity: 1,
  },
  {
    id: 2,
    name: "Biriyani",
    price: 90,
    quantity: 1,
  },
  {
    id: 2,
    name: "Chips",
    price: 10,
    quantity: 1,
  },
];
function App() {
  const [products, setProducts] = useState(data);

  const handleQty = (id, payload) => {
    setProducts((prevProducts) =>
    prevProducts.map((product) => product.id === id ? { ...product, quantity: Math.max(product.quantity + payload, 0) } : product
      )
    );
  };

  const getTotalCartPrice = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            handleQty={handleQty} // Corrected this line
          />
        ))}
      </div>
      <h1 id="total-cart" data-testid="total-cart">
        Total: {getTotalCartPrice()}
      </h1>
    </div>
  );
}

export default App;