import React, { useEffect, useState } from 'react'

export default function Products() {
const [data,setData]= useState([]);

  const getData= async ()=>{
    try {
      let res= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
      let result = await res.json();
      setData(result.data);

     console.log(result);
    }
    catch (error) {
       console.log(error);
    }
  }

  useEffect(
    ()=>{getData()}
    ,[]);




  return (
    <div>

      <h1 >All Products </h1>
      <div className= "products-wrapper">
         <div>
         {
          data.map((item)=>
          (
            <div key={item.id} className="product">
              <div className="id">{item.id}</div>
              <h3 className="title">{item.title}</h3>
              <div className="category">{item.category}</div>
              <div className="price">{item.price}</div>
            </div>
            )
          )
         }

        </div>
      </div>

    </div>
  )
}