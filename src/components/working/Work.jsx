import React from 'react';
import working from '../../assets/working.png'
import './Work.css'; // Import the external CSS file

const Work = () => {
  return (
    <div className="image-container">
      <span className="stroke-text heading">How does it Work?</span>
      <img src={working} alt="" className="responsive-image" />
    </div>
  );
};

export default Work;
