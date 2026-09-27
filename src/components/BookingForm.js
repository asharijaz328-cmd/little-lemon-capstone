import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, onDateChange, onSubmit }) {
  const today = new Date().toISOString().split('T')[0];

  const [fields, setFields] = useState({
    name: '',
    email: '',
    date: today,
    time: availableTimes[0] || '17:00',
    guests: 2,
    occasion: 'Birthday',
  });

  const [errors, setErrors] = useState({});

  const checkValid = (data) => {
    const err = {};
    if (!data.name.trim()) err.name = 'Name is required';
    if (!data.email.trim()) {
      err.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      err.email = 'Please enter a valid email address';
    }
    if (!data.date) err.date = 'Please pick a date';
    if (!data.time) err.time = 'Please pick a time';
    if (data.guests < 1 || data.guests > 10) err.guests = 'Enter a number between 1 and 10';
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: name === 'guests' ? Number(value) : value };
    setFields(updated);
    if (name === 'date') onDateChange(value);
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = checkValid(fields);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    onSubmit(fields);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate aria-label="Table reservation form">
      <h2>Make a Reservation</h2>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={fields.name}
          onChange={handleChange}
          placeholder="e.g. Sarah Johnson"
          aria-required="true"
          aria-describedby={errors.name ? 'name-err' : undefined}
        />
        {errors.name && <span id="name-err" className="err" role="alert">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="sarah@example.com"
          aria-required="true"
          aria-describedby={errors.email ? 'email-err' : undefined}
        />
        {errors.email && <span id="email-err" className="err" role="alert">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Reservation Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={fields.date}
          min={today}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.date ? 'date-err' : undefined}
        />
        {errors.date && <span id="date-err" className="err" role="alert">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="time">Reservation Time</label>
        <select
          id="time"
          name="time"
          value={fields.time}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.time ? 'time-err' : undefined}
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.time && <span id="time-err" className="err" role="alert">{errors.time}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={fields.guests}
          min="1"
          max="10"
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.guests ? 'guests-err' : undefined}
        />
        {errors.guests && <span id="guests-err" className="err" role="alert">{errors.guests}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={fields.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Business Dinner</option>
          <option>Other</option>
        </select>
      </div>

      <button type="submit" className="submit-btn" aria-label="Reserve a Table">
        Reserve a Table
      </button>
    </form>
  );
}

export default BookingForm;
