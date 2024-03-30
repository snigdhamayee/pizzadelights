import React, { useState } from 'react';
import '../styles.css'; // Assuming you have your CSS file imported here

function Notification({ message }) {
  return (
    <div className="notification">
      {message}
    </div>
  );
}

function Items() {
 
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');

 
  const addToCart = (itemName, itemPrice) => {
    // Create an object representing the item with name and price
    const newItem = { item: itemName, price: itemPrice };
    
    // Update the cartItems state by adding the new item
    setCartItems([...cartItems, newItem]);
  
    // Show notification
    setNotification(`${itemName} added to cart`);
  
    // Clear notification after 2 seconds
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };
  
  return (
    <div className="menu-items">

      {/* Display notification if exists */}
      {notification && <Notification message={notification} />}

      <div className="menu-item">
        <img src="Pepperoni.jpg" alt="Pizza" />
        <h3>Pepperoni Pizza</h3>
        <p>Pepperoni, cheese, tomato sauce</p>
        {/* Add an onClick event to trigger addToCart function */}
        <button onClick={() => addToCart("Pepperoni Pizza" ,100 )}>Add to Cart</button>
      </div>

      <div className="menu-item">
        <img src="pizza3.jpg" alt="Pizza" />
        <h3>Veggie Pizza</h3>
        <p>Mushrooms, bell peppers, olives</p>
        <button onClick={() => addToCart("Veggie Pizza", 180 )}>Add to Cart</button>
      </div>
      {/* Add more menu items with similar structure */}
    </div>
  );
}

export default Items;
