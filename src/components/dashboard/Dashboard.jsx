import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';
import NumberCounter from 'number-counter';
import hero_image_back from '../../assets/hero_image_back.png';
import SNB from '../../assets/SNB.png';
import './Dashboard.css';

const Dashboard = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    // const [menuOpened, setMenuOpened] = useState(false);

 
    
    return (
        <>
        
            <div className="hero" id="home">
                <div className="blur hero-blur"></div>
                <div className="left-h">

                    <div className="hero-text">
                         <div>
                            <span className="stroke-text-main">Monitor Health <br />&</span>
                            <span> Fitness <br/>
                            Of Your Pet.</span>
                        </div>  
                        
                        {/* <div>
                            <span >
                                Here we will help you <br/>to take good <br/>care of your pet.
                            </span>
                        </div> */}
                    </div>
                    <div className="the-best-ad">
                        <motion.div
                            initial={{ left: mobile ? "165px" : "238px" }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: "tween" }}
                        ></motion.div>
                        <span>the best device to monitor your animal health.</span>
                    </div>
                    
                    <div className="figures">
                        <div>
                            <span>
                                <NumberCounter end={140} start={69} delay="3" preFix="+" />
                            </span>
                            <span>Expert vets</span>
                        </div>
                        <div>
                            <span>
                                <NumberCounter end={978} start={779} delay="3" preFix="+" />
                            </span>
                            <span>Buyers</span>
                        </div>
                        <div>
                            <span>
                                <NumberCounter end={50} start={10} delay="3" preFix="+" />
                            </span>
                            <span>Our features</span>
                        </div>
                    </div>
                    <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                    {/* <a
                        href="https://smartneckband.in/public/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <button className="btn">Get Started</button>
                    </a>
                        
                        <ScrollLink onClick={() => setMenuOpened(false)} to="aboutus" smooth={true}>
                        <button className="btn">Learn More</button></ScrollLink> */}
                       
                    </div>
                </div>

                <div className="right-h">
                <motion.img
                        initial={{ right: '-10rem' }}
                        whileInView={{ right: "5rem" }}
                        transition={transition}
                        src={SNB}
                        alt=""
                        className="hero-image-back"
                    />
                {/* <img src={SNB} alt="" className="hero-image" /> */}
                    <motion.img
                        initial={{ right: '9rem' }}
                        whileInView={{ right: "17rem" }}
                        transition={transition}
                        src={hero_image_back}
                        alt=""
                        className="hero-image-back"
                    />
                {/* <div className="health-metrics">
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
                   
                        {/* Jaw Movement 
                        <motion.div
                        initial={{ right: "23rem" }}
                        whileInView={{ right: "6rem" }}
                        transition={transition}
                        className="jaw-movement"
                    >
                        <img src={Jaw} alt=""/>
                        <div>
                            <span>Jaw Movement</span>
                            <span>Active</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ right: "40rem" }}
                        whileInView={{ right: "24rem" }}
                        transition={transition}
                        className="SpO2"
                    >
                        <img src={SpO2} alt="" />
                        <div>
                            <span>SpO2</span>
                            <span>110</span>
                        </div>
                    </motion.div>

                    {/* /* Body Temperature 
                     <motion.div
                        initial={{ right: "-1rem" }}
                        whileInView={{ right: "14rem" }}
                        transition={transition}
                        className="temperature"
                    >
                        <img src={Temperature} alt=""/>
                        <div>
                            <span>Body Temperature</span>
                            <span>38°C</span>
                        </div>
                    </motion.div>
                    </div>*/}

                
                    </div>
            </div>
    </>
    )
}

export default Dashboard;
