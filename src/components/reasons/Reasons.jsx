import React from 'react';
import hero_image_back from "../../assets/hero_image_back.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import Rid from "../../assets/Rid.png";
import tick from "../../assets/tick.png";
// Import Bootstrap first // Import Bootstrap first
import './Reasons.css';

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className="stroke-text">why</span>
                <span> choose us?</span>
            </div>
            <div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt=""></img>
                        <span>OVER 150+ EXPERT VETS</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>IMPROVEMENT IN PETS HEALTH</span>
                    </div> 
                    <div>
                        <img src={tick} alt=""></img>
                        <span>1 FREE MAINTENANCE SERVICE FOR NEW CUSTOMER</span>
                    </div>
                </div>
            </div>
            <span style={{
                color: 'var(--gray)',
                fontWeight: "normal,"
            }}>
                
            </span>
            <div className="partners">
                <img src={hero_image_back} alt="" />
                <img src={Rid} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons