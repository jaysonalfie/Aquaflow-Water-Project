import React , {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "../about/style2.css";
import Person1 from "../../images/person 7.GIF";


//definition of Card component with destructured props
const Card =({id, shopsImage  = Person1, productImage, productInfo, price, shopName = "RubySafe"})=>{
 const {addToCart} = useContext(CartContext)


 //function to enable the product to be added to the cart.
  const handleAddToCart = () =>{
    addToCart({
      id,
      name: productInfo,
      price,
      image: productImage,
      shopName
    })

  }
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
          <button className="btn7" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
} 

 

export default Card;
