import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {

  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  const handleLogin = async (e) => {

    e.preventDefault();
    const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      loginUser({ email, token: data.token });
      // Redirect to home page or useNavigate here
    } else {
      // Handle invalid credentials
      console.error(data.message);
    }
  };


  return (

    <div data-testid="login">
      <h2>Login Page</h2>
      <form data-cy="login-form" onSubmit={handleLogin}>
        <div>
          <label>
            {" "}
            Email
            <input 
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input
              data-cy="login-password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div data-cy="go-to-home-page">
        {/* Add a Link tag here with textContent `Home Page` after `Go to` and on clicking it we will be redirected to Home page*/}
        Go to<Link to="/">Home Page</Link>
       
      </div>
    </div>
  );
};

export default Login;

