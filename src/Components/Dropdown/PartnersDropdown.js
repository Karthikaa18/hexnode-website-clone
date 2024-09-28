import React, { useState } from 'react';
import './PartnersDropdown.css'; 

const PartnersDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(true); 
  };

  const closeDropdown = () => {
    setIsOpen(false); 
  };

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={closeDropdown}
    >
      Partners
      {isOpen && (
        <div className="partners-dropdown-menu">
          <div className="partners-cards">
            <div className="partners-card">
              <strong>Hexnode Partner Programs</strong>
              <p>Explore every partnership program offered by Hexnode</p>
            </div>
            <div className="partners-card">
              <strong>Reseller Partnership</strong>
              <p>Deliver the world-class mobile & PC security solution to your clients</p>
            </div>
            <div className="partners-card">
              <strong>MSP Partnership</strong>
              <p>Help your clients scale up their endpoint management efforts</p>
            </div>
            <div className="partners-card">
              <strong>OEM Partnership</strong>
              <p>Integrate with Hexnode for the complete management of your devices</p>
            </div>
            <div className="partners-card">
              <strong>Distribution Program</strong>
              <p>Venture the UEM market and grow your revenue by becoming Hexnode's official distributors</p>
            </div>
            <div className="partners-card">
              <strong>ISV Partnership</strong>
              <p>Sell Hexnode UEM and explore the UEM market</p>
            </div>
            <div className="partners-card">
              <strong>Hexnode Marketplace</strong>
              <p>Checkout Hexnode's partner integrations and business tools</p>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default PartnersDropdown;
