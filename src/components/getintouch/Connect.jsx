import React from 'react';
import './Connect.css';

const Connect = () => {
  return (
    <div className="connect-form">
      <h2>Get In Touch With Us!!</h2>
      <p className="subtitle">Connect with us for your Business Requirement</p>
      <p className="description">
        Collaborate with us and we figure out the best solution based on your needs.
      </p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Mobile No." required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Connect;
