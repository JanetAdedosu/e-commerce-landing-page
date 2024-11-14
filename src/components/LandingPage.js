import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <h1>♾️ StarJane E-commerce</h1>
        <img src="/pexels-karolina-grabowska-5632402.jpg" alt="public" />
        <p>Shop for various products, read reviews, and pay seamlessly with PayPal.</p>
        <a href="https://github.com/JanetAdedosu/StarJane" className="btn">View on GitHub</a>
      </header>
      {/* neww */}
      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>🛍️ Diverse Product Range</li>
          <li>⭐ Customer Reviews</li>
          <li>💳 Secure Payment with PayPal</li>
          <li>📦 Fast Shipping</li>
        </ul>
      </section>
      {/* Screenshot Gallery */}
       <section className="gallery">
        <h2>Explore the Interface</h2>
        <div className="screenshots">
          <img src="Screenshot 2024-11-13 at 18.22.46.png" alt="Home" />
          <img src="Screenshot 2024-11-13 at 22.00.45.png" alt="Shopping Cart" />
          <img src="Screenshot 2024-11-13 at 18.14.30.png" alt="Shipping Address" />
          <img src="Screenshot 2024-11-13 at 18.14.51.png" alt="Payment Method" />
        </div>
      </section>
      </div>
  )
}
export default LandingPage;