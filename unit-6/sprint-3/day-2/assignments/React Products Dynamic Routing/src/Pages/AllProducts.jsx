import React from 'react';
import { useEffect , useState } from 'react';

export default function AllProducts() {
  const [products, setProducts] = useState([]);

   const getData= async ()=>{
    try{
      let res=  await fetch(`http://localhost:8080/products`);
      let result=await res.json();
     setProducts(result);

 console.log(result);
  } catch (error) {
    console.log(error);
  }
  }
  useEffect(() =>  {
    getData();
  },[]);

  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
     
        {products.map((product) => (
         <div key={product.id}>
        <a href={`/products/${product.id}`} data-testid={`product-link-${product.id}`} > {product.name} </a>
        </div>
        ))}
      </div>
    </div>
  )
}
