import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddBook  } from '../Pages/AddBook';
import { Dashboard } from '../Pages/Dashboard';
import { Login } from '../Pages/Login';
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return( <div>
       <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addbook"  element={<PrivateRoute> <AddBook/> </PrivateRoute>} />
       </Routes>
  </div>
  )
};


