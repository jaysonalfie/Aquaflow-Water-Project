import React from "react";

import "../about/style2.css";

const Card = (props) => {

  const {shopsImage, productImage,productInfo} = props;

//passing down props from the parent down to the child which is the Card

  return (
    <div className="Card_wrapper">
      <div className="shophead">
        <img src={props.shopsImage} className="shoplogo" />
        <span className="shop_span">
          <p>RubySafe</p>
          <i class="bx bx-heart"></i>
        </span>
      </div>
      <div className="shopproduct">
        <img src={props.productImage} />
        <span>
          <div className="productspan">
            <p>{productInfo}</p>
            <div>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
          </div>
        </span>
        <div>
          <button className="btn7">View Product</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
