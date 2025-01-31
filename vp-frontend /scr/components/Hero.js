import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Empowering Businesses with Smart Financial Solutions</h1>
        <p>AI-driven fraud detection, automated accounting, and secure transactions for your business.</p>
        <a href="#services" className="btn">Explore Our Services</a>
      </div>
    </section>
  );
};

export default Hero;