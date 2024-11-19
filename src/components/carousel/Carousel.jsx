import React, { useState, useEffect, useRef } from 'react'; 
import './Carousel.css';
import Cover1 from '../../assets/cover1.png';
import Cover2 from '../../assets/cover2.png';
import LeftArrow from '../../assets/left-arrow.png';
import RightArrow from '../../assets/right-arrow.png';

const Carousel = () => {
  const images = [Cover1, Cover2];
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the first real image
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef();

  const extendedImages = [images[images.length - 1], ...images, images[0]]; // Add clones for looping

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsTransitioning(true);
  };

  // Autoplay logic
  useEffect(() => {
    const autoplay = setInterval(nextSlide, 3000);
    return () => clearInterval(autoplay);
  }, []);

  // Handle snapping for seamless looping
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length); // Snap to the last real image
      }, 500); // Match transition duration
    } else if (currentIndex === extendedImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Snap to the first real image
      }, 500); // Match transition duration
    }
  }, [currentIndex, images.length, extendedImages.length]);

  // Reset transition after snapping
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  return (
    <div className="carousel">
      <div className="carousel-arrow left-arrow" onClick={prevSlide}>
        <img src={LeftArrow} alt="Previous" />
      </div>
      <div className="carousel-images-container" ref={carouselRef}>
        <div
          className={`carousel-images ${isTransitioning ? 'transition' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {extendedImages.map((image, index) => (
            <div key={index} className="carousel-image-wrapper">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
              <div className="overlay-text">
              <h1>Revolutionizing Livestock Management with Smart Technology</h1>
      <p>Monitor health, track activity, and optimize resources effortlessly.</p>
      <button>Explore Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-arrow right-arrow" onClick={nextSlide}>
        <img src={RightArrow} alt="Next" />
      </div>
    </div>
  );
};

export default Carousel;
