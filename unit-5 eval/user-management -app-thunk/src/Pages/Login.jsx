import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div id="login-page">
      <div className="card">
        <h4 className="title">LogIn</h4>
        <form>
          <div className="field">
           
            <input
              id="logemail"
              placeholder="Email"
              className="input-field"
              type="email"
            />
          </div>
          <div className="field">
            
            <input
              id="logpass"
              placeholder="Password"
              className="input-field"
              type="password"
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
