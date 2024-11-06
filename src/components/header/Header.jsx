import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Bars from '../../assets/bars.png';
// Import Bootstrap first // Import Bootstrap first
import './Header.css';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
        <h2>Smart Neckband Device</h2>
        {menuOpened === false && mobile === true ? (
          <div style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px'
          }}
            onClick={() => setMenuOpened(true)}
          >
            <img 
              src={Bars} 
              alt="" 
              style={{
                width: '1.5rem', 
                height: '1.5rem'
              }}
            /> 
          </div>
          ) : (
          <ul className="header-menu">
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                activeClass="active"
                to='home'
                span={true}
                smooth={true}
              >
               Smart Neckband
              </Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link 
                onClick={() => setMenuOpened(false)}
                to='contacts'
                span={true}
                smooth={true}
              >
               Get In Touch
              </Link>
            </li>
            <li>
            <Link 
                onClick={() => setMenuOpened(false)}
                to='programs'
                span={true}
                smooth={true}
              >
                Buy Now
              </Link>
            </li>
            <li>
            <Link 
                onClick={() => setMenuOpened(false)}
                to='testimonials'
                span={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
          
           
            </ul>
        )}
    </div>
  )
}

export default Header