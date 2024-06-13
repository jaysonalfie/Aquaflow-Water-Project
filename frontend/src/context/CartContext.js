//CartContext.js
import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();
 
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(
        localStorage.getitem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        :[]

    );


    //function to add to cart
    const addToCart = (item) => {
        //checks if item is already in the cart
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart){
            setCartItems(
                cartItems.map(
                    (
                        cartItem // if item is already in the cart, increase the quantity of the item
                    )=>
                        cartItem.id === item.id
                        ? {...cartItem, quantity: cartItem.quantity + 1}
                        : cartItem //otherwise , return the cart item
                )
            );
        }else {
            //if the item is not in the cart, add the item to the cart
            setCartItems([...cartItems , {...item, quantity:1}]);
        }
    }
}