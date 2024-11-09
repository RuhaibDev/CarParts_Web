import React from 'react';
import { FaStar, FaTruck } from 'react-icons/fa';

const Modal = ({ part, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={part.image} alt={part.name} className="modal-product-image" />
        <h2>{part.name}</h2>
        <p className="modal-model">Model: {part.model}</p>
        <p className="modal-description">{part.description}</p>
        <div className="modal-rating">
          <FaStar /> <span>{part.rating}</span>
        </div>
        <div className="modal-icons">
          <FaTruck /> Free Shipping
        </div>
        <div className="modal-price">{part.price} Rs</div>
      </div>
    </div>
  );
};

export default Modal;
