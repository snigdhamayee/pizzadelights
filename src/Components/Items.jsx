import React from 'react';
import '../styles.css'; // Assuming you have your CSS file imported here

function Items() {
    return (
        <div className="menu-items">
            <div className="menu-item">
                <img src="Pepperoni.jpg" alt="Pizza" />
                <h3>Pepperoni Pizza</h3>
                <p>Pepperoni, cheese, tomato sauce</p>
                {/* <button>Add to Cart</button> */}
            </div>
            <div className="menu-item">
                <img src="Veggie.jpg" alt="Pizza" />
                <h3>Veggie Pizza</h3>
                <p>Mushrooms, bell peppers, olives</p>
                {/* <button>Add to Cart</button> */}
            </div>
            <div className="menu-item">
                <img src="Margherita.jpg" alt="Pizza" />
                <h3>Margherita Pizza</h3>
                <p>Pepperoni, sausage, bacon</p>
                {/* <button>Add to Cart</button> */}
            </div>
            <div className="menu-item">
                <img src="Hawaiian.jpg" alt="Pizza" />
                <h3>Hawaiian Pizza</h3>
                <p>Pepperoni, sausage, bacon</p>
                {/* <button>Add to Cart</button> */}
            </div>
            <div className="menu-item">
                <img src="pizza3.jpg" alt="Pizza" />
                <h3>Meat Lovers Pizza</h3>
                <p>Pepperoni, sausage, bacon</p>
                {/* <button>Add to Cart</button> */}
            </div>
            <div className="menu-item">
                <img src="pizza3.jpg" alt="Pizza" />
                <h3>Meat Lovers Pizza</h3>
                <p>Pepperoni, sausage, bacon</p>
                {/* <button>Add to Cart</button> */}
            </div>
           
        </div>
    );
}

export default Items;
