import React, { useState } from 'react';
import './FAQ.css';

const FAQData = [
  {
    question: "Why Buy Car AC Parts From Us?",
    answer: "We provide premium-quality car AC parts sourced from reliable manufacturers, ensuring durability and high performance. Our parts include options from trusted brands like Denso and Sanden, as well as products from Taiwan, Malaysia, and China, all available at competitive prices."
  },
  {
    question: "What Are The Available Car AC Parts?",
    answer: "Our inventory includes compressors, condensers, evaporators, and other essential AC components for various car models. We cater to both OEM and aftermarket needs, giving you a range of options to choose from."
  },
  {
    question: "Do You Offer Warranties On Your Products?",
    answer: "Yes, all our car AC parts come with warranties to ensure customer satisfaction and product reliability. Specific warranty periods may vary depending on the brand and type of part."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-header">FAQs</h2>
      <div className="faq-items">
        {FAQData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
