import React, { useState } from 'react';
import '../styles.css';
import Items from './Items';
import SpecialOffers from './SpecialOffers';
import { FaShoppingCart } from 'react-icons/fa';
import Notification from './Notification';
import Cart from './Cart';

function Landings() {
  const [showMenu, setShowMenu] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const [showOffers, setShowOffers] = useState(true);
  const [showCartIcon, setShowCartIcon] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');
  const [showCart, setShowCart] = useState(false);

  const handleOrderButtonClick = () => {
    setShowMenu(true);
    setShowHero(false);
    setShowOffers(false);
    setShowCartIcon(true);
  };

  const handleBackButtonClick = () => {
    setShowMenu(false);
    setShowHero(true);
    setShowOffers(true);
  };

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

  const handleCartIconClick = () => {
    setShowCart(!showCart); // Toggle the visibility of cart details
  };

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="logo.jpg" alt="Pizza Shop Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li onClick={handleCartIconClick}><FaShoppingCart /></li> {/* Change the click event handler here */}
            {!showMenu && <li><a href="#offers">Offers</a></li>}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {notification && <Notification message={notification} />}

      <section id="hero" style={{ display: showHero ? 'block' : 'none' }}>
        <h1>Welcome to Pizza Delight</h1>
        <p>Order your favorite pizza now!</p>
        <button id="orderBtn" onClick={handleOrderButtonClick}>Order Now</button>
      </section>

      <section id="menu" style={{ display: showMenu ? 'block' : 'none' }}>
        <h2>Menu</h2>
        <h2>Indulge in a culinary adventure with our handcrafted delights.</h2>
        <div className="menu-items">
          <Items addToCart={addToCart} />
        </div>
        <button onClick={handleBackButtonClick}>Back</button>
      </section>

      <section id="offers" style={{ display: showOffers ? 'block' : 'none' }}>
        <h2>Special Offers</h2>
        <h2>Elevate your dining experience with our supremely delicious offers...Have a fantastic day!</h2>
        <div className="offers">
          <SpecialOffers />
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <address>
          Pizza Delight<br />
          nandan vihar ,patia, city-BBSR<br />
          Phone: 8917631523<br />
          Email: info@pizzadelight.com
        </address>
      </section>

      <footer>
        <p>&copy; 2024 Pizza Delight. All rights reserved.</p>
      </footer>

      {/* Render Cart component only if showCart is true */}
      {showCart && <Cart cartItems={cartItems} />}
    </div>
  );
}

export default Landings;
