import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutube, FaPinterestSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='contact' className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact</h3>
          <p><FaPhoneAlt /> <strong>Phone:</strong> 07 3205 4356</p>
          <p><FaPhoneAlt /> <strong>Mobile:</strong> 0404 035 678</p>
          <p><FaMapMarkerAlt /> <strong>Address:</strong> 99 South Pine Road, Brisbane QLD 4500, Australia</p>
          <p><strong>Working Hours:</strong><br />
            Monday – Friday: 08:00 AM – 05:00 PM <br />
            Saturday: 08:00 AM – 02:00 PM <br />
            Sunday: Closed
          </p>
        </div>
        <div className="logo-social">
          <div className="logo">
            <img src="path/to/logo.png" alt="Qet Fast Car Service Logo" className="logo-image" />
            <h2>Qet Fast <span>car service</span></h2>
          </div>
          <div className="social-icons">
            <a target='' href="www.facebook.com"><FaFacebookSquare /></a>
            <a target='' href="www.facebook.com"><FaTwitterSquare /></a>
            <a target='' href="www.facebook.com"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
