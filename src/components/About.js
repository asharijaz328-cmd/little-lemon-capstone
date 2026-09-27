import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about" aria-label="About Little Lemon">
      <div className="about-wrap">
        <div className="about-text">
          <h2>About Us</h2>
          <h3>Little Lemon</h3>
          <p>
            Little Lemon opened in 1995 founded by cousins Mario and Adrian.
            What started as a small neighborhood spot became one of Chicago&apos;s
            most loved Mediterranean restaurants.
          </p>
          <p>
            Great food starts with great ingredients. Every dish is made from scratch
            using locally sourced produce and family recipes that have been passed down
            through the years. Our kitchen runs on passion and good vibes.
          </p>
        </div>
        <div className="about-imgs">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=350&fit=crop"
            alt="Restaurant interior at night"
            className="img-back"
          />
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=270&h=300&fit=crop"
            alt="Chef plating food in the kitchen"
            className="img-front"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
