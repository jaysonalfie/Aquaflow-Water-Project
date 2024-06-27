import React from "react";
import './MainContainer.css'
import { BsFillArchiveFill, BsCashStack, BsWallet2 } from "react-icons/bs";


const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="mainContainerTop">
        <div className="main-card">
          <div className="card-inner">
            <h3>ORDERS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>20</h1>
        </div>
        <div className="main-card">
          <div className="card-inner">
            <h3>REVENUE</h3>
            <BsCashStack className="card_icon" />
          </div>
          <h1>20</h1>
        </div>
        <div className="main-card">
          <div className="card-inner">
            <h3>TOTAL</h3>
            <BsWallet2 className="card_icon" />
          </div>
          <h1>20</h1>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
