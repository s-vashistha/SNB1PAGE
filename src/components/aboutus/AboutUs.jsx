import React from "react";
// Import Bootstrap first // Import Bootstrap first
import './AboutUs.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading"> 
        <span className="stroke-text">About Us</span>
        </h2>
      <p className="about-paragraph">
        <p>A smart Neckband is a wearable device that serves multifaceted functions, encompassing vital signs monitoring, activity tracking, location tracking, behavioural analysis, fertility particularly in dairy cattles.</p>
        <p>Utilising machine learning models & sophisticated analytics to transform data into practical guidance for pet owners, veterinary professionals & researchers.</p>
        <p>The wireless & GSM-based device is typically worn around the neck of the animal and is equipped with various sensors which monitor health, and behaviour that measures key reproductive parameters, such as body temperature, heart rate, activity level, and rumination patterns.</p>
        <p>The data collected by the smart neckband is then transmitted to the animal owner's smartphone or computer, enabling real-time tracking and monitoring of the animal's health.</p>
        <p>The device uses advanced technologies such as AI/ML algorithms to analyse the health data and provide valuable insights into the animal's health report.</p>
      </p>
    </div>
  );
};

export default About;
