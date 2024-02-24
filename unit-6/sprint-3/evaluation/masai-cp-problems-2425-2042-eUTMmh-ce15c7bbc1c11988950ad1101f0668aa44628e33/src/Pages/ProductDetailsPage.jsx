const ProductDetailsPage = () => {
  return (
    <div data-testid="product-details-page">
      {/* below h2 tag textContent should include title of the product*/}
      <h2></h2>
      {/*below p tag textContent should contain description of the product */}
      <p></p>
      {/*below p tag textContent should include category of the product*/}
      <p>Category: </p>
      {/*below p tag textContent should include price of the product*/}
      <p>Price: $</p>
      {/*below p tag textContent should include location of the product*/}
      <p>Location: </p>
      {/*below p tag textContent should include seller's name*/}
      <p>Seller: </p>
      {/*below p tag textContent should include seller's email*/}
      <p>Email: </p>
      {/*below p tag textContent should include seller's createdAt*/}
      <p>Created At: </p>
      <h3>Images:</h3>
      <div className="images">{/*render all the images here*/}</div>      
    </div>
  );
};

export default ProductDetailsPage;
