import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
   const [email,setEmail]= useState("");
   const [password,setPassword]= useState("");
   const {loginUser} =useContext(AuthContext);
   const navigate = useNavigate();

   const handleSubmit = async (e)=>{
    e.preventDefault();


    try {
      let res= await fetch('https://reqres.in/api/login',{
        method :"POST",
        headers :{
          "Content-Type": "application/json",
        },
        body :JSON.stringify({email,password}),

      });
      const data= await res.json();
       console.log(data);
      if(res.ok){
        loginUser(data.token);
        navigate('/dashboard');
      }else{
        console.error('Login failed' , data.error);
      }
    }
    catch (error) {
      console.error('Login failed' , data.error);
    }
   }

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form"  onSubmit={handleSubmit}>
        <div>
          <label>
<input data-testid="email-input" type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password} onChange={(e)=>{setPassword(e.target.value)}}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
