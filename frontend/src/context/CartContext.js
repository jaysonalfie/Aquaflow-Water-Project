//CartContext.js
import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();
 
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(
        localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        :[]

    );


    //function to add to cart
    const addToCart = (item) => {
        console.log('adding item to cart', item)

        // if (!item || item.id === undefined){
        //     console.error('Cannot add item to cart : Invalid item or mission ID', item);
        //     return;
        // }


        //checks if item is already in the cart
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
         console.log('item is already in cart', isItemInCart)
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

    //function to remove items from the cart
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem)=> cartItem.id === item.id);

        if (isItemInCart.quantity === 1){
            //if the quantity of the item is 1, remove the item from the cart
            setCartItems(cartItems.filter((cartItem)=> cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem)=>
                cartItem.id === item.id
                //if the quantity of the item is greater than 1, decrease the quantity of the item
               ?{...cartItem, quantity: cartItem.quantity - 1}
              : cartItem
                )
            )
        }
    }

    //function to clear the cart
    //it sets the cart to an empty array
    const clearCart = () => {
        setCartItems([]);
    };

    //function to get cart total
    //use of the reduce method which executes a reducer function tha results to a single output
    const getCartTotal = ()=>{
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        )//calculate the total price of the items in the cart
    };

    //getting items from browser
    //JSON.parse converts items yo an object
    useEffect(()=> {
        const cartItems = localStorage.getItem("cartItems");
        if(cartItems){
            setCartItems(JSON.parse(cartItems));
        }

    }, []);

    //persisting cart state in browser-updates local storage whenever the cartItems state changes
    //setItem method sets value of specified localstorage item
    //JSON.stringify converts object into a string
    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    }, [cartItems]);

    return (
        //wraps the children in the CartContext.provider
        <CartContext.Provider
         value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
         }}
         >
            {children}
         </CartContext.Provider>
    )
}