import React from 'react';
import hero_image_back from "../../assets/hero_image_back.png";
import app1 from "../../assets/app1.png";
import app2 from "../../assets/app2.png";
import app3 from "../../assets/app3.png";
import app4 from "../../assets/app4.png";
import Rid from "../../assets/Rid.png";
import tick from "../../assets/tick.png";
// Import Bootstrap first // Import Bootstrap first
import './Reasons.css';

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={app1} alt="" />
            <img src={app2} alt="" />
            <img src={app3} alt="" />
            <img src={app4} alt="" />
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