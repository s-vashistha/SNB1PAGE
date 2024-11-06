//footer.jsx
import React from 'react';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Rid from '../../assets/Rid.png';
// Import Bootstrap first // Import Bootstrap first
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram} alt=""/>
                <img src={LinkedIn} alt=""/>
            </div>
            <div className="social-links">
            <p>WhatsApp: +91- 9667229080  </p>                                      
            <p>How may I help: +91-9667229080</p>
            <p>Website: www.myanimal.in. </p>                                         
            <p> www.infoigy.com</p>
            <p>Email ID: info@infoigy.com</p>
</div>
            </div>
            <div className="logo-f">
                <img src={Rid} alt=""/>
            </div>
        
        {/* <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div> */}
    </div>
  )
}

export default Footer;