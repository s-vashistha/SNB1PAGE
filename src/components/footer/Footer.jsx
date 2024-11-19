import React from 'react';

import Email from '../../assets/email.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Rid from '../../assets/Rid.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
     
      <div className="logo-f">
        <img src={Rid} alt="Logo" />
      </div>
      <div className="footer-content">
        <div className="social-links">
          
        <a 
      href="https://www.facebook.com/yourpage" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img src={Facebook} alt="Facebook" />
    </a>
          
         <a href='hvhjvh'> <img src={Instagram} alt="Instagram" /></a>
         <a href='hvhjvh'><img src={LinkedIn} alt="LinkedIn" /></a>
          <a href="mailto:infoigy@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={Email} alt="Email" /> </a>
          
        </div>
        <div className="contact-info">
    <div className="contact-item">
        <p><strong>WhatsApp:</strong> +91-9667229080</p>
        <p><strong>How may I help:</strong> +91-9667229080</p>
    </div>
    <div className="contact-item">
        <p><strong>Website:</strong> www.myanimal.in</p>
        <p><strong>Alternative Website:</strong> www.infoigy.com</p>
    </div>
</div>

      </div>
    </div>
  );
};

export default Footer;
