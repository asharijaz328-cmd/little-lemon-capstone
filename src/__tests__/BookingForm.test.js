import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from '../pages/BookingPage';

test('booking form heading is visible', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={['17:00', '18:00']} onDateChange={() => {}} onSubmit={() => {}} />
    </MemoryRouter>
  );
  expect(screen.getByText(/make a reservation/i)).toBeInTheDocument();
});

test('initializeTimes gives back an array with times', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns new slots when a date is passed', () => {
  const result = updateTimes(['17:00'], { type: 'UPDATE_TIMES', payload: '2024-12-25' });
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes does not change state for unknown action', () => {
  const state = ['18:00', '20:00'];
  expect(updateTimes(state, { type: 'NOOP' })).toBe(state);
});

test('empty name shows an error message', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={['17:00']} onDateChange={() => {}} onSubmit={() => {}} />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByRole('button', { name: /reserve a table/i }));
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
});

test('bad email triggers a validation error', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={['17:00']} onDateChange={() => {}} onSubmit={() => {}} />
    </MemoryRouter>
  );
  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Alex' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'notvalid' } });
  fireEvent.click(screen.getByRole('button', { name: /reserve a table/i }));
  expect(screen.getByText(/valid email/i)).toBeInTheDocument();
});

test('every input has a label', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={['17:00', '18:00']} onDateChange={() => {}} onSubmit={() => {}} />
    </MemoryRouter>
  );
  expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/reservation date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/reservation time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

test('onSubmit fires when the form is valid', () => {
  const mockFn = jest.fn();
  render(
    <MemoryRouter>
      <BookingForm availableTimes={['17:00']} onDateChange={() => {}} onSubmit={mockFn} />
    </MemoryRouter>
  );
  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Alex' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'alex@test.com' } });
  fireEvent.click(screen.getByRole('button', { name: /reserve a table/i }));
  expect(mockFn).toHaveBeenCalledTimes(1);
});
