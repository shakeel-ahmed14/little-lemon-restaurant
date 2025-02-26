import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xjqfd-a3OkztApjawJEmtnSu_zH8esiAJRz8e3G-w8TGh_JWvKA8OM4aZvwEX3ZOcQ" alt="Little Lemon Logo" />

        </div>
        <nav className="nav">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/order">Order Online</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src="./restauranfood.jpg" alt="A person holding a plate of food" />
        </div>
      </section>

      <section className="specials">
        <div className="specials-header">
          <h2>This weeks specials!</h2>
          <button className="menu-button">Online Menu</button>
        </div>
        <div className="specials-grid">
          <div className="special-item">
            <img src="./greek salad.jpg" alt="Greek Salad" /> {/* Replace with your Greek Salad URL */}
            <h3>Greek Salad</h3>
            <p className="price">$12.99</p>
            <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <button className="order-button">Order a delivery <span>&rarr;</span></button>
          </div>
          <div className="special-item">
            <img src="./bruchetta.svg" alt="Bruschetta" /> {/* Replace with your Bruschetta URL */}
            <h3>Bruschetta</h3>
            <p className="price">$5.99</p>
            <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <button className="order-button">Order a delivery <span>&rarr;</span></button>
          </div>
          <div className="special-item">
            <img src="./lemon dessert.jpg" alt="Lemon Dessert" width="349px" /> {/* Replace with your Lemon Dessert URL */}
            <h3>Lemon Dessert</h3>
            <p className="price">$5.00</p>
            <p className="description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <button className="order-button">Order a delivery <span>&rarr;</span></button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
