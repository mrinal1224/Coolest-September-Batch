
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isLoggedIn , setisLoggedIn] = useState(false)
  const [user , setUser] = useState(null)

  console.log(isLoggedIn)
  console.log(user)

  

  const toggleLogin =()=>{
    setisLoggedIn(!isLoggedIn) // true
    setUser('Mark')

    console.log(isLoggedIn)
    console.log(user)
     
  }


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
          <button onClick={toggleLogin} className="nav-login-button">Sign in</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
