# Little Lemon – Table Booking App

A React web application for Little Lemon restaurant that lets customers reserve tables online. This is the final capstone project for the Meta Front-End Developer Certificate.

## Features

- Browse the restaurant homepage with specials, testimonials, and about sections
- Reserve a table using the interactive booking form
- Dynamic time slot availability based on selected date
- Form validation with helpful error messages
- Fully accessible (ARIA labels, semantic HTML)
- Responsive design for desktop and mobile

## Tech Stack

- React 18 with React Router v6
- `useReducer` for managing available time slots
- Custom form validation
- CSS Modules (plain CSS per component)
- Jest + React Testing Library for unit tests

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Setup

```bash
# Install dependencies
npm install

# Start dev server on port 9000
npm start
```

Then open [http://localhost:9000](http://localhost:9000) in your browser.

### Running Tests

```bash
npm test
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js / Navbar.css
│   ├── Hero.js / Hero.css
│   ├── Specials.js / Specials.css
│   ├── Testimonials.js / Testimonials.css
│   ├── About.js / About.css
│   ├── BookingForm.js / BookingForm.css
│   └── Footer.js / Footer.css
├── pages/
│   ├── HomePage.js
│   ├── BookingPage.js / BookingPage.css
│   └── ConfirmedBooking.js / ConfirmedBooking.css
├── __tests__/
│   └── BookingForm.test.js
├── api.js (fetchAPI + submitAPI)
└── App.js
```

## API Functions

- `fetchAPI(date)` — returns an array of available time strings for a given date
- `submitAPI(formData)` — submits booking data and returns `true` on success

## Accessibility

All interactive elements have appropriate ARIA labels, form inputs are associated with their labels via `htmlFor`, and error messages use `role="alert"`.
