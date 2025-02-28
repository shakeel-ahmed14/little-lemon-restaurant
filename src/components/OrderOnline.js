import React, { useState, useEffect } from 'react';
import '../OrderOnline.css'; // Create OrderOnline.css for styling

function OrderOnline() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulate fetching menu items from an API or local data
    const fetchMenuItems = async () => {
      // Replace with actual data fetching logic
      const data = [
        { id: 1, name: 'Greek Salad', price: 12.99, image: '/greek salad.jpg' },
        { id: 2, name: 'Bruschetta', price: 5.99, image: '/bruchetta.svg' },
        { id: 3, name: 'Lemon Dessert', price: 5.00, image: '/lemon dessert.jpg' },
      ];
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="order-online-container">
      <h1>Order Online</h1>
      <div className="menu-section">
        <h2>Menu</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <h3>{item.name}</h3>
              <p className="price">${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p className="total">Total: ${calculateTotal()}</p>
            <button className="checkout-button">Proceed to Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderOnline;