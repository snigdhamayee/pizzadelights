import React, { useState } from 'react';
import Notification from './Notification';

function Cart({ cartItems }) {
  const [showModal, setShowModal] = useState(false);
  
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Cart Items</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li> 
              ))}
            </ul>
            <p>Total Price: ${totalPrice}</p>
          </div>
        </div>
      )}
      <button onClick={() => setShowModal(true)}>View Cart</button>
    </>
  );
}

export default Cart;
