import React, { useState } from "react";
import {Link} from "react-router-dom"

function Navbar() {
 const [homePage , setHomePage]= useState()


  const loadHomePage = ()=>{
    import('./Home.js').then((module)=>{
        setHomePage(module.default)
    })
  }


  return (
    <div style={{margin:'3rem', display:'flex', justifyContent:'center'}}>
     <Link onClick={loadHomePage} style={{margin:'2rem'}} to='/home'>Home</Link>
     <Link style={{margin:'2rem'}} to='/about'>About</Link>
     <Link style={{margin:'2rem'}} to='/contact'>contact</Link>
    </div>
  );
}

export default Navbar;
