import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function PricingCard({ plan }) {
  return (
    <div className={`pricing-card ${plan.popular ? "popular-card" : ""}`}>
      {plan.popular && <div className="popular-badge">MOST POPULAR</div>}

      <h2 style={{ color: plan.color }}>{plan.name}</h2>

      <p className="plan-description">{plan.description}</p>

      <div className="price-section">
        <h1>{plan.price}</h1>

        <span>{plan.duration}</span>
      </div>

      {plan.monthly && <p className="monthly-price">{plan.monthly}</p>}

      {plan.save && <p className="save-price">{plan.save}</p>}

      <button className="plan-button" style={{ background: plan.color }}>
        {plan.button}
      </button>

      <div className="features">
        {plan.features.map((feature, index) => (
          <div key={index} className="feature available">
            <FaCheckCircle />

            <span>{feature}</span>
          </div>
        ))}

        {plan.unavailable.map((feature, index) => (
          <div key={index} className="feature unavailable">
            <FaTimesCircle />

            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
