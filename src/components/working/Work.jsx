import React from 'react';
import working from '../../assets/working.png';
import './Work.css'; // Import the external CSS file

const Work = () => {
  return (
    <div className="work-container " style={{backgroundColor:"white"}}>
      <div className="image-container">
        <img src={working} alt="Working" className="responsive-image" />
      </div>
      <div className="content">
        <span className="text-bold" style={{color:"black"}}><b>How Does it works?</b></span>
        <p>Smart Neckband Data Collection <br/>Our IoT Smart Neckbands capture real-time data on health metrics like heart rate and body temperature, sending it to the cloud.
<br/><br/>Cloud Processing
<br/>In the cloud, AI and Machine Learning algorithms process, classify, and convert raw data into actionable insights.
<br/><br/>Instant Access on Your Devices

<br/>Users receive health insights on their smartphones and computers, allowing real-time monitoring from anywhere.
</p>
      </div>
    </div>
  );
};

export default Work;
