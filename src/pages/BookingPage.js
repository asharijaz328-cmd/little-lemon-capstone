import React from 'react';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../api';
import './BookingPage.css';

export const initializeTimes = () => fetchAPI(new Date());

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};

function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  const handleSubmit = (data) => {
    const ok = submitAPI(data);
    if (ok) navigate('/confirmed');
  };

  return (
    <main className="booking-page">
      <section className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>Book your spot and enjoy an authentic Mediterranean dining experience.</p>
      </section>
      <section className="form-section" aria-label="Table booking form">
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={handleDateChange}
          onSubmit={handleSubmit}
        />
      </section>
    </main>
  );
}

export default BookingPage;
