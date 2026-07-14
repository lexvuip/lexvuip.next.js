'use client';
import React from 'react';
import './TargetCustomers.css';

const TargetCustomers = () => {
  const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';

  // We only show this section for the IN region based on the prompt
  if (region !== 'IN') {
    return null;
  }

  const customers = [
    'Startups',
    'Inventors',
    'Individual Inventors',
    'Educational Institutes'
  ];

  return (
    <section className="target-customers-section">
      <div className="target-customers-content">
        <h2 className="target-customers-title">Who We Serve in India</h2>
        <p className="target-customers-description">
          We provide tailored Intellectual Property and Legal services to innovators across the ecosystem.
        </p>
        <div className="target-customers-list">
          {customers.map((customer, idx) => (
            <div key={idx} className="target-customer-badge">
              {customer}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetCustomers;
