import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-label="Little Lemon restaurant intro">
      <div className="hero-wrap">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant focused on traditional
            recipes served with a modern twist. Come join us for an unforgettable
            dining experience in the heart of Chicago.
          </p>
          <Link to="/booking" className="reserve-btn">Reserve a Table</Link>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=500&fit=crop"
            alt="Mediterranean dish with fresh ingredients"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
