import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};
