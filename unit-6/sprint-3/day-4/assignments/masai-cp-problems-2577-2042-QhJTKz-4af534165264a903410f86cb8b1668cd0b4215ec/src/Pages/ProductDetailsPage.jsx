import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetailsPage = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
        setLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <div data-testid="product-details-page">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category} </p>
      <p>Price: $ {product.price}</p>
      <p>Location: {product.location} </p>
      {/* Uncomment the following lines if seller details are nested */}
      <p>Seller: {product.seller.name} </p> 
       <p>Email: {product.seller.email} </p>
      <p>Created At: {product.createdAt}</p>
      <h3>Images:</h3>
      <div className="images"  style={{display:"flex" , justifyContent: "space-evenly"}}>
        {product.images &&
          product.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index}`}  style={{width :"200px"}} />
          ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
