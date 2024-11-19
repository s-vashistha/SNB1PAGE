import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';

const Features = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Primary Health Parameters",
      details: ["Body Temperature", "Heart Rate", "SPO2"],
      path: "/primary" // Path to navigate
    },
    // Add more categories if needed
    {
      name: "Activity Monitoring",
      details: ["Location & Geo Fencing", "Feeding", "Sitting", "Standing", "Resting", "Remuniation"],
      path: "/am" // Path to navigate
    },
    // Add more categories if needed
    {
      name: "Health Alert(For female animals)",
      details: ["Heat Cycle","Lactation", "Gestation", "Insemination window" ],
      path: "/healthalert" // Path to navigate
    },
    // Add more categories if needed
  ];

  return (
    <div className="features-container">
      <div className="features-header">
            <span className="section-heading"> OUR FEATURES</span>
        </div>
     
     
      <div className="cards">
        {categories.map((category, index) => (
          <div key={index} className="card">
            <h3>{category.name}</h3>
            <ul>
              {category.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <button onClick={() => navigate(category.path)}>Click Here</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
