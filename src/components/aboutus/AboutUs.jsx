import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import "./AboutUs.css";

const paragraphs = [
  "A smart Neckband is a wearable device that serves multifaceted functions, encompassing vital signs monitoring, activity tracking, location tracking, behavioural analysis, fertility particularly in dairy cattle.",
  "Utilising machine learning models & sophisticated analytics to transform data into practical guidance for pet owners, veterinary professionals & researchers.",
  "The wireless & GSM-based device is typically worn around the neck of the animal and is equipped with various sensors which monitor health, and behaviour that measures key reproductive parameters, such as body temperature, heart rate, activity level, and rumination patterns.",
  "The data collected by the smart neckband is then transmitted to the animal owner's smartphone or computer, enabling real-time tracking and monitoring of the animal's health.",
  "The device uses advanced technologies such as AI/ML algorithms to analyse the health data and provide valuable insights into the animal's health report.",
];

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % paragraphs.length);
    }, 4000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % paragraphs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? paragraphs.length - 1 : prevSlide - 1
    );
  };

  return (
    <section id="aboutus" style={{ backgroundColor: "#5128681c" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="about-container" style={{ height: "auto" }}>
          {/* Carousel Section */}
          <div className="about-carousel-container">
            <Carousel
              showArrows={false}
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3000}
            >
              <div>
                <img src={image1} alt="Image 1" />
              </div>
              <div>
                <img src={image2} alt="Image 2" />
              </div>
              <div>
                <img src={image3} alt="Image 3" />
              </div>
            </Carousel>
          </div>

          {/* About Us Text Content with Carousel Effect */}
          <div className="about-content" style={{backgroundColor:"white"}}>
            <div className="about-header">
              <span className="section-heading">ABOUT US</span>
            </div>

            <div className="about-text-content" style={{ textAlign: "left" }}>
              <p className="about-paragraph">
                {/* Add your content here */}A smart Neckband is a wearable
                device that serves multifaceted functions, encompassing vital
                signs monitoring, activity tracking, location tracking,
                behavioural analysis, fertility particularly in dairy cattles.
              

                Utilising machine learning models & sophisticated analytics to
                transform data into practical guidance for pet owners,
                veterinary professionals & researchers The wireless & GSM-based
                device is typically worn around the neck of the animal and is
                equipped with various sensors which monitor health, and
                behaviour that measures key reproductive parameters, such as
                body temperature, heart rate, activity level, and rumination
                patterns. The data collected by the smart neckband is then
                transmitted to the animal owner's smartphone or computer,
                enabling real-time tracking and monitoring of the animal's
                health. The device uses advanced technologies such as AI/ML
                algorithms to analyse the health data and provide valuable
                insights into the animal's health report.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;