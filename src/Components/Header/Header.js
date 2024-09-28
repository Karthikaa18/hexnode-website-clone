import React, { useState, useEffect } from 'react';
import './Header.css';
import FeaturesDropdown from '../Dropdown/FeaturesDropdown';
import CapabilitiesDropdown from '../Dropdown/CapabilitiesDropdown';
import PartnersDropdown from '../Dropdown/PartnersDropdown';
import SupportDropdown from '../Dropdown/SupportDropdown';
import Management from '../Management';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div 
        className={`top-bar ${isHovered ? 'hovered' : ''} ${isScrolled ? 'scrolled' : ''}`} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="top-bar-right">
          <span className="top-item">✨ What's new</span>
          <span className="top-item dropdown">Demo</span>
          <span className="top-item">Contact Sales</span>
          <span className="top-item phone-number">+1-833-439-6633</span>
        </div>
      </div>

      <header 
        className={`header ${isHovered ? 'hovered' : ''} ${isScrolled ? 'scrolled' : ''}`} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item brand">hexnode</li>
            <FeaturesDropdown /> 
            <CapabilitiesDropdown /> 
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Customers</li>
            <PartnersDropdown /> 
            <SupportDropdown /> 
          </ul>
          <button className="free-trial-btn">14 DAY FREE TRIAL</button>
        </nav>
      </header>

      <div className="header-section">
        <div className="header-left">
          <Management textProp="Seamless Android device management at your fingertips." />
          <div className="badge">
            <img
              src="https://static.hexnode.com/v2/assets/img/android-mdm/android-silver-badge.svg"
              alt="Android Enterprise Silver Partner"
            />
          </div>
        </div>
        <div className="header-right">
          <img
            src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fandroid-work-app.png&w=828&q=100"
            alt="Phone"
            className="phone-image"
          />
        </div>
      </div>
    </>
  );
};

export default Header;