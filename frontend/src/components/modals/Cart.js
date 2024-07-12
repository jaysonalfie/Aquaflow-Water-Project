import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import PropTypes from 'prop-types'

export default function Cart({showModal, toggle}) {
    // accessing the CartContext
    const {cartItems, addToCart, removeFromCart, clearCart, getCartTotal} = useContext(CartContext)
    const navigate = useNavigate()
 
    if (!showModal) {
        return null;
    }

    //fuction to handle checkout
    const handleCheckout = () =>{
        toggle()
        navigate('/checkout')
    }

    // console.log('Cart Items:', cartItems);
    // console.log('Cart Item IDs:', cartItems.map(item => item.id));

    return (
        <div className='cart-modal'>
            <div className='cart-content'>
                <h2>Cart</h2>
                <button className='close-button' onClick={toggle}>
                    Close
                </button>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        {cartItems.map((item, index) => (
                        <div key={item.id || index} className='cart-item'>
                         {/**Passed the image_url directly so as to solve the bug of the image displaying on the cart */}
                            <img src={item.image_url} alt={item.name} className='cart-item-image'/>
                                
                                <div className='cart-item-details'>
                                    <h3>{item.name}</h3>
                                    <p>Ksh {item.price}</p>
                                    <div className='quantity-controls'>
                                        <button onClick={() => removeFromCart(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                           <div className='cart-summary'>
                            <p>Total: Ksh {getCartTotal()}</p>
                            <button onClick={clearCart}>Clear Cart</button>
                            <div className='cart-checkout'>
                            <button onClick={handleCheckout}>Proceed to checkout</button>
                        </div>
                            
                        </div>
                       
                    </>
                )}
            </div>
        </div>
    )
}

Cart.propTypes ={
    showModal: PropTypes.bool,
    toggle: PropTypes.func
}