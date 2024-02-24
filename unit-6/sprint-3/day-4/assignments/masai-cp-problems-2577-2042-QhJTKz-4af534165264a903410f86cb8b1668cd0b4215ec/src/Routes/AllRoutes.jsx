import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import PrivateRoute from './PrivateRoute';


const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route   path="/product/:id/view"  element={<PrivateRoute> <ProductDetailsPage/> </PrivateRoute>}/>

      </Routes>
    </div>
  );
};

export default AllRoutes;