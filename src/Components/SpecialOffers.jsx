import React from 'react';
import '../styles.css';

function SpecialOffers() {
    const specialOffers = [
        {
            name: "Pepperoni Pizza",
            description: "Pepperoni, cheese, tomato sauce",
            price: 9.99,
            offer: "Buy 1 Get 1 Free"
        },
        {
            name: "Veggie Pizza",
            description: "Mushrooms, bell peppers, olives",
            price: 8.99,
            offer: "20% off on order of two"
        },
        {
            name: "Nonveg Pizza",
            description: "Pepperoni, sausage, bacon",
            price: 10.99,
            offer: "Buy 2 on 50% off"
        }
    ];

    return (
        <div className="menu-items">
            {specialOffers.map((pizza, index) => (
                <div className="menu-item" key={index}>
                    <img src="pizza3.jpg" alt={pizza.name} />
                    <h3>{pizza.name}</h3>
                    <p>Price: {pizza.price} /-</p>
                    {pizza.offer && <p><strong>Special Offer:</strong> {pizza.offer}</p>}
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default SpecialOffers;
