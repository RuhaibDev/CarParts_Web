// Data.js
import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaTruck } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import Api from './Api'; // your data
import './Data.css';
import './Common.css';

const Data = ({ title, selectedProductId }) => {
  const productRefs = useRef({});
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    if (selectedProductId && productRefs.current[selectedProductId]) {
      productRefs.current[selectedProductId].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedProductId]);

  const toggleDetails = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const displayedProducts = Api;

  return (
    <div className="car-parts">
      <h1 className="section-title">{title || 'Available Car Parts'}</h1>
      <div className="cards-container">
        {displayedProducts.map((part) => {
          const isOpen = expandedCard === part.id;
          return (
            <div
              key={part.id}
              ref={(el) => (productRefs.current[part.id] = el)}
              className={`card ${isOpen ? 'expanded' : ''}`}
            >
              <img
                src={part.image}
                alt={part.name}
                className="product-image"
                style={{ height: '220px', width: '185px' }}
              />
              <div className="card-header">
                <h5 className={isOpen ? 'title-expanded' : 'title-truncated'}>
                  {part.name}
                </h5>
              </div>
              <p className="car-model">Model: {part.model}</p>
              <div className={`description ${isOpen ? 'show-full' : 'show-preview'}`}>
                {part.description}
              </div>
              <div className="rating">
                <FaStar /> <span>{part.rating}</span>
              </div>
              <div className="card-icons">
                <FaTruck /> Free Shipping
              </div>
              <button className="view-deal" onClick={() => toggleDetails(part.id)}>
                {isOpen ? 'Hide Details' : 'View Details'} <AiOutlineRight />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
