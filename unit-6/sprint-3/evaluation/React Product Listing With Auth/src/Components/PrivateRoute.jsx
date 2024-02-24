import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, Route, useNavigate } from 'react-router-dom';


function PrivateRoute({ children }) {
  const navigate = useNavigate();

  const { authState } = useContext(AuthContext);

   console.log(authState.isAuth);
  if (!authState.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;

}

export default PrivateRoute;
