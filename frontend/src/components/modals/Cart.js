//Cart.js

import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


export default function Cart ({showModal, toggle}){

    //accessing the CartContext
    const {cartItems, addToCart, removeFromCart, clearCart, getCartTotal} = useContext(CartContext)
 
    if (!showModal){
        return null;
    }

    return(
        <div className='cart-modal'>
        <div className='cart-content'>
            <h2>Cart</h2>
            <button className='close-button'
            onClick={toggle}>
                close
            </button>
            {cartItems.length === 0}(
                <p>Your cart is empty</p>
            ):(
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className='cart-item'>
                        <img src={`http://localhost:8000${item.image_url}`} alt={item.name} className='cart-item-image'/>
                         <div className='cart-item-details'>
                            <h3>{item.name}</h3>
                            <p>{item.name}</p>
                            <div className='quantity controls'>
                                <button onClick={() => removeFromCart(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() =>addToCart(item)}>+</button>
                            </div>
                         </div>

                        </div>
                    ))}

                    <div className='cart-summary'>
                    <p>Total: Ksh {getCartTotal()}</p>
                    <button onClick={clearCart}>clearCart</button>

                    </div>
                </>
            )
        </div>

        </div>
    )
}