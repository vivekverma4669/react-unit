const Navbar = () => {
  return (
    <div data-testid="navbar">
      <div className="name">React-OLX</div>
      <div data-testid="login-logout">       
        {/* Either Link to login or span(welcome message)+Logout button with className="logout" should be there */}
      </div>
    </div>
  );
};

export default Navbar;
