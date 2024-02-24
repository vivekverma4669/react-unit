import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Home from './Home';
import PrivateRoute from '../Components/PrivateRoute';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <PrivateRoute path="/dashboard"> */}
        <Route   path="/dashboard"  element={<PrivateRoute> <Dashboard/></PrivateRoute>} />
      {/* </PrivateRoute> */}
    </Routes>
  );
}

export default AllRoutes;
