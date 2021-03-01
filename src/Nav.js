import React from "react";
import "./App.css";
import Logo from "../src/img/logo.png";

function Nav() {
  return (
    <div className="headerHolder">
       <nav className="">
        <div className="imgHolder">
          <img className="logo" alt="logo" src={Logo}></img>
        </div>
        <div className="linkHolder">
        <a className="anchor" href="/">
          Home
        </a>
        <a className="anchor" href="/specials">
          Specials
        </a>
        <a className="anchor" href="/recipes">
          Recipes
        </a>
        <a className="anchor" href="/coupons">
          Coupons
        </a>
        <a className="anchor" href="/departments">
          Departments
        </a>
        <a className="anchor" href="/about">
          About Us
        </a>
        <a className="anchor" href="contact">
          Contact Us
        </a>  
        </div>
    
      </nav>
    </div>
  );
}
export default Nav;
