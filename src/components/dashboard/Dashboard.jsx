// Import Bootstrap first // Import Bootstrap first
import NumberCounter from 'number-counter';
import React from 'react';
import Heart from '../../assets/heart.png';
import hero_image_back from '../../assets/hero_image_back.png';
import SNB from '../../assets/SNB.png';
import SpO2 from '../../assets/SpO2.png';
import Header from '../header/Header';
import './Dashboard.css';

import { motion } from 'framer-motion';
 
const Dashboard = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false;
    

    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{left: mobile ? "165px" : "238px"}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: "tween"}}
                    ></motion.div>
                    <span>the best device to monitor your animal health.</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Monitor Health <br/>&</span>
                        <span> Fitness</span>
                    </div>
                    <div>
                        <span>Of Your Pet.</span>
                    </div>
                    <div>
                        <span>
                            Here we will help you to take good care of your pet.
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter 
                                end={140} 
                                start={69} 
                                delay="3"
                                preFix="+" 
                            />
                        </span>
                        <span>Expert vets</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter 
                                end={978} 
                                start={779} 
                                delay="3"
                                preFix="+" 
                            />
                        </span>
                        <span>Buyers</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter 
                                end={50} 
                                start={10} 
                                delay="3"
                                preFix="+" 
                            />
                        </span>
                        <span>Our features</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>

            <div className="right-h">
                <button  className="btn btn-primary">Login/Sign up </button>
                <motion.div 
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={SNB} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: "24rem" }}
                    transition={transition}
                    src={hero_image_back} 
                    alt=""
                    className="hero-image-back" 
                />
                <motion.div 
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="SpO2"
                >
                    <img src={SpO2} alt=""/>
                    <div>
                        <span>SpO2</span>
                        <span>110 </span>
                    </div>
                </motion.div>    
            </div>
        </div>
  )
}

export default Dashboard;