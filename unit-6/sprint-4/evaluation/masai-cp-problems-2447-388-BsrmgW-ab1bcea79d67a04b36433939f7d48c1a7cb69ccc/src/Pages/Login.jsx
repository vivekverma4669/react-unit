import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/AuthReducer/action';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;