import React from 'react';
import './DidYouKnow.css';
import Slider from 'react-slick';
import { FaWrench, FaDollarSign, FaWind, FaLeaf, FaSnowflake, FaTachometerAlt, FaThermometerHalf, FaCogs, FaHeart } from 'react-icons/fa';
import { MdSavings, MdFilterVintage, MdSpeed, MdEvStation, MdLocalGasStation, MdBuild } from 'react-icons/md';

const facts = [
  {
    title: "Regular Maintenance Saves Money",
    description: "Maintaining your car’s AC system can extend its lifespan and save you money on repairs.",
    icon: <FaWrench />
  },
  {
    title: "Filters Keep Air Fresh",
    description: "Changing your car’s cabin air filter regularly helps keep dust, pollen, and allergens out.",
    icon: <FaWind />
  },
  {
    title: "High-Quality Parts Improve Efficiency",
    description: "Using premium AC parts ensures better cooling efficiency and faster temperature control.",
    icon: <MdSpeed />
  },
  {
    title: "Refrigerant Check",
    description: "Low refrigerant levels can lead to poor performance and increased fuel consumption.",
    icon: <FaThermometerHalf />
  },
  {
    title: "Compressor Care",
    description: "The compressor is the heart of your car’s AC. Regular use keeps it running smoothly.",
    icon: <FaCogs />
  }
];

const DidYouKnow = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="did-you-know">
      <h2 className="section-title">Did You Know?</h2>
      <p className="section-subtitle">Get insights on maintaining a cool and comfortable ride</p>
      <Slider {...settings} className="fact-slider">
        {facts.map((fact, index) => (
          <div key={index} className="fact-card">
            <div className="fact-icon">{fact.icon}</div>
            <h3 className="fact-title">{fact.title}</h3>
            <p className="fact-description">{fact.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DidYouKnow;
