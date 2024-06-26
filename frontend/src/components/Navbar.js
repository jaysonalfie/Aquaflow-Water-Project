import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo1 from "../images/aquaflowlogo.png";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const {isAuthenticated, logout} = useContext(AuthContext)

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
              <i className="bx bx-search-alt-2"></i>
            </li>
            <li>
              <i className="bx bx-cart"></i>
            </li>
            <li>
              <button className="buttnav" onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
