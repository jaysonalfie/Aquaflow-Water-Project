import React from "react";

import "../about/style2.css";
import Person1 from "../../images/person 7.GIF";


//definition of Card component with destructured props
const Card =({shopsImage  = Person1, productImage, productInfo, price, shopName = "RubySafe"})=>{
  return (
    <div className="Card_wrapper">
      <div className="shophead">
        <img src={shopsImage} className="shoplogo" alt="shop logo" />
        <span className="shop_span">
          <p>{shopName}</p>
          <i className="bx bx-heart"></i>
        </span>
      </div>
      <div className="shopproduct">
        <img src={productImage} alt="product pic" />
        <span>
          <div className="productspan">
            <p>{productInfo}</p>
            <p>Price: Ksh{price}</p>
            <div>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bx-star"></i>
            </div>
          </div>
        </span>
        <div>
          <button className="btn7">View Product</button>
        </div>
      </div>
    </div>
  );
} 

 

export default Card;
