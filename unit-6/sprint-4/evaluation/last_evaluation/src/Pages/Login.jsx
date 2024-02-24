import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div id="login-page">
      <div className="card">
        <h4 className="title">LogIn</h4>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              id="logemail"
              placeholder="Email"
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <input
              id="logpass"
              placeholder="Password"
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};
