# Little Lemon Restaurant - Capstone Project

This is my final project for the Meta Front-End Developer Professional Certificate. It is a responsive React web app for Little Lemon where customers can browse our menu, learn about the restaurant and reserve a table online.

## What is inside

- **Home Page**: Hero banner with booking button, weekly specials with food cards, customer testimonials and our story in the about section
- **Booking Flow**: Table reservation form at `/booking` with live date picker and dynamically loaded time slots
- **Form Validation**: Client-side checks for name, email format, valid date and party size (1 to 10 guests)
- **Confirmation Screen**: Friendly success screen shown at `/confirmed` after submitting
- **Accessibility**: Semantic HTML5 elements (`nav`, `main`, `section`, `article`, `footer`), descriptive labels tied to every input and `role="alert"` for errors
- **Automated Tests**: 8 unit tests written with React Testing Library and Jest covering validation, form rendering and reducer updates

## Tech used

- React 18
- React Router v6
- CSS modules with responsive flexbox and grid layouts
- Jest and React Testing Library

## How to run it locally

First install the packages:

```bash
npm install
```

Then start the local development server:

```bash
npm start
```

The app will be running at [http://localhost:9000](http://localhost:9000).

## Running the tests

To execute the unit test suite:

```bash
npm test
```

All 8 tests should pass without warnings.

## State Management

The available booking times are handled using React's `useReducer` hook inside `BookingPage.js`. When a user picks a different date, `updateTimes` calls the `fetchAPI` function with that date and refreshes the dropdown list with open slots. Submitting sends the form values through `submitAPI` and redirects to the confirmation page.
