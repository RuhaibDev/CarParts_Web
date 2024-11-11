import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaTruck } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import Api from './Api'; // Importing data from Api.js
import './Data.css';
import './Common.css';

const Data = ({ title, selectedProductId }) => {
  const productRefs = useRef({});
  
  useEffect(() => {
    if (selectedProductId && productRefs.current[selectedProductId]) {
      productRefs.current[selectedProductId].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedProductId]);

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDetails = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="car-parts">
      <h1 className="section-title">Available Car Parts</h1>
      <div className="cards-container">
        {Api.map((part) => (
          <div
            key={part.id}
            ref={(el) => (productRefs.current[part.id] = el)}
            className={`card ${expandedCard === part.id ? 'expanded' : ''}`}
          >
            <img src={part.image} alt={part.name} className="product-image" />
            <div className="card-header">
              <h5>{part.name}</h5>
              <h5 className='price'>{part.price} Rs</h5>
            </div>
            <p className="car-model">Model: {part.model}</p>
            <div className={`description ${expandedCard === part.id ? 'show-full' : 'show-preview'}`}>
              {part.description}
            </div>
            <div className="rating">
              <FaStar /> <p>{part.rating}</p>
            </div>
            <div className="card-icons d-flex justify-start g-5">
              <FaTruck /> Free Shipping
            </div>
            <button className="view-deal" onClick={() => toggleDetails(part.id)}>
              {expandedCard === part.id ? 'Hide Details' : 'View Details'} <AiOutlineRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
