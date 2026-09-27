import React from 'react';
import { Link } from 'react-router-dom';
import './Specials.css';

const menu = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    desc: 'Crispy fresh tomatoes, cucumber, olives and feta tossed in olive oil with oregano. Really good.',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    desc: 'Toasted sourdough with garlic and olive oil then piled with fresh tomatoes and basil. A classic.',
    img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    desc: 'Old family recipe. Refreshing and light — the perfect ending to any Mediterranean meal.',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop',
  },
];

function Specials() {
  return (
    <section className="specials" id="specials" aria-label="This week's specials">
      <div className="specials-wrap">
        <div className="specials-top">
          <h2>This Week&apos;s Specials!</h2>
          <Link to="/" className="menu-link">Online Menu</Link>
        </div>
        <div className="cards-grid">
          {menu.map((item) => (
            <article key={item.id} className="dish-card">
              <img src={item.img} alt={item.name} className="dish-img" loading="lazy" />
              <div className="dish-body">
                <div className="dish-row">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
                <a href="/" aria-label={`Order ${item.name} for delivery`} className="order-link">
                  Order a delivery 🛵
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
