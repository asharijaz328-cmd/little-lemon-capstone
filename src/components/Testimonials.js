import React from 'react';
import './Testimonials.css';

const people = [
  {
    id: 1,
    name: 'Sophie K.',
    stars: 5,
    text: 'Loved the Greek salad! Fresh ingredients and the staff was super friendly. Definitely coming back.',
    initials: 'SK',
  },
  {
    id: 2,
    name: 'Marcus T.',
    stars: 5,
    text: 'Best bruschetta in Chicago hands down. Cozy place and the staff makes you feel right at home.',
    initials: 'MT',
  },
  {
    id: 3,
    name: 'Priya M.',
    stars: 4,
    text: 'Came here for our anniversary. The lemon dessert was incredible! Really great evening overall.',
    initials: 'PM',
  },
  {
    id: 4,
    name: 'James R.',
    stars: 5,
    text: 'Amazing Mediterranean flavors. Booking online was really smooth and the food did not disappoint.',
    initials: 'JR',
  },
];

function Testimonials() {
  return (
    <section className="testimonials" aria-label="Customer reviews">
      <div className="test-wrap">
        <h2>What Our Guests Say</h2>
        <div className="review-grid">
          {people.map((p) => (
            <article key={p.id} className="review-card">
              <p className="stars" aria-label={`${p.stars} out of 5 stars`}>
                {'★'.repeat(p.stars)}{'☆'.repeat(5 - p.stars)}
              </p>
              <p className="review-text">&ldquo;{p.text}&rdquo;</p>
              <div className="reviewer">
                <span className="avatar" aria-hidden="true">{p.initials}</span>
                <strong>{p.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
