import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, price, location  ,images} = product;

  return (
    <div data-testid="product-card" style={{width: "200px" , margin :"20px" , border:"2px solid black"}}>
      <img src={images[0]} alt={title}  style={{width :"200px"}} />
      <p>{price}</p>
      <h3>{title}</h3>
      <p>{location}</p>
      <Link to={`/product/${id}/view`}>  View Details</Link>
    </div>
  );
};

export default ProductCard;
