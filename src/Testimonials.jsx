import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "Automotive provides outstanding service with high-quality parts! My car runs smoothly thanks to them.",
    name: "Sophia L",
    title: "Car Enthusiast"
  },
  {
    text: "Great selection of car AC parts! I was able to find exactly what I needed without breaking the bank.",
    name: "John D",
    title: "Mechanic"
  },
  {
    text: "Affordable and reliable parts, perfect for my workshop. I trust Automotive for quality and service.",
    name: "Emily R",
    title: "Garage Owner"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonials-vertical-container">
      <h2 className="heading">What People Are Saying</h2>
      <p className="subheading">See how Automotive has made a difference</p>
      
      <div className="testimonial-content">
        <div className="testimonial-text-box">
          <p className="testimonial-text">{testimonials[activeIndex].text}</p>
          <h4 className="testimonial-name">{testimonials[activeIndex].name}</h4>
          <p className="testimonial-title">{testimonials[activeIndex].title}</p>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
