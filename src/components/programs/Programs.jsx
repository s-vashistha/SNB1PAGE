import React from 'react';
import whiteTick from '../../assets/whiteTick.png';
import { programsData } from '../../data/programsData';
// Import Bootstrap first // Import Bootstrap first
import './Programs.css';

const Programs = () => {
  return (
    <div className="programs-container">
        <div className="blur programs-blur-1"></div>
        <div className="blur programs-blur-2"></div>

        <div className="programs-header">
            <span className="stroke-text">EXPLORE OUR PROGRAMS</span>
        </div>
          
        <div className="programs">
            {programsData.map((program, i) => (
                <div className="program" key={i}>
                    {program.icon}
                    <span>{program.name}</span>
                    <span>@{program.price}/-</span>

                    <div className="features">
                    {program.features.map((feature, i) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                    </div>     
                    <div>
                        <span>See more benefits -</span>
                    </div>    
                    <button className="btn">Email now</button>
                </div>  
            ))}
        </div>
    </div>
  )
}

export default Programs