import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import ProductCard from '../Components/ProductCard';
import Loading from '../Components/Loading';


const Home = () => {
  const { authState } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`);
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (

    <div>
      {loading && <Loading/>}
      {!loading && (
        <div data-testid="home-page-products" style={{display :"flex" , flexWrap:"wrap"}}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
