import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div data-testid="navbar">
      <Link to="/" data-testid="navbar-home-link">
        <img src="/watch.png" width="60px" alt="logo" style={{ display: "block" }} />
      </Link>
      {!isAuth && (
        <Link to="/login">
          <button data-testid="navbar-login-button">LOGIN</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;