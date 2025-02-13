import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div style={{margin:'3rem', display:'flex', justifyContent:'center'}}>
     <a style={{margin:'2rem'}} href='/home'>Home</a>
     <a style={{margin:'2rem'}} href='/about'>About</a>
     <a style={{margin:'2rem'}} href='/contact'>contact</a>
    </div>
  );
}

export default Navbar;
