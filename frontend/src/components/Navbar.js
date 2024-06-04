import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo1 from "../images/aquaflowlogo.png";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <img src={logo1} alt="AquaFlow" className="logo" />
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
              <i class="bx bx-search-alt-2"></i>
            </li>
            <li>
              <i class="bx bx-cart"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
