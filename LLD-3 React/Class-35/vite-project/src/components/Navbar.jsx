import "./Navbar.css";

function Navbar() {
  let user = "Mark";
  let isLoggedIn = true;
  return (
    <div className="navbar">
      <div className="navbar-logo">Amazon</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-links">
        <a href="#deals" className="nav-link">
          Today's Deals
        </a>
        <a href="#cart" className="nav-link">
          Cart
        </a>
        {isLoggedIn ? (
          <span>Welcome {user}</span>
        ) : (
          <button className="nav-login-button">Sign in</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
