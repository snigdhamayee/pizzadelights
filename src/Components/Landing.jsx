// App.js
import React from 'react';
import '../styles.css';
import Items from './Items';
import SpecialOffers from './SpecialOffers';

 
function Landings() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="logo.jpg" alt="Pizza Shop Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="hero">
        <h1>Welcome to Pizza Delight</h1>
        <p>Order your favorite pizza now!</p>
        <button>Order Now</button>
      </section>
      
      <section id="menu">
        <h2>Menu</h2>
        <div className="menu-items">
          <Items />
        </div>
      </section>
      
      <section id="offers">
        <h2>Special Offers</h2>
        <div className="offers">
          <SpecialOffers/>
        </div>
      </section>
      
      <section id="contact">
        <h2>Contact Us</h2>
        <address>
          Pizza Delight<br />
          123 Main Street, City<br />
          Phone: 8917631523<br />
          Email: info@pizzadelight.com
        </address>
      </section>
      
      <footer>
        <p>&copy; 2024 Pizza Delight. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landings;

