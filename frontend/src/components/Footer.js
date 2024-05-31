import React from "react";
import logo2 from "../images/logo2.GIF";
import { NavLink } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footerr">
      <div className="footer container">
        <div className="left">
          <div className="left-details">
            <div className="logo2span">
              <img src={logo2} className="logo2" />
              <span className="logo-span">Aquaflow</span>
            </div>
            <div>
              <p>Delivering the purest form of water for healthy living</p>
              <p>open hours stated</p>

              <p>Mon - Sat : 6am - 9pm</p>

              <p> Weekends Open</p>
            </div>
          </div>
          <div className="left-middle">
            <p>
              {" "}
              <i class="bx bx-location-plus"></i>
              5th floor ambasador, Nairobi, 098-90
            </p>
            <p>
              {" "}
              <i class="bx bx-phone-call"></i>
              Call us 0n ; +254 111 266 551 <br /> / +254 772 437 010
            </p>

            <p>
              {" "}
              <i class="bx bx-envelope"></i>
              Email us : @info_aquaflow.co.ke
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right-middle">
            <p>Useful links</p>
            <ul className="foot-list">
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/services"> Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
          <div className="right-end">
            <p>Follow us</p>
            <i class="bx bxl-facebook-circle">facebook</i>
            <i class="bx bxl-instagram">instagram</i>
            <i class="bx bxl-twitter">twitter</i>
            <i class="bx bxl-youtube">youtube</i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
