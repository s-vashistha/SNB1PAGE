import React, { useState } from 'react';
import Slider from 'react-slick'; // Import react-slick Slider
import app1 from '../../assets/app1.png';
import app2 from '../../assets/app2.png';
import app3 from '../../assets/app3.png';
import app4 from '../../assets/app4.png';
import tick from '../../assets/tick.png';
import './Features.css'; // Ensure this has the necessary styles

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the active slide

  const sliderSettings = {
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update the current slide index
  };

  return (
    <div className="Reasons" id="reasons">
      {/* Left Section - React Slick Slider */}
      <div className="left-r">
        <Slider {...sliderSettings}>
          <div>
            <img src={app1} alt="App 1" />
          </div>
          <div>
            <img src={app2} alt="App 2" />
          </div>
          <div>
            <img src={app3} alt="App 3" />
          </div>
          <div>
            <img src={app4} alt="App 4" />
          </div>
        </Slider>

        {/* Custom Dash Indicators */}
        <div className="custom-dash-container">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`dash ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Features Text */}
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>OVER 150+ EXPERT VETS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>IMPROVEMENT IN PETS HEALTH</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE MAINTENANCE SERVICE FOR NEW CUSTOMERS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
