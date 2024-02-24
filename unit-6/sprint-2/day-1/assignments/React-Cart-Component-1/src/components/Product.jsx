// import module.css here;
const Product = ({name,price,quantity,id,handleQty}) => {
  return (
    <>
      <div data-testid="product-container">
        <h2 data-testid="product-name"></h2>
        <h2 data-testid="product-price"></h2>
        <button data-testid="quantity-increment">+</button>
        <h2 data-testid="product-quantity"></h2>
        <button data-testid="quantity-decrement">-</button>
      </div>
    </>
  );
};
export default Product;
