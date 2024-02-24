import { useDispatch, useSelector } from "react-redux";
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {logout} from '../Redux/AuthReducer/action'
import { useEffect } from "react";
import { Navigate } from "react-router-dom";


export const Navbar = () => {

  const isAuth =useSelector((state) => state.auth.isAuth );
  const token =useSelector((state) => state.auth.token );
  const dispatch= useDispatch();
   const navigate = useNavigate();

  const handleLogout=()=>{
     dispatch(logout());
     <Navigate to="/login" replace={true} />
  }
 

  return (
     <div className="nav" data-testid="nav">
    <Link to='/'> <div id="logo">

        <img
          src="https://cdn-icons-png.flaticon.com/128/1048/1048927.png"
          width={"20%"}
          alt=""
        />
   
        <h2
          style={{
            color: "#FF5722",
            fontFamily: "cursive",
            fontWeight: "800",
            margin: "5px 5px 0 10px",
          }}
        >
          Masai Library
        </h2>
      </div>
      </Link>

      <div className="nav-links">

       
{isAuth ? (
  <>
    <button id="addnewBtn" onClick={()=>{<Navigate to="/addbook" />}}>
      Add New Book
    </button>
    <button id="logoutBtn" onClick={handleLogout}>
      Logout
    </button>
    <h5 data-testid="user-token">Token: {token}</h5>
  </>
) : (
  <Link to="/login">
    <button id="loginBtn">Login</button>
  </Link>
)}

      </div>
    </div>
  );
};
