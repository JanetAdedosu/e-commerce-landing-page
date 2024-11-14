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
      </div>
  )
}
export default LandingPage;