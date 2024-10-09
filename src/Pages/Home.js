import React from 'react';
import './app.css';

const Home = () => {
  return (
    <div className="profile-page">
      <div className="background">
        <div className="icon-grid m-3">
          <div className="icon"><i className="fas fa-tshirt"></i></div>
          <div className="icon"><i className="fas fa-clock"></i></div>
          <div className="icon"><i className="fas fa-sun"></i></div>
          <div className="icon"><i className="fas fa-gamepad"></i></div>
          <div className="icon"><i className="fas fa-lightbulb"></i></div>
          <div className="icon"><i className="fas fa-mug-hot"></i></div>
          <div className="icon"><i className="fas fa-lipstick"></i></div>
        </div>
      </div>
      <div className="profile-info">
        <div className="profile-header">
          <div className="profile-icon"><i className="fas fa-store"></i></div>
          <h1>GALAXY MANUFACTURERS</h1>
        </div>
        <div className="profile-stats">
          <div className="rating">
            <span className="rating-value">4.0</span> ★
            <span className="rating-count">26,461 Ratings</span>
          </div>
          <div className="followers">
            <span className="followers-count">130</span> Followers
          </div>
          <div className="products">
            <span className="products-count">17</span> Products
          </div>
        </div>
        <div className="trusted-badge">
          <i className="fas fa-shield-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
