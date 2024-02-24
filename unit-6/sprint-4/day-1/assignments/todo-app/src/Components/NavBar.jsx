import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{display:"flex" , width :"400px",  margin :"auto" , justifyContent:"space-around", backgroundColor:"yellow"}}>
      <Link to="/">Home</Link>
      <Link to="/todoList">TodoList</Link>
    </div>
  );
}

export default NavBar;
