import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import OrderOnline from './components/OrderOnline';

function ButtonLink({to, children}) {
  return <Link to={to}>{children}</Link>;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/reservations",
      element: <Reservation />,
    },
    {
      path: "/orderonline",
      element: <OrderOnline />,
    },
    {
      path: "/", // Add a default route for the main page
      element: (
        <>
          <header className="header">
            <div className="logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xjqfd-a3OkztApjawJEmtnSu_zH8esiAJRz8e3G-w8TGh_JWvKA8OM4aZvwEX3ZOcQ"
                alt="Little Lemon Logo"
              />
            </div>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/orderonline">OrderOnline</Link>
              <Link to="/reservations">Reservations</Link>
              <Link to="/login">Login</Link>
            </nav>
          </header>

          <section className="hero">
            <div className="hero-content">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              {/* <button className="reserve-button">Reserve a Table</button> */}
              <ButtonLink className="reserve-button" to="/reservations">Reserve a table</ButtonLink>
            </div>
            <div className="hero-image">
              <img src="./restauranfood.jpg" alt="A person holding a plate of food" />
            </div>
          </section>

          <section className="specials">
            <div className="specials-header">
              <h2>This weeks specials!</h2>
              <ButtonLink className="menu-button" to="/orderonline">Online Menu</ButtonLink>
            </div>
            <div className="specials-grid">
              <div className="special-item">
                <img src="./greek salad.jpg" alt="Greek Salad" />
                <h3>Greek Salad</h3>
                <p className="price">$12.99</p>
                <p className="description">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <ButtonLink className="order-button" to="/orderonline">
                  Order a delivery <span>&rarr;</span>
                </ButtonLink>
              </div>
              <div className="special-item">
                <img src="./bruchetta.svg" alt="Bruschetta" />
                <h3>Bruschetta</h3>
                <p className="price">$5.99</p>
                <p className="description">
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <ButtonLink className="order-button" to="/orderonline">
                  Order a delivery <span>&rarr;</span>
                </ButtonLink>
              </div>
              <div className="special-item">
                <img src="./lemon dessert.jpg" alt="Lemon Dessert" width="349px" />
                <h3>Lemon Dessert</h3>
                <p className="price">$5.00</p>
                <p className="description">
                  This comes straight from grandma's recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <ButtonLink className="order-button" to="/orderonline">
                  Order a delivery <span>&rarr;</span>
                </ButtonLink>
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <Helmet>
        <title>Little Lemon - Chicago Mediterranean Restaurant</title>
        <meta
          name="description"
          content="Little Lemon is a family-owned Mediterranean restaurant in Chicago. We focus on traditional recipes with a modern twist. Reserve a table or order online!"
        />
        <meta
          name="keywords"
          content="Little Lemon, Chicago, Mediterranean, Restaurant, Food, Greek Salad, Bruschetta, Lemon Dessert, Reserve, Order Online, Family Restaurant"
        />
        <meta
          property="og:title"
          content="Little Lemon - Chicago Mediterranean Restaurant"
        />
        <meta
          property="og:description"
          content="Little Lemon is a family-owned Mediterranean restaurant in Chicago. We focus on traditional recipes with a modern twist. Reserve a table or order online!"
        />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf67o2CHvAbHo_ssd-fDuie02U-2GlDcTa7w&s"
        />
        <meta property="og:url" content="YOUR_WEBSITE_URL" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Little Lemon - Chicago Mediterranean Restaurant"
        />
        <meta
          name="twitter:description"
          content="Little Lemon is a family-owned Mediterranean restaurant in Chicago. We focus on traditional recipes with a modern twist. Reserve a table or order online!"
        />
      </Helmet>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;