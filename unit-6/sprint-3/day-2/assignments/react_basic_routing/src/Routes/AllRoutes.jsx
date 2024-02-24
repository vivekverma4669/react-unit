import React from 'react';
import { Routes, Route ,BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import  About from "../Pages/About";
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';


const AllRoutes = () => {
    return (
       
        <div>
         
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products/>} />
      </Routes>
        </div>
     
    )
}

export {AllRoutes};