import { motion } from 'framer-motion';
import React, { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';

const Testimonials = () => {
    const transition = { type: 'spring', duration: 3 };

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="testimonials">
            {/* Left Section */}
            <div className="left-t">
                <span className="section-heading">Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span>{' '}
                    - {testimonialsData[selected].status}
                </span>
            </div>

            {/* Arrows Section */}
            <div className="arrows">
                <img
                    onClick={() => {
                        selected === 0
                            ? setSelected(tLength - 1)
                            : setSelected((prev) => prev - 1);
                    }}
                    src={leftArrow}
                    alt="Previous Testimonial"
                    role="button"
                    aria-label="Previous Testimonial"
                />
                <img
                    onClick={() => {
                        selected === tLength - 1
                            ? setSelected(0)
                            : setSelected((prev) => prev + 1);
                    }}
                    src={rightArrow}
                    alt="Next Testimonial"
                    role="button"
                    aria-label="Next Testimonial"
                />
            </div>

            {/* Right Section */}
            <div className="right-t">
                {/* Background Layers */}
                <div className="background-layer-1"></div>
                <div className="background-layer-2"></div>

                {/* Main Image */}
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image}
                    alt="Testimonial"
                />
            </div>
        </div>
    );
};

export default Testimonials;
