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
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }

    if (selectedProductId && productRefs.current[selectedProductId]) {
      productRefs.current[selectedProductId].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedProductId]);

  const toggleDetails = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const displayedProducts = isMobile && !showAll ? Api.slice(0, 10) : Api;

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
                style={{ height: "220px", width: "185px" }}
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

      {isMobile && !showAll && Api.length > 10 && (
        <div className="show-all-container">
          <button className="show-all-button" onClick={() => setShowAll(true)}>
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Data;
