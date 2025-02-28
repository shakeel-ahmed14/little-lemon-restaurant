import React from 'react';
import '../About.css'; // Create About.css for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Little Lemon</h1>
      <div className="about-content">
        <p>
          Welcome to Little Lemon, a family-owned Mediterranean restaurant located in the heart of Chicago. We're passionate about bringing you the vibrant flavors of the Mediterranean with a modern twist.
        </p>
        <p>
          Our journey began with a simple desire to share the rich culinary traditions of our heritage. We believe in using fresh, high-quality ingredients to create dishes that are both delicious and nourishing.
        </p>
        <p>
          At Little Lemon, you'll find a warm and inviting atmosphere where you can enjoy a memorable dining experience with friends and family. From our signature Greek Salad to our mouthwatering Lemon Dessert, each dish is crafted with care and attention to detail.
        </p>
        <p>
          We're committed to providing exceptional service and creating a welcoming space for our community. Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, we look forward to serving you.
        </p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/Maria.jpg" alt="Chef 1" className="team-photo" /> {/* Replace with your chef images */}
            <h3>Chef Maria</h3>
            <p>Head Chef</p>
          </div>
          <div className="team-member">
            <img src="/Alex.jpg" alt="Chef 2" className="team-photo" />
            <h3>Chef Alex</h3>
            <p>Sous Chef</p>
          </div>
          <div className="team-member">
            <img src="/Sarah.jpeg" alt="Manager" className="team-photo" />
            <h3>Sarah Jones</h3>
            <p>Restaurant Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;