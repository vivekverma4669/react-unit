import "./App.css";

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
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        {/* The total price should be in this syntax `Total :123` */}
      </h1>
    </div>
  );
}

export default App;
