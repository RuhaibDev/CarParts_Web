// Header.js
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import AULOGO from "./AU-LOGO.png";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const phoneNumber = "923243132790";
  const message = "Assalam U Alaikum, I would like to inquire about your services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Keep JS sticky for desktop; mobile will be fixed via CSS
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <header className={`sticky-element ${isSticky ? "is-sticky" : ""}`}>
      <div className={`header-inner ${isSticky ? "pad-none" : "p-20"}`}>
        {/* Left: Logo */}
        <div className="header-left">
          <img className="logo-img" src={AULOGO} alt="Logo" />
          <p className="logo-text f-w-700">Auto Motive</p>
        </div>

        {/* Center: Nav Links (collapse under mobile) */}
        <div className={`header-mid ${isMobileMenuOpen ? "mobile-open" : ""}`} style={{padding:"20px"}}>
          <nav>
            <ul className="nav-list">
              {["home", "services", "about", "contact"].map((sec) => (
                <li key={sec}>
                  <Link
                    to={sec}
                    smooth
                    duration={300}
                    offset={sec === "home" ? -60 : -110}
                    onClick={toggleMobileMenu}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </Link>
                </li>
              ))}
              <li className="whatsapp-mobile">
                <a href={url} target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>
                  <FaWhatsapp ></FaWhatsapp>
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right: Desktop WhatsApp + Mobile Hamburger */}
        <div className="header-right">
          <div className="whatsapp-desktop" style={{fontSize:"large"}}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp ></FaWhatsapp>
              <span>Whatsapp Us</span>
            </a>
          </div>
          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? "open1" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "open2" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "open3" : ""}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

             