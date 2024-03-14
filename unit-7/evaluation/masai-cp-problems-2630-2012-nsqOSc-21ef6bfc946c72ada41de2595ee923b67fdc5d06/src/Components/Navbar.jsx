import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav" data-testid="nav">
     <Link to="/"> <div id="logo" >
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
        <>
          <button id="addnewBtn" className="button">
            Add New Book
          </button>
          <button id="logoutBtn">Logout</button>
          <h5 data-testid="user-token"> </h5>
        </>

        <button id="loginBtn" className="button">
          Login
        </button>
      </div>
    </div>
  );
};
