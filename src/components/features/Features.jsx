import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css'; // Ensure updated styles are included

const Features = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Powerful Dashboard",
      description: "A centralized and easy-to-use dashboard to manage everything effectively.",
      svgLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/FPT_Dashboard_Logo.svg/1200px-FPT_Dashboard_Logo.svg.png", // Public URL for dashboard icon
      path: "/primary",
    },
    {
      name: "User Friendly",
      description: "Simple and intuitive design for better user experience.",
      svgLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Icon_tools.svg/1024px-Icon_tools.svg.png", // Public URL for user-friendly icon
      path: "/am",
    },
    {
      name: "Smart Notifications",
      description: "Real-time notifications to keep you updated.",
      svgLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bell_Icon.svg/1024px-Bell_Icon.svg.png", // Public URL for notifications icon
      path: "/healthalert",
    },
  ];

  return (
    <div>
      <div
        className="features-container"
        style={{ backgroundColor: "rgba(81, 40, 104, 0.11)", padding: "20px" }}
      >
        <div className="features-header" style={{ textAlign: "center", marginBottom: "30px" }}>
          <span className="section-heading" style={{ fontSize: "2rem", fontWeight: "bold", color: "#512868" }}>
            OUR FEATURES
          </span>
        </div>

        <div className="cards" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {categories.map((category, index) => (
            <div
              key={index}
              className="card"
              style={{
                cursor: "pointer",
                padding: "20px",
                margin: "10px",
                borderRadius: "8px",
                backgroundColor: "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                width: "250px",
              }}
              onClick={() => navigate(category.path)}
            >
              {/* SVG Logo */}
              <div style={{ marginBottom: "15px" }}>
                <img
                  src={category.svgLogo}
                  alt={`${category.name} Logo`}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>

              {/* Title */}
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#512868", marginBottom: "10px" }}>
                {category.name}
              </div>

              {/* Description */}
              <div style={{ fontSize: "1rem", color: "#6c757d" }}>
                {category.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
