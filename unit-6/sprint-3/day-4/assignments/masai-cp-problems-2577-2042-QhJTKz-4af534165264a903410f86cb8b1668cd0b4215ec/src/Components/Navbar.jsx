import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  let navigate = useNavigate();
  const { authState, logoutUser } = useContext(AuthContext);
  let boolean = authState.isAuth;

  return (
    <div data-testid="navbar"  style={ {display :"flex" , justifyContent: "space-between"}}>
      <div className="name" onClick={() => navigate("/")}>
        React-OLX
      </div>
      <div data-testid="login-logout">
        {boolean ? (
          <>
            <span>Welcome, {authState.userDetails.email}!</span>
            <button className="logout" onClick={logoutUser}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
