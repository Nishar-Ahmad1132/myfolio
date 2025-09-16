// src/components/Pricing.js
import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h2>My Plans & Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-item">
            <h3>Basic</h3>
            <p>$50</p>
          </div>
          <div className="pricing-item">
            <h3>Premium</h3>
            <p>$100</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
