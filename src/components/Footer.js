import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el2 = document.getElementById(id);
        if (el2) el2.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="ll-footer">
      <div className="ll-footer-grid">

        <div className="ll-footer-col">
          <p className="ll-brand">🍋 Little Lemon</p>
          <p className="ll-tagline">Family owned · Mediterranean · Chicago</p>
        </div>

        <div className="ll-footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><button className="ll-footer-btn" onClick={() => scrollTo('about')}>About</button></li>
            <li><button className="ll-footer-btn" onClick={() => scrollTo('specials')}>Menu</button></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><button className="ll-footer-btn" onClick={() => scrollTo('specials')}>Order Online</button></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="ll-footer-col">
          <h4>Contact</h4>
          <address>
            <p>123 Lemon St, Chicago IL 60601</p>
            <p>(312) 555-0198</p>
            <p>hello@littlelemon.com</p>
          </address>
        </div>

        <div className="ll-footer-col">
          <h4>Social</h4>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>

      </div>
      <p className="ll-copy">&copy; 2026 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
