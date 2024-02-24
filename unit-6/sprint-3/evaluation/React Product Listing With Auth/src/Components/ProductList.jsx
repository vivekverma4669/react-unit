import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products = [] }) => {
  return (
    <div data-testid="products-container">
      {products.map((product, index) => (
        <ProductItem key={index} title={product.title} price={product.price} image={product.image} category={product.category} />
      ))}
    </div>
  );
};

export default ProductList;
