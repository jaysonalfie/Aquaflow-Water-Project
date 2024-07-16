/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../components/style.css";
import waterman1 from "../images/waterman1.jpg";
import waterman2 from "../images/waterman2.jpg";
import {useNavigate} from 'react-router-dom'


const InfoCard = () => {
 const navigate =useNavigate();
 const handleNavigation = (path)=>{
  navigate(path);
 }
  
  return (
    <div className="wrapper">
      <div className="parent">
        <div className="child1">
          <img src={waterman1} />
        </div>
        <div className="child2">
          <div className="top">
            <div className="left">
              <i class="bx bx-user"></i>
              <span className="comments">Comments</span>
            </div>
            <div className="right">
              <span ></span>
            </div>
            <div className="middle">
              <h2>Providing top level water for use</h2>
              <p>
                Delve into the fascinating science behind water's unique
                properties and its profound impact on everything from water
                access to global climate
              </p>
            </div>
            <div className="bottom">
              <button className="btn5" onClick={()=> handleNavigation('/about')}>Read More</button>
              <span>
                <i class="bx bx-share-alt"> Share</i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="parent">
        <div className="child1">
          <img src={waterman2} />
        </div>
        <div className="child2">
          <div className="top">
            <div className="left">
              <i class="bx bx-user"></i>
              <span className="comments">Comments</span>
            </div>
            <div className="right">
              <span></span>
            </div>
            <div className="middle">
              <h2>Providing top level water for use</h2>
              <p>
                Delve into the fascinating science behind water's unique
                properties and its profound impact on everything from water
                access to global climate
              </p>
            </div>
            <div className="bottom">
              <button className="btn5" onClick={()=> handleNavigation('/about')}>Read More</button>
              <span>
                <i class="bx bx-share-alt"> Share</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
