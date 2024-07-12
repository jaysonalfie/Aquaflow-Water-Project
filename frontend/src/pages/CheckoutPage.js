import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../components/modals/Checkout.css';

const CheckoutPage = () => {
  const { cartItems, getCartTotal } = useContext(CartContext);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [error, setError] = useState(null);


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        const response = await fetch('http://localhost:8000/initiate-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: getCartTotal(),
            phone: phoneNumber,
          }),
        });
        const data = await response.json();
        setTransactionId(data.transactionId);
        setIsSubmitted(true);
        setName('');
        setPhoneNumber('');
      } catch (error) {
        console.error('Error initiating payment:', error);
        setError('Failed to initiate payment. Please try again.');
      }
    }
  };

  useEffect(() => {
    setIsFormValid(name.trim() !== '' && phoneNumber.trim() !== '');
  }, [name, phoneNumber]);

  const handleBackToCart = () => {
    navigate(-1);
  };

  return (
    <div className='checkout-container'>
      <div>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} className='checkout-form'>
          <div className='form-group'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-summary">
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
                <span>Ksh {item.price * item.quantity}</span>
              </div>
            ))}
            <div className="total">
              <strong>Total:</strong>
              Ksh {getCartTotal()}
            </div>
          </div>
          {isSubmitted && <p className="success-message">Thank you for your order! Your transaction ID is {transactionId}.</p>}
          {error && <p className="error-message">{error}</p>}
          <button
            type="submit"
            className={`checkout-button ${!isFormValid ? 'disabled' : ''}`}
            disabled={!isFormValid}
          >Complete Payment</button>
        </form>
        <button onClick={handleBackToCart} className='back-to-cart-btn'>Back to Shop</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
