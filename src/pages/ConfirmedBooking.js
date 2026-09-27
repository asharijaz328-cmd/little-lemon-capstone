import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <main className="confirmed-page" aria-label="Booking confirmed">
      <div className="confirmed-card">
        <div aria-hidden="true" style={{ fontSize: '3.5rem' }}>🍋</div>
        <h1>You&apos;re Booked!</h1>
        <p>
          Thanks for choosing Little Lemon. Your table is confirmed and
          we&apos;ll send a reminder to your email. Can&apos;t wait to see you!
        </p>
        <div className="confirmed-btns">
          <Link to="/" className="btn-green">Back to Home</Link>
          <Link to="/booking" className="btn-yellow">Book Again</Link>
        </div>
      </div>
    </main>
  );
}

export default ConfirmedBooking;
