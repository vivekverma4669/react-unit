import React from "react";
import { Route , Routes} from "react-router-dom";
import {Dashboard} from '../Pages/Dashboard';
import {Login } from '../Pages/Login';
import { AddBook } from '../Pages/AddBook';



export const AllRoutes = () => {
  return <div>

  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="addbook" element={ <AddBook/> }/>

  </Routes>

  </div>;
};
