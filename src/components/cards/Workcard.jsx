import React from 'react';
import Cover1 from '../../assets/cover1.png';
import Cover3 from '../../assets/cover3.png';
import Cover4 from '../../assets/cover4.png';
import Cover5 from '../../assets/cover5.png';
import Cover6 from '../../assets/cover6.png';

import './Workcard.css';

const Workcard = () => {
  return (
    <div className="card-deck" style={{ marginTop: "100px", marginBottom: "100px" }}>
      {/* First Card */}
      <div className="card">
        <img src={Cover3} alt="Smart Neckband" className="card-image" />
        <div className="card-body">
          <h3>Smart Neckband Data Collection</h3>
          <p>Our IoT Smart Neckbands capture real-time data on health metrics like heart rate and body temperature, sending it to the cloud.</p>
        </div>
      </div>

      {/* Second Card */}
      <div className="card">
        <img src={Cover4} alt="Cloud Processing" className="card-image" />
        <div className="card-body">
          <h3>Cloud Processing</h3>
          <p>In the cloud, AI and Machine Learning algorithms process, classify, and convert raw data into actionable insights.</p>
        </div>
      </div>

      {/* Third Card */}
      <div className="card">
        <img src={Cover5} alt="Instant Access" className="card-image" />
        <div className="card-body">
          <h3>Instant Access on Your Devices</h3>
          <p>Users receive health insights on their smartphones and computers, allowing real-time monitoring from anywhere.</p>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="card">
        <img src={Cover1} alt="Fourth Card" className="card-image" />
        <div className="card-body">
          <p>This fourth card has text below the image, with unique content.</p>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
