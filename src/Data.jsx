import React, { useState,useEffect,useRef } from 'react';
import { FaStar, FaTruck } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import Api from './Api'; // Importing data from Api.js
import Modal from './Modal'; // Import Modal component
import './Data.css';
import './Common.css';

const Data = ({ title,selectedProductId }) => {
  const productRefs = useRef({}); // Store refs for each product

  useEffect(() => {
    if (selectedProductId && productRefs.current[selectedProductId]) {
      productRefs.current[selectedProductId].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedProductId]);
  const [selectedPart, setSelectedPart] = useState(null); // State to track selected part for modal

  const openModal = (part) => {
    setSelectedPart(part);
  };

  const closeModal = () => {
    setSelectedPart(null);
  };

  return (
    <div className="car-parts">
      <h1 className="section-title">Available Car Parts</h1>
      <div className="cards-container">
        {Api.map((part) => (
          <div
            key={part.id}
            ref={(el) => (productRefs.current[part.id] = el)} // Attach ref to each product card
            className={`card ${selectedProductId === part.id ? 'highlight' : ''}`} // Optionally add highlight styling
          >
            <img src={part.image} alt={part.name} className="product-image" />
            <div className="card-header">
              <h5>{part.name}</h5>
              <h5>{part.price} Rs</h5>
            </div>
            <p className="car-model">Model: {part.model}</p>
            <p className="description">{part.description.slice(0, 50)}...</p>
            <div className="rating">
              <FaStar /> <p>{part.rating}</p>
            </div>
            <div className="card-icons d-flex justify-start g-5">
              <FaTruck /> Free Shipping
            </div>
            <button className="view-deal" onClick={() => openModal(part)}>
              View Deal <AiOutlineRight />
            </button>
          </div>
        ))}
      </div>

      {/* Modal for showing selected product details */}
      {selectedPart && <Modal part={selectedPart} onClose={closeModal} />}
    </div>
  );
};

export default Data;
