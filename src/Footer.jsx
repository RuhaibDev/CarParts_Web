import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt,FaTiktok, FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import './Footer.css';
import AULOGO from './AU-LOGO.png'; // Adjust the path as necessary
import AULOGO2 from './AU-LOGO-2.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer id='contact' className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact</h3>
          <p><FaPhoneAlt /> <strong>Phone:</strong>+92 324 3132790</p>
          <p><FaMapMarkerAlt /> <strong>Address:</strong> Dewan Center, 5 Temple Road, Lahore, Punjab, Pakistan</p>
          <p><strong>Working Hours:</strong><br />
            Monday – Saturday: 10:00 AM – 09:00 PM <br />
            Sunday: Closed
          </p>
        </div>
        <div className="logo-social">
          <div className="logo d-flex flex-column align-center justify-center">
            <img src={AULOGO2} style={{"height":"140px", width:"140px"}} alt="Automotive Logo" />
          <div className="d-flex align-center justify-center ">
            <img style={{"height":"140px", width:"170px"}} src={AULOGO} alt="Automotive Logo" />
            <h2><span>AutoMotive</span></h2>
</div>
          </div>
          <div className="social-icons">
            <a target='_blank' href="www.facebook.com"><FaFacebookSquare /></a>
            <a target='_blank' href="www.facebook.com"><FaInstagram /></a>
            <a target='_blank' href="www.facebook.com"><FaTiktok /></a> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
