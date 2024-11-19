import React from 'react';   
import Cover3 from '../../assets/cover3.png';
import Cover4 from '../../assets/cover4.png';
import Cover5 from '../../assets/cover5.png';
import Cover6 from '../../assets/cover6.png';
import { Card } from 'react-bootstrap';

import './Workcard.css';

const Workcard = () => {
  return (
    <div className="card-deck">
      {/* First Card */}
      <Card>
        <Card.Img variant="top" src={Cover3} className="card-image" />
        <Card.Body>
          <Card.Text>
            <h3>Smart Neckband Data Collection</h3>
            <p>Our IoT Smart Neckbands capture real-time data on health metrics like heart rate and body temperature, sending it to the cloud.</p>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Second Card */}
      <Card>
        <Card.Img variant="top" src={Cover4} className="card-image" />
        <Card.Body>
          <Card.Text>
            <h3>Cloud Processing</h3>
            <p>In the cloud, AI and Machine Learning algorithms process, classify, and convert raw data into actionable insights.</p> 
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Third Card */}
      <Card>
        <Card.Img variant="top" src={Cover5} className="card-image" />
        <Card.Body>
          <Card.Text>
            <h3>Instant Access on Your Devices</h3>
            <p>Users receive health insights on their smartphones and computers, allowing real-time monitoring from anywhere.</p>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Fourth Card */}
      <Card>
        <Card.Img variant="top" src={Cover6} className="card-image" />
        <Card.Body>
          <Card.Text>
            This fourth card has text below the image, with unique content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Workcard;
