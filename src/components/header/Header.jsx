import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Bars from '../../assets/bars.png';
import Rid from '../../assets/Rid.png';
import Brandname from '../../assets/brandname.png';
import Location1 from '../../assets/location1.png';
import './Header.css';

const Header = () => {
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <img src={Rid} alt="Logo" className="logo-image" />
          <img src={Brandname} alt="Brand Name" className="brandname" />
        </div>
        <ul className={`header-menu ${menuOpened && mobile ? 'open' : ''}`}>
          <li>
            <ScrollLink onClick={() => setMenuOpened(false)} to="aboutus" smooth={true}>
              Smart Neckband
            </ScrollLink>
          </li>
          <li>
            <Link to="/getintouch" onClick={() => setMenuOpened(false)}>
              Get In Touch
            </Link>
          </li>
          <li>
            <a href="https://myanimal.in/ecommerce/" target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </li>
          <li>
            <ScrollLink onClick={() => setMenuOpened(false)} to="testimonials" smooth={true}>
              Testimonials
            </ScrollLink>
          </li>
        </ul>
        <div className="location">
          <img src={Location1} alt="Location" className="location-pin" />
          <span>Select Location</span>
        </div>
        <div className="login-signup">
          <a
            href="https://smartneckband.in/public/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Login/Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
