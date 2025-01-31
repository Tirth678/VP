import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service-container">
        <div className="service">
          <h3>AI Fraud Detection</h3>
          <p>Prevent fraud in real-time with our AI-driven security solutions.</p>
        </div>
        <div className="service">
          <h3>Automated Accounting</h3>
          <p>Manage your finances effortlessly with AI-powered automation.</p>
        </div>
        <div className="service">
          <h3>Secure Transactions</h3>
          <p>Ensure end-to-end encryption for safe digital payments.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;