import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
    <nav className="ll-navbar">
      <div className="ll-nav-inner">
        <Link
          to="/"
          style={{
            fontFamily: 'serif',
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#495E57',
            textDecoration: 'none',
          }}
        >
          🍋 Little Lemon
        </Link>
        <ul className="ll-nav-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink></li>
          <li><button className="nav-btn" onClick={() => scrollTo('about')}>About</button></li>
          <li><button className="nav-btn" onClick={() => scrollTo('specials')}>Menu</button></li>
          <li><NavLink to="/booking" className={({ isActive }) => isActive ? 'nav-active' : ''}>Reservations</NavLink></li>
          <li><button className="nav-btn" onClick={() => scrollTo('specials')}>Order Online</button></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
